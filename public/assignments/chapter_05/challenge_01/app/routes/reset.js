import * as carController from '../api/controllers/car.js';
import { isAdmin } from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  app.get('/reset', isAdmin, carController.resetCar);
};
