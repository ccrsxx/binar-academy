import express, { json } from 'express';
import cors from 'cors';
import { HOST_PORT } from './libs/env.js';
import root from './api/routes/index.js';
import docs from './api/routes/docs.js';
import auth from './api/routes/auth.js';
import cars from './api/routes/cars.js';
import users from './api/routes/users.js';
import upload from './api/routes/uploads.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

/** @returns {void} */
function main() {
  const app = express();

  const server = createServer(app);
  const io = new Server(server, {
    cors: {
      origin: '*'
    }
  });

  // Middlewares
  app.use(json(), cors());

  // Routes
  root(app);
  docs(app);
  auth(app);
  cars(app);
  users(app);
  upload(app);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('create-something', (msg) => {
      console.log({ msg });
      io.emit('foo', msg);
    });

    socket.on('disconnect', () => console.log('user disconnected'));
  });

  server.listen(HOST_PORT, () =>
    console.info(`Server running on port ${HOST_PORT}`)
  );
}

main();
