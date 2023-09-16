import express, { json } from 'express';
import cars from './routes/cars.js';
import reset from './routes/reset.js';
import notFound from './routes/404.js';

/**
 * @returns {void}
 */
function main() {
  const app = express();

  // Middlewares
  app.use(json());

  // Routes
  cars(app);
  reset(app);
  notFound(app);

  app.listen(3000, () => console.log('Server running on port 3000'));
}

main();
