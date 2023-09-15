import { database } from '../libs/database.js';

/**
 * Handle reset route
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
export async function handleResetRoute(_req, res) {
  await database.resetDatabase();

  res.status(200).json({ message: 'Database reset successfully' });
}
