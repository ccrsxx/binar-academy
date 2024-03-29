import * as UserModel from '../../api/models/user.js';
import * as CarModel from '../../api/models/car.js';

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
 * Function type for Route.
 *
 * @callback Route
 * @param {import('express').Application} app
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
 * @template {Middleware<ExtractLocalsMiddleware<T>>} [T=Middleware] Default is.
 *   Default is `Middleware`
 * @typedef {Controller<
 *   Middleware<{ user: UserModel.UserAttributes } & ExtractLocalsMiddleware<T>>
 * >} AuthorizedController
 */

/**
 * Function type for authorized controller with car.
 *
 * @typedef {Controller<
 *   Middleware<{
 *     user: UserModel.UserAttributes;
 *     car: CarModel.CarAttributes;
 *   }>
 * >} AuthorizedControllerWithCar
 */

export const Types = {};
