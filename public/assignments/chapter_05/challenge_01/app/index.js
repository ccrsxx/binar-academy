import express, { json } from 'express';
import { HOST_PORT } from './libs/env.js';
import root from './api/routes/index.js';
import docs from './api/routes/docs.js';
import auth from './api/routes/auth.js';
import cars from './api/routes/cars.js';
import users from './api/routes/users.js';

/** @returns {void} */
function main() {
  const app = express();

  // Middlewares
  app.use(json());

  // Routes
  root(app);
  docs(app);
  auth(app);
  cars(app);
  users(app);

  app.listen(HOST_PORT, () =>
    console.log(`Server running on port ${HOST_PORT}`)
  );
}

main();
