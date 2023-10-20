import { Router } from 'express';
import * as userController from '../api/controllers/user.js';
import * as authMiddleware from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/users', router);

  router.get('/me', authMiddleware.isAuthorized, userController.getCurrentUser);
};
