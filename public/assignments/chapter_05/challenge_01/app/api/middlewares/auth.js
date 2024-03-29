import { ApplicationError } from '../../libs/error.js';
import * as authService from '../services/auth.js';
import * as Models from '../models/user.js';
import * as Types from '../../libs/types/common.js';

/**
 * Check if user is authorized.
 *
 * @type {Types.Middleware<{ user: Models.UserAttributes }>}
 * @returns {void}
 */
export async function isAuthorized(req, res, next) {
  const authorization = req.get('authorization');

  if (!authorization) {
    res.status(400).json({ message: 'Missing authorization header' });
    return;
  }

  const [type, token] = authorization.split(' ');

  if (type.toLocaleLowerCase() !== 'bearer') {
    res.status(401).json({ message: 'Invalid authorization token' });
    return;
  }

  try {
    const user = await authService.verifyToken(token);
    res.locals.user = user.dataValues;
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
    return;
  }

  next();
}

/**
 * Check if user is admin or superadmin.
 *
 * @type {Types.Middleware<
 *   Types.ExtractLocalsMiddleware<typeof isAuthorized> & {
 *     isAdmin: boolean;
 *   }
 * >}
 * @returns {void}
 */
export function isAdmin(req, res, next) {
  const { role } = res.locals.user;

  const isAdmin = ['superadmin', 'admin'].includes(role);

  if (!isAdmin) {
    res
      .status(403)
      .json({ message: 'Only admin is allowed for this endpoint' });
    return;
  }

  res.locals.isAdmin = isAdmin;

  next();
}

/**
 * Check if user is superadmin.
 *
 * @type {Types.Middleware<
 *   Types.ExtractLocalsMiddleware<typeof isAuthorized> & {
 *     isSuperAdmin: boolean;
 *   }
 * >}
 * @returns {void}
 */
export function isSuperAdmin(req, res, next) {
  const { role } = res.locals.user;

  const isSuperAdmin = role === 'superadmin';

  if (!isSuperAdmin) {
    res
      .status(403)
      .json({ message: 'Only superadmin is allowed for this endpoint' });
    return;
  }

  res.locals.isSuperAdmin = isSuperAdmin;

  next();
}
