import { Router } from 'express';
import * as authMiddleware from '../middlewares/auth.js';
import * as carController from '../api/controllers/car.js';
import * as validationMiddleware from '../middlewares/validation.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/cars', router);

  router.get('/', authMiddleware.isAuthorized, carController.getCars);

  router.get(
    '/:id',
    authMiddleware.isAuthorized,
    validationMiddleware.isCarExists,
    carController.getCar
  );

  router.post(
    '/',
    authMiddleware.isAuthorized,
    authMiddleware.isAdmin,
    carController.createCar
  );

  router.put(
    '/:id',
    authMiddleware.isAuthorized,
    authMiddleware.isAdmin,
    validationMiddleware.isCarExists,
    carController.updateCar
  );

  router.delete(
    '/:id',
    authMiddleware.isAuthorized,
    authMiddleware.isAdmin,
    validationMiddleware.isCarExists,
    carController.destroyCar
  );
};
