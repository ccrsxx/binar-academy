import { Router } from 'express';
import { database } from '../libs/database.js';
import { carExists, carValid } from '../middlewares/validation.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  const router = Router();

  app.use('/cars', router);

  router.get('/', (req, res) => {
    const data = database.getData();

    res.status(200).json({ data: data });
  });

  router.get('/:id', carExists, (req, res) => {
    const { id } = req.params;

    const data = database.getCarById(id);

    res.status(200).json({ data: data });
  });

  router.post('/', carValid, async (req, res) => {
    const { body } = req;

    const data = await database.createCar(body);

    res.status(201).json({ message: 'Car created successfully', data: data });
  });

  router.put('/:id', carExists, carValid, async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    const data = await database.updateCar(id, body);

    res.status(200).json({ message: 'Car updated successfully', data: data });
  });

  router.delete('/:id', carExists, async (req, res) => {
    const { id } = req.params;

    const data = await database.deleteCar(id);

    res.status(200).json({ message: 'Car deleted successfully', data: data });
  });
};
