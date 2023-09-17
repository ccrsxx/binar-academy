import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Risal', cars: [...Array(10).keys()] });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
