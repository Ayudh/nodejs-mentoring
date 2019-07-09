import './polyfill';

import * as path from 'path';
import * as config from './config/config.json';
import { Dirwatcher } from './dirwatcher';
import { Importer } from './importer';
import { Product, User } from './models';

console.log(config.name);

new User();
new Product();

const DATA_DIR_PATH = path.join(__dirname, 'data');
const dirwatcher = new Dirwatcher().watch(DATA_DIR_PATH, 1000);

new Importer(dirwatcher);
