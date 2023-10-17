import { Router } from 'express';
import * as authController from '../api/controllers/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/auth', router);

  router.post('/login', authController.login);

  router.post('/register', authController.register);
};
