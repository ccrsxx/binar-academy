import { Router } from 'express';
import * as authController from '../api/controllers/auth.js';
import * as validationMiddleware from '../middlewares/validation.js';
import * as authMiddleware from '../middlewares/auth.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/auth', router);

  router.post(
    '/login',
    validationMiddleware.isValidCredential,
    authController.login
  );

  router.post(
    '/register',
    validationMiddleware.isValidCredential,
    authController.register
  );

  router.post(
    '/register/admin',
    authMiddleware.isAuthorized,
    authMiddleware.isSuperAdmin,
    authController.register
  );
};
