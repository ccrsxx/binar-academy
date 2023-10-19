import * as carController from '../api/controllers/car.js';
import { isAuthorized, isSuperAdmin } from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  app.get('/reset', isAuthorized, isSuperAdmin, carController.resetCar);
};
