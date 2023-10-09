import { isAdmin } from '../middlewares/validation.js';
import { Car } from '../models/index.js';
import { generateRandomData } from '../libs/utils.js';
import * as Models from '../models/car.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.post('/reset', isAdmin, async (req, res) => {
    try {
      await Car.destroy({ truncate: true });
      await Car.bulkCreate(
        /** @type {Models.CarAttributes[]} */ (
          /** @type {unknown} */ (generateRandomData())
        )
      );
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `Error: ${err.message}` });
        return;
      }

      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    res.status(200).json({ message: 'Database reset successfully' });
  });
};
