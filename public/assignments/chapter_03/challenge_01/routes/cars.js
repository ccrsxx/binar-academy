import { database } from '../libs/database.js';

/**
 * Handle cars route
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export function handleCarsRoute(req, res) {
  res.status(200).json(database.getData());
}

/**
 * Handle cars slug route
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export function handleCarsSlug(req, res) {
  const { id } = req.params;

  const car = database.getCarById(id);

  if (!car) {
    res.status(404).json({ message: `Car with id ${id} not found` });
    return;
  }

  res.status(200).json(car);
}

/**
 * Handle cars post route
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
export async function handleCarsPost(req, res) {
  const { body } = req;

  await database.createCar(body);

  res.status(201).json(body);
}

/**
 * Handle cars put route
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
export async function handleCarsPut(req, res) {
  const { body } = req;
  const { id } = req.params;

  const car = database.getCarById(id);

  if (!car) {
    res.status(404).json({ message: `Car with id ${id} not found` });
    return;
  }

  await database.updateCar(id, body);

  res.status(200).json(body);
}
