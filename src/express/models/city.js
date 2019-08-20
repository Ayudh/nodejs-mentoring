import mongoose from '../mongoose.js';
import { modifiedDate } from './hooks.js';

const Schema = mongoose.Schema;

const citiesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  capital: {
    type: Boolean,
    default: false
  },
  location: {
    lat: {
      type: Number
    },
    long: {
      type: Number
    }
  },
  lastModifiedDate: Date
});

citiesSchema.pre('save', modifiedDate);

export const City = mongoose.model('City', citiesSchema);
