import * as carService from '../services/car.js';
import { ApplicationError } from '../../libs/error.js';
import * as Types from '../../libs/types/common.js';

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
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

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
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

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
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

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
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

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
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

/**
 * @type {Types.Controller}
 * @returns {Promise<void>}
 */
export async function resetCar(req, res) {
  try {
    await carService.resetCar();

    res.status(200).json({ message: 'Car reset successfully' });
  } catch (err) {
    if (err instanceof ApplicationError) {
      res.status(err.statusCode).json({ message: err.message });
      return;
    }

    res.status(500).json({ message: 'Internal server error' });
  }
}
