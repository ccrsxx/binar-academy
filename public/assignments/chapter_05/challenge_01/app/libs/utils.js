import * as CarModel from '../api/models/car.js';
import * as UserModel from '../api/models/user.js';

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
