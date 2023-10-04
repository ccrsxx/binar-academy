import { isAdmin } from '../middlewares/validation.js';
import { Car } from '../db/models/index.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.post('/reset', isAdmin, async (req, res) => {
    await Car.destroy({ truncate: true });
    res.status(200).json({ message: 'Database reset successfully' });
  });
};
