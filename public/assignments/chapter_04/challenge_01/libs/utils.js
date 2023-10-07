import { faker } from '@faker-js/faker';
import * as Models from '../db/models/car.js';

/**
 * Generate 100 dummy datas
 *
 * @returns {Omit<Models.CarAttributes, 'id'>[]}
 */
export function generateRandomData() {
  return Array.from({ length: 100 }, () => ({
    name: faker.commerce.productName(),
    type: faker.helpers.arrayElement(['small', 'medium', 'large']),
    image: faker.image.url(),
    capacity: faker.number.int({ max: 100 }),
    rentPerDay: faker.number.float({ max: 10_000_000 }),
    description: faker.commerce.productDescription(),
    availableAt: faker.date.future(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent()
  }));
}

/**
 * Check if date string is valid
 *
 * @param {string} date
 * @returns {boolean}
 */
export function isValidDate(date) {
  return !isNaN(Date.parse(date));
}

/**
 * Check if type is valid car type
 *
 * @param {string} type
 * @returns {string is Models.CarTypes}
 */
export function isValidCarType(type) {
  return Models.carTypes.includes(/** @type {Models.CarTypes} */ (type));
}
