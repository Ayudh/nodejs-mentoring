import express from 'express';
import { City } from '../../../models/city';

const router = express.Router();

router.get('/random', (req, res) => {
  City.find({}, (err, cities) => {
    const index = Math.round(Math.random() * (cities.length - 1));
    return res.json(cities[index]);
  });
});

router.get('/', (req, res) => {
  City.find({}, (err, cities) => {
    if (err) return res.send(err);
    return res.json(cities);
  });
});

router.post('/', (req, res) => {
  const { name, country, capital, location } = req.body;
  City.create(
    {
      name,
      country,
      capital,
      location
    },
    (err, city) => {
      if (err) return res.send(err);
      return res.json(city);
    }
  );
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const options = {
    new: true
  };
  City.findOneAndUpdate({ _id: id }, req.body, options, (err, city) => {
    if (err) return res.send(err);
    return res.json(city);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  City.remove({ _id: id }, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

export { router };
