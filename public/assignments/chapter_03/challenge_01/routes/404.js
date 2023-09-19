/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.get('*', async (req, res) => {
    const url = req.url;
    res.status(404).json({ message: `Route ${url} not found` });
  });
};
