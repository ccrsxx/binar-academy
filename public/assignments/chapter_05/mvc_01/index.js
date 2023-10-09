import express, { json } from 'express';

import root from './app/controllers/index.js';
import cars from './app/controllers/cars.js';
import reset from './app/controllers/reset.js';
import notFound from './app/controllers/404.js';

/** @returns {void} */
function main() {
  const app = express();

  // Middlewares
  app.use(json());

  // Routes
  root(app);
  cars(app);
  reset(app);
  notFound(app);

  app.listen(3000, () => console.log('Server running on port 3000'));
}

main();
