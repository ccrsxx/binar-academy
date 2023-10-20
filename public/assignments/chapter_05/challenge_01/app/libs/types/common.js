import * as Models from '../../api/models/user.js';

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
 * Function type for controller.
 *
 * @template {Middleware<ExtractLocalsMiddleware<T>>} [T=Middleware] Default is.
 *   Default is `Middleware`
 * @callback Controller
 * @param {import('express').Request} req
 * @param {import('express').Response<any, ExtractLocalsMiddleware<T>>} res
 */

/**
 * Extracts the locals type from a middleware.
 *
 * @template {Middleware<ExtractLocalsMiddleware<T>>} T
 * @typedef {Record<string, any> & Parameters<T>[1]['locals']} ExtractLocalsMiddleware
 */

/**
 * Function type for authorized controller.
 *
 * @typedef {Controller<Middleware<{ user: Models.UserAttributes }>>} AuthorizedController
 */

export const Types = {};
