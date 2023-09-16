import { database } from '../libs/database.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.get('/reset', async (req, res) => {
    await database.resetDatabase();
    res.status(200).json({ message: 'Database reset successfully' });
  });
};
