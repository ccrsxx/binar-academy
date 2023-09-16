import { database } from '../libs/database.js';

/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.get('/', (req, res) =>
    res.status(200).json({
      message: 'Ping successfully',
      documentation:
        'https://www.postman.com/ccrsxx/workspace/rental-car/collection/27649751-fbfb558d-d5e1-4773-9910-2d1d52f2f2c8'
    })
  );

  app.get('/cars', (req, res) => {
    const data = database.getData();

    res.status(200).json({ data: data });
  });

  app.get('/cars/:id', (req, res) => {
    const { id } = req.params;

    const car = database.getCarById(id);

    if (!car) {
      res.status(404).json({ message: `Car with id ${id} not found` });
      return;
    }

    res.status(200).json(car);
  });

  app.post('/cars', async (req, res) => {
    const { body } = req;

    const data = await database.createCar(body);

    if (!data) {
      res.status(409).json({ message: 'Car already exists' });
      return;
    }

    res.status(201).json({ message: 'Car created successfully', data: data });
  });

  app.put('/cars/:id', async (req, res) => {
    const { body } = req;
    const { id } = req.params;

    const data = await database.updateCar(id, body);

    if (!data) {
      res.status(404).json({ message: `Car with id ${id} not found` });
      return;
    }

    res.status(200).json({ message: 'Car updated successfully', data: data });
  });

  app.delete('/cars/:id', async (req, res) => {
    const { id } = req.params;

    const data = await database.deleteCar(id);

    if (!data) {
      res.status(404).json({ message: `Car with id ${id} not found` });
      return;
    }

    res.status(200).json({ message: 'Car deleted successfully', data: data });
  });
};
