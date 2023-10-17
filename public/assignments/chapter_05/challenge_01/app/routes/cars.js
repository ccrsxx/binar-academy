import { Router } from 'express';
import { isAuthorized } from '../middlewares/auth.js';
import * as carController from '../api/controllers/car.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/cars', router);

  router.get('/', isAuthorized, carController.getCars);

  router.get('/:id', isAuthorized, carController.getCar);

  router.post('/', isAuthorized, carController.createCar);

  router.put('/:id', isAuthorized, carController.updateCar);

  router.delete('/:id', isAuthorized, carController.destroyCar);
};
