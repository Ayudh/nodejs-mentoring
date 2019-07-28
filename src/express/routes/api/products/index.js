import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
  req.products = global.state.products;
  next();
});

router.get('/', (req, res) => {
  res.json(Object.values(req.products));
});

router.post('/', (req, res) => {
  global.state.products[req.body.id] = req.body;
  res.json(req.body);
});

router.param('id', (req, res, next, id) => {
  id = +id;
  const product = req.products[id];
  if (!product) {
    res.json({ message: 'Product not Found' });
  } else {
    req.product = product;
    next();
  }
});

router.get('/:id', (req, res) => {
  res.json(req.product);
});

router.get('/:id/reviews', (req, res) => {
  res.json(req.product.reviews);
});

export { router };
