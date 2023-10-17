import { ApplicationError } from '../libs/errors.js';
import { carRepository } from '../repositories/car.js';

export async function getCars() {
  try {
    const cars = await carRepository.getCars();
    return cars;
  } catch (err) {
    throw new ApplicationError('Error', 500);
  }
}

/** @param {string} id */
export async function getCar(id) {
  try {
    const car = await carRepository.getCar(id);

    if (!car) {
      throw new ApplicationError('Car not found', 404);
    }

    return car;
  } catch (err) {
    if (err instanceof ApplicationError) {
      throw new ApplicationError(
        `Error: ${err.message}`,
        err.statusCode || 500
      );
    }
  }
}

/** @param {any} payload */
export async function createCar(payload) {
  try {
    const car = await carRepository.createCar(payload);
    return car;
  } catch {
    throw new ApplicationError('Error', 500);
  }
}

/**
 * @param {string} id
 * @param {any} payload
 */
export async function updateCar(id, payload) {
  try {
    const car = await carRepository.updateCar(id, payload);
    return car;
  } catch (err) {
    throw new ApplicationError('Error', 500);
  }
}

/** @param {string} id */
export async function destroyCar(id) {
  try {
    const car = await carRepository.destroyCar(id);
    return car;
  } catch (err) {
    throw new ApplicationError('Error', 500);
  }
}

export const carService = {
  getCar,
  getCars,
  createCar,
  updateCar,
  destroyCar
};
