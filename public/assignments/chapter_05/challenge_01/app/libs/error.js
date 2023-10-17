import {
  DatabaseError,
  UniqueConstraintError,
  ValidationError,
  ValidationErrorItem
} from 'sequelize';

export class ApplicationError extends Error {
  /**
   * @param {string} message
   * @param {number} statusCode
   */
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/**
 * Generate application error
 *
 * @param {unknown} err
 * @param {string} message
 * @param {number} statusCode
 * @returns {ApplicationError}
 */
export function generateApplicationError(err, message, statusCode) {
  const assertedError = /** @type {ApplicationError} */ (err);

  console.log({
    name: assertedError.name,
    msg: assertedError.message,
    cause: assertedError.cause,
    databaseError: err instanceof DatabaseError,
    validationError: err instanceof ValidationError,
    uniqueConstraintError: err instanceof UniqueConstraintError
  });

  return new ApplicationError(
    `${message}: ${assertedError?.message || 'Internal server error'}`,
    assertedError?.statusCode || statusCode || 500
  );
}
