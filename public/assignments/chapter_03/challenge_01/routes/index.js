/**
 * Handle index route
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export function handleIndexRoute(req, res) {
  res.status(200).json({ message: 'Ping successfully' });
}
