import { Router } from 'express';
import { isAdmin, isAuthorized } from '../middlewares/auth.js';
import * as carController from '../api/controllers/car.js';
import { isCarExists } from '../middlewares/validation.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/cars', router);

  router.get('/', isAuthorized, carController.getCars);

  router.get('/:id', isAuthorized, isCarExists, carController.getCar);

  router.post('/', isAuthorized, isAdmin, carController.createCar);

  router.put(
    '/:id',
    isAuthorized,
    isAdmin,
    isCarExists,
    carController.updateCar
  );

  router.delete(
    '/:id',
    isAuthorized,
    isAdmin,
    isCarExists,
    carController.destroyCar
  );
};
