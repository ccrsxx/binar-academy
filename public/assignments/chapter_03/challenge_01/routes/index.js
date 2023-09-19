/**
 * @param {import('express').Express} app
 * @returns {void}
 */
export default (app) => {
  app.get('/', (req, res) =>
    res.status(200).json({
      message: 'Ping successfully',
      documentation: 'https://www.postman.com/ccrsxx/workspace/rental-car'
    })
  );
};
