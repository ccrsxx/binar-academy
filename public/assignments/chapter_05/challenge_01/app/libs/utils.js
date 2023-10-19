import { faker } from '@faker-js/faker';
import { sequelize, User } from '../api/models/index.js';
import * as CarModel from '../api/models/car.js';
import * as UserModel from '../api/models/user.js';

/**
 * Generate 100 dummy cars
 *
 * @returns {Promise<Omit<CarModel.CarAttributes, 'id'>[]>}
 */
export function generateRandomCar() {
  return Promise.all(
    Array.from({ length: 100 }, async () => {
      const randomUser = await User.findOne({ order: sequelize.random() });
      const randomUserId = /** @type {string} */ (randomUser?.dataValues.id);

      return {
        name: faker.commerce.productName(),
        type: faker.helpers.arrayElement(CarModel.carTypes),
        image: faker.image.url(),
        capacity: faker.number.int({ max: 100 }),
        createdBy: randomUserId,
        deletedAt: null,
        deletedBy: null,
        updatedBy: null,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        rentPerDay: faker.number.float({ max: 10_000_000 }),
        description: faker.commerce.productDescription(),
        availableAt: faker.date.future()
      };
    })
  );
}

/**
 * Generate 100 dummy users
 *
 * @returns {Omit<UserModel.UserAttributes, 'id'>[]}
 */
export function generateRandomUser() {
  return Array.from({ length: 100 }, () => ({
    name: faker.person.fullName(),
    role: faker.helpers.arrayElement(UserModel.userRoles),
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
