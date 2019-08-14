import Sequelize from 'sequelize';
import * as db from './config/config.json';

const { dialect, username, password, host, port, dbname } = db;

export const sequelize = new Sequelize(
  `${dialect}://${username}:${password}@${host}:${port}/${dbname}`
);
