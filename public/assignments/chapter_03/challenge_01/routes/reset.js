import { database } from '../libs/database.js';
import { isAdmin } from '../middlewares/validation.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.post('/reset', isAdmin, async (req, res) => {
    await database.resetDatabase();
    res.status(200).json({ message: 'Database reset successfully' });
  });
};
