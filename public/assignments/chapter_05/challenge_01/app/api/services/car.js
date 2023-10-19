import {
  ApplicationError,
  generateApplicationError
} from '../../libs/error.js';
import * as carRepository from '../repositories/car.js';
import * as Models from '../models/car.js';

export async function getCars() {
  try {
    const cars = await carRepository.getCars();
    return cars;
  } catch (err) {
    throw generateApplicationError(err, 'Error while getting cars', 500);
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
    throw generateApplicationError(err, 'Error while getting car', 500);
  }
}

/**
 * @param {Models.CarAttributes} payload
 * @param {string} createdBy
 */
export async function createCar(payload, createdBy) {
  const carWithCreatedBy = {
    ...payload,
    createdBy
  };

  console.log({ carWithCreatedBy });

  try {
    const car = await carRepository.createCar(carWithCreatedBy);
    return car;
  } catch (err) {
    throw generateApplicationError(err, 'Error while creating car', 500);
  }
}

/**
 * @param {string} id
 * @param {Partial<Models.CarAttributes>} payload
 */
export async function updateCar(id, payload) {
  try {
    const car = await carRepository.updateCar(id, payload);

    console.log({ car });

    return car;
  } catch (err) {
    throw generateApplicationError(err, 'Error while updating car', 500);
  }
}

/** @param {string} id */
export async function destroyCar(id) {
  try {
    const car = await carRepository.destroyCar(id);
    return car;
  } catch (err) {
    throw generateApplicationError(err, 'Error while deleting car', 500);
  }
}

export async function resetCar() {
  try {
    await carRepository.resetCar();
  } catch (err) {
    throw generateApplicationError(err, 'Error while resetting car', 500);
  }
}
