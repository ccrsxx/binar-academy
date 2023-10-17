import { faker } from '@faker-js/faker';
import * as CarModel from '../api/models/car.js';
import * as UserModel from '../api/models/user.js';

/**
 * Generate 100 dummy cars
 *
 * @returns {Omit<CarModel.CarAttributes, 'id'>[]}
 */
export function generateRandomCar() {
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
 * Generate 100 dummy users
 *
 * @returns {Omit<UserModel.UserAttributes, 'id'>[]}
 */
export function generateRandomUser() {
  return Array.from({ length: 100 }, () => ({
    name: faker.person.fullName(),
    role: faker.helpers.arrayElement(['superadmin', 'admin', 'member']),
    image: faker.image.avatar(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
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
  return CarModel.carTypes.includes(/** @type {CarModel.CarTypes} */ (type));
}

/**
 * @param {string} role
 * @returns {string is UserModel.UserRoles}
 */
export function isValidUserRole(role) {
  return UserModel.userRoles.includes(
    /** @type {UserModel.UserRoles} */ (role)
  );
}
