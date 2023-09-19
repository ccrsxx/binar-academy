import express, { json } from 'express';

import root from './routes/index.js';
import cars from './routes/cars.js';
import reset from './routes/reset.js';
import notFound from './routes/404.js';

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
