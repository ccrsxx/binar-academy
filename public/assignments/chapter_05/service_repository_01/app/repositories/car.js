import { Car } from '../models/index.js';

function getCars() {
  return Car.findAll();
}

/** @param {string} id */
function getCar(id) {
  return Car.findByPk(id);
}

/** @param {any} body */
function createCar(body) {
  return Car.create(body);
}

/**
 * @param {string} id
 * @param {any} body
 */
function updateCar(id, body) {
  return Car.update(body, {
    where: { id },
    returning: true
  });
}

/** @param {string} id */
function destroyCar(id) {
  return Car.destroy({ where: { id } });
}

export const carRepository = {
  getCar,
  getCars,
  createCar,
  updateCar,
  destroyCar
};
