/**
 * Function type for middleware.
 *
 * @template {Record<string, any>} [T=Record<string, any>] Default is
 *   `Record<string, any>`. Default is `Record<string, any>`
 * @callback Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response<any, T>} res
 * @param {import('express').NextFunction} next
 */

/** @typedef {import('express').NextFunction | void} ReturnValueMiddleware */

/**
 * @callback Controller
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

export const Types = {};
