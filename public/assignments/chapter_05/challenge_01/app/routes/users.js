import { Router } from 'express';
import * as userController from '../api/controllers/user.js';
import { isAuthorized } from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/users', router);

  router.get('/me', isAuthorized, userController.getCurrentUser);
};
