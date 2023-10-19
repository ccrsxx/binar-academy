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

  const { message: appErrorMessage, statusCode: appErrorStatusCode } =
    assertedError;

  console.log({
    name: assertedError.name,
    msg: assertedError.message,
    cause: assertedError.cause,
    databaseError: err instanceof DatabaseError,
    validationError: err instanceof ValidationError,
    uniqueConstraintError: err instanceof UniqueConstraintError
  });

  const isValidationError = [ValidationError, UniqueConstraintError].some(
    (error) => err instanceof error
  );

  const parsedErrorMessage = appErrorMessage || 'Internal server error';

  const parsedStatusCode = isValidationError
    ? 400
    : appErrorStatusCode || statusCode;

  return new ApplicationError(
    `${message}: ${parsedErrorMessage}`,
    parsedStatusCode
  );
}
