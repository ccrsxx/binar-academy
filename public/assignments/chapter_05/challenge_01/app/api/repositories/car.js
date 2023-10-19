import { Car } from '../models/index.js';
import * as Models from '../models/car.js';
import { generateRandomCar } from '../../libs/seed.js';

export function getCars() {
  return Car.findAll();
}

/** @param {string} id */
export function getCar(id) {
  return Car.findByPk(id);
}

/** @param {Models.CarAttributes} payload */
export function createCar(payload) {
  return Car.create(payload);
}

/**
 * @param {string} id
 * @param {Partial<Models.CarAttributes>} payload
 */
export function updateCar(id, payload) {
  return Car.update(payload, {
    where: { id },
    returning: true
  });
}

/** @param {string} id */
export function destroyCar(id) {
  return Car.destroy({ where: { id } });
}

export async function resetCar() {
  await Car.destroy({ truncate: true });
  await Car.bulkCreate(
    /** @type {Models.CarAttributes[]} */ (await generateRandomCar())
  );
}
