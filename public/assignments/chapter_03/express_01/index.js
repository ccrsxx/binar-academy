import express from 'express';

const app = express();

// use json body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/about', (req, res) => {
  res.status(200).json({ message: 'About page' });
});

app.get('/contact', (req, res) => {
  res.status(200).json({ message: 'Contact page' });
});

app.get('/products', (req, res) => {
  res.status(200).json({ message: 'Products page' });
});

app.get('/products/:id', (req, res) => {
  res.status(200).json({ message: `Product ${req.params.id}` });
});

app.post('/products', (req, res) => {
  const data = req.body;

  console.log(data);

  res.status(201).json({ message: 'Product created', data });
});

const random = Math.floor(Math.random() * 100);

app.get('/random', (req, res) => {
  res.status(200).json({ message: `Random number: ${random}` });
});

// Admin routes
function isAdmin(req, res, next) {
  const isAdmin = req.headers.authorization === 'Bearer admin';

  console.log(req.headers.authorization, { isAdmin });

  if (isAdmin) {
    return next();
  }

  res.status(401).json({ message: 'Unauthorized' });
}

app.get('/admin', isAdmin, (req, res) => {
  res.status(200).json({ message: 'Admin page' });
});

// Wildcard route
app.get('/*', (req, res) => {
  res.status(404).json({ message: 'Emilia not found' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
