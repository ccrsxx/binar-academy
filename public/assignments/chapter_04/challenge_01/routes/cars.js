import { Router } from 'express';
import { carExists, carValid } from '../middlewares/validation.js';
import { Car } from '../db/models/index.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/cars', router);

  router.get('/', async (req, res) => {
    try {
      const data = await Car.findAll();

      res.status(200).json({ data: data });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `Error: ${err.message}` });
        return;
      }

      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.get('/:id', carExists, async (req, res) => {
    const data = res.locals.car;

    res.status(200).json({ data: data });
  });

  router.post('/', carValid, async (req, res) => {
    const { body } = req;

    try {
      const data = await Car.create(body);

      res.status(201).json({ message: 'Car created successfully', data: data });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `Error: ${err.message}` });
        return;
      }

      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.put('/:id', carExists, carValid, async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
      const [, data] = await Car.update(body, {
        where: { id },
        returning: true
      });

      res.status(200).json({ message: 'Car updated successfully', data: data });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `Error: ${err.message}` });
        return;
      }

      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.delete('/:id', carExists, async (req, res) => {
    const { id } = req.params;

    try {
      await Car.destroy({ where: { id } });

      const data = res.locals.car;

      res.status(200).json({ message: 'Car deleted successfully', data: data });
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ message: `Error: ${err.message}` });
        return;
      }

      res.status(500).json({ message: 'Internal server error' });
    }
  });
};
