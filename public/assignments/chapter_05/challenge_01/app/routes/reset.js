import * as carController from '../api/controllers/car.js';
import * as authMiddleware from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  app.get(
    '/reset',
    authMiddleware.isAuthorized,
    authMiddleware.isSuperAdmin,
    carController.resetCar
  );
};
