import mongoose from '../config/mongoose.js';
import { modifiedDate } from './hooks';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  lastModifiedDate: Date
});

usersSchema.pre('save', modifiedDate);

export const User = mongoose.model('User', usersSchema);
