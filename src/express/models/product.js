import mongoose from '../config/mongoose.js';
import { modifiedDate } from './hooks';

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Array
  },
  lastModifiedDate: Date
});

productsSchema.pre('save', modifiedDate);

export const Product = mongoose.model('Product', productsSchema);
