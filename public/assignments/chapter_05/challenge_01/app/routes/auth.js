import { Router } from 'express';
import * as authController from '../api/controllers/auth.js';
import { isValidCredential } from '../middlewares/validation.js';
import { isSuperAdmin, isAuthorized } from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/auth', router);

  router.post('/login', isValidCredential, authController.login);

  router.post('/register', isValidCredential, authController.register);

  router.post(
    '/register/admin',
    isAuthorized,
    isSuperAdmin,
    authController.register
  );
};
