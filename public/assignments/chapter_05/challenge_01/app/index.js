import express, { json } from 'express';
import { HOST_PORT } from './libs/env.js';
import root from './routes/index.js';
import cars from './routes/cars.js';
import reset from './routes/reset.js';
import auth from './routes/auth.js';

/** @returns {void} */
function main() {
  const app = express();

  // Middlewares
  app.use(json());

  // Routes
  root(app);
  auth(app);
  cars(app);
  reset(app);

  app.listen(HOST_PORT, () =>
    console.log(`Server running on port ${HOST_PORT}`)
  );
}

main();
