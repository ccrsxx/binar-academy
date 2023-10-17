import * as indexController from '../api/controllers/index.js';

/**
 * @param {import('express').Application} app
 * @returns {void}
 */
export default (app) => {
  app.get('/', indexController.ping);
};
