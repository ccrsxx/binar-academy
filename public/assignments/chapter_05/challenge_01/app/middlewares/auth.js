import { ApplicationError } from '../libs/error.js';
import * as authService from '../api/services/auth.js';
import * as Models from '../api/models/user.js';
import * as Types from '../libs/types/common.js';

/**
 * Check if user is authorized
 *
 * @type {Types.Middleware<{ user: Models.UserAttributes }>}
 * @returns {Types.ReturnValueMiddleware}
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
 * Check if user is admin
 *
 * @type {Types.Middleware}
 * @returns {Types.ReturnValueMiddleware}
 */
export function isAdmin(req, res, next) {
  // check using authorization header
  const authorization = req.get('authorization');

  if (!authorization) {
    res.status(400).json({ message: 'Missing authorization header' });
    return;
  }

  const [type, token] = authorization.split(' ');

  if (type.toLocaleLowerCase() !== 'bearer' || token !== 'admin') {
    res.status(401).json({ message: 'Invalid authorization token' });
    return;
  }

  next();
}
