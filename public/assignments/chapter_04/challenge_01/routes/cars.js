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
    const data = await Car.findAll();

    res.status(200).json({ data: data });
  });

  router.get('/:id', carExists, async (req, res) => {
    const { id } = req.params;

    const data = await Car.findByPk(id);

    res.status(200).json({ data: data });
  });

  router.post('/', carValid, async (req, res) => {
    const { body } = req;

    const data = await Car.create(body);

    res.status(201).json({ message: 'Car created successfully', data: data });
  });

  router.put('/:id', carExists, carValid, async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    const [, data] = await Car.update(body, {
      where: { id },
      returning: true
    });

    res.status(200).json({ message: 'Car updated successfully', data: data });
  });

  router.delete('/:id', carExists, async (req, res) => {
    const { id } = req.params;

    const data = await Car.findByPk(id);

    await Car.destroy({ where: { id } });

    res.status(200).json({ message: 'Car deleted successfully', data: data });
  });
};
