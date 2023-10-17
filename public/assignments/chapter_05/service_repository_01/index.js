import express, { json } from 'express';

/** @returns {void} */
function main() {
  const app = express();

  // Middlewares
  app.use(json());

  // Routes
  // cars(app);

  app.listen(3000, () => console.log('Server running on port 3000'));
}

main();
