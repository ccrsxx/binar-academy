/**
 * Handle cars route
 *
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
export function handleNotFound(req, res) {
  const url = req.url;

  res.status(404).json({ message: `${url} endpoint not found` });
}
