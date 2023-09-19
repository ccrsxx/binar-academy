import { database } from '../libs/database.js';
import * as Models from '../models/car.js';

/**
 * Function type for middleware
 *
 * @callback Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {import('express').NextFunction | void}
 */

/**
 * Check if car exists
 *
 * @type {Middleware}
 */
export function carExists(req, res, next) {
  const { id } = req.params;

  const car = database.getCarById(id);

  if (!car) {
    res.status(404).json({ message: `Car with id ${id} not found` });
    return;
  }

  next();
}

/**
 * Check if car is valid.
 *
 * @type {Middleware}
 */
export function carValid(req, res, next) {
  const { body, method } = req;

  const carDataModel =
    /** @type {[Exclude<keyof Models.Car, 'id'>, 'string' | 'number'][]} */ (
      Object.entries(Models.defaultCarType)
    ).slice(1);

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
  }

  next();
}

/**
 * Is admin
 *
 * @type {Middleware}
 */
export function isAdmin(req, res, next) {
  // check using authorization header
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'Missing authorization header' });
    return;
  }

  const [type, token] = authorization.split(' ');

  if (type.toLocaleLowerCase() !== 'bearer' || token !== 'admin') {
    res.status(401).json({ message: 'Invalid authorization header' });
    return;
  }

  next();
}
