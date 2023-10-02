import { Sequelize } from 'sequelize';
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

/** @returns {Promise<void>} */
async function testSequelize() {
  const sequelize = new Sequelize('rental_car', 'postgres', 'Emilia-tan', {
    host: 'localhost',
    dialect: 'postgres'
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

void testSequelize();
