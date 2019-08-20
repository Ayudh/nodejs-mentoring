import express from 'express';
import { Product } from '../../../models/product';

const router = express.Router();

router.get('/', (req, res) => {
  Product.find({}, (error, products) => {
    if (error) return res.json({ error });
    return res.json(products);
  });
});

router.post('/', (req, res) => {
  const { name, brand, price, reviews } = req.body;
  Product.create(
    {
      name,
      brand,
      price,
      reviews
    },
    (error, product) => {
      if (error) return res.json({ error });
      return res.json(product);
    }
  );
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Product.findById(id, (error, product) => {
    if (error) return res.json({ error });
    return res.json(product);
  });
});

router.get('/:id/reviews', (req, res) => {
  const { id } = req.params;
  Product.findById(id, (error, product) => {
    if (error) return res.json({ error });
    return res.json(product.reviews);
  });
});

export { router };
