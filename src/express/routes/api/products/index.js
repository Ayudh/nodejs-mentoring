import express from 'express';
import * as state from '../../../state.json';

const router = express.Router();

router.use((req, res, next) => {
  req.products = state.products;
  next();
});

router.get('/', (req, res) => {
  res.json(Object.values(req.products));
});

router.post('/', (req, res) => {
  state.products[req.body.id] = req.body;
  res.json(req.body);
});

router.param('id', (req, res, next, id) => {
  const productID = +id;
  const product = req.products[productID];
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
