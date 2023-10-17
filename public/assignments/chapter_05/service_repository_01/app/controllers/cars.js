import { ApplicationError } from '../libs/errors.js';
import { carService } from '../services/car.js';

/**
 * @callback Controller
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

/** @type {Controller} */
export async function getCars(req, res) {
  try {
    const cars = await carService.getCars();

    res.status(200).json({ data: cars });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}

/** @type {Controller} */
export async function getCar(req, res) {
  const { id } = req.params;

  try {
    const car = await carService.getCar(id);

    res.status(200).json({ data: car });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}

/** @type {Controller} */
export async function createCar(req, res) {
  const { body } = req;

  try {
    const car = await carService.createCar(body);

    res.status(201).json({ message: 'Car created successfully', data: car });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}

/** @type {Controller} */
export async function updateCar(req, res) {
  const { body } = req;
  const { id } = req.params;

  try {
    const car = await carService.updateCar(id, body);

    res.status(200).json({ message: 'Car updated successfully', data: car });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}

/** @type {Controller} */
export async function destroyCar(req, res) {
  const { id } = req.params;

  try {
    const car = await carService.destroyCar(id);

    res.status(200).json({ message: 'Car deleted successfully', data: car });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}
