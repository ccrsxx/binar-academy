import { Car } from '../models/index.js';
import * as Models from '../models/car.js';
import { isValidDate, isValidCarType } from '../libs/utils.js';

/**
 * Function type for middleware.
 *
 * @template {Record<string, any>} [T=Record<string, any>] Default is
 *   `Record<string, any>`. Default is `Record<string, any>`
 * @callback Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response<any, T>} res
 * @param {import('express').NextFunction} next
 */

/** @typedef {import('express').NextFunction | void} ReturnValueMiddleware */

/**
 * Check if car exists.
 *
 * @type {Middleware<{ car: Models.CarAttributes }>}
 * @returns {Promise<ReturnValueMiddleware>}
 */
export async function carExists(req, res, next) {
  const { id } = req.params;

  let car;

  try {
    car = await Car.findByPk(id);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ message: `Error: ${err.message}` });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });

    return;
  }

  if (!car) {
    res.status(404).json({ message: `Car with id ${id} not found` });
    return;
  }

  res.locals.car = car.dataValues;

  next();
}

/**
 * Check if car is valid.
 *
 * @type {Middleware}
 * @returns {ReturnValueMiddleware}
 */
export function carValid(req, res, next) {
  const { body, method } = req;

  const carDataModel = /**
   * @type {[
   *   Exclude<keyof Models.CarAttributes, 'id'>,
   *   'string' | 'number'
   * ][]}
   */ (Object.entries(Models.defaultCarType)).slice(1);

  const isEmptyBody = !Object.keys(body).length;

  if (isEmptyBody) {
    res.status(400).json({ message: 'Missing request body' });
    return;
  }

  for (const bodyKey in body) {
    const isInKnownCarKeys = carDataModel.some(([key]) => key === bodyKey);

    if (!isInKnownCarKeys) {
      res.status(400).json({ message: `Unknown ${bodyKey} property` });
      return;
    }
  }

  for (const [carModelKey, carModelValue] of carDataModel) {
    const isInBody = carModelKey in body;

    if (!isInBody) {
      const isUpdatingCar = method === 'PUT';

      if (isUpdatingCar) continue;

      res.status(400).json({ message: `Missing ${carModelKey} property` });
      return;
    }

    const modelType = typeof carModelValue;
    const bodyType = typeof body[carModelKey];

    const isRightType = modelType === bodyType;

    if (!isRightType) {
      res.status(400).json({
        message: `Property ${carModelKey} must be a ${modelType}. Received a ${bodyType}`
      });
      return;
    }

    if (carModelKey === 'availableAt') {
      const bodyAvailableAtValue = body[carModelKey];

      if (!isValidDate(bodyAvailableAtValue)) {
        res.status(400).json({
          message: `Property ${carModelKey} must be a valid date`
        });
        return;
      }
    }

    if (carModelKey === 'type') {
      const bodyTypeValue = body[carModelKey];

      if (!isValidCarType(bodyTypeValue)) {
        res.status(400).json({
          message: `Property ${carModelKey} must be one of ${Models.carTypes.join(
            ', '
          )}. Received a ${bodyTypeValue}`
        });
        return;
      }
    }
  }

  next();
}

/**
 * Is admin
 *
 * @type {Middleware}
 * @returns {ReturnValueMiddleware}
 */
export function isAdmin(req, res, next) {
  // check using authorization header
  const { authorization } = req.headers;

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
