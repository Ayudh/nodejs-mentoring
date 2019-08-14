import express from 'express';
import { Product } from '../../../models/product';

const router = express.Router();

router.get('/', (req, res) => {
  Product.findAll()
    .then(products => res.json(products))
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  const { id, name, brand, model, price, reviews } = req.body;

  Product.create({ id, name, brand, model, price, reviews })
    .then(product => res.json(product))
    .catch(err => res.send(err));
});

router.param('id', (req, res, next, id) => {
  const productID = +id;
  Product.findByPk(productID)
    .then(product => {
      req.product = product;
      next();
    })
    .catch(err => {
      res.json({ message: 'Product not Found', error: err });
    });
});

router.get('/:id', (req, res) => {
  res.json(req.product);
});

router.get('/:id/reviews', (req, res) => {
  res.json(req.product.reviews);
});

export { router };
