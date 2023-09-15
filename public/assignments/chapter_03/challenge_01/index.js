import express, { json } from 'express';
import { handleIndexRoute } from './routes/index.js';
import {
  handleCarsRoute,
  handleCarsSlug,
  handleCarsPost,
  handleCarsPut
} from './routes/cars.js';
import { handleNotFound } from './routes/404.js';
import { handleResetRoute } from './routes/reset.js';

const app = express();

// Middlewares
app.use(json());

// Routes
app.get('/', handleIndexRoute);

app.get('/cars', handleCarsRoute);
app.post('/cars', handleCarsPost);
app.get('/cars/:id', handleCarsSlug);
app.put('/cars/:id', handleCarsPut);

app.get('/reset', handleResetRoute);

app.get('/*', handleNotFound);

app.listen(3000, () => console.log('Server running on port 3000'));
