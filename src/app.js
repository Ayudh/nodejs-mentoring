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

dirwatcher.emitter.on(Dirwatcher.DIR_CHANGE_EVENT, async files => {
  for (let fileName of files) {
    console.log(fileName + ': changed');
    await Importer.import(fileName).then(data => console.log(data));
  }
});

// To stop watching the directory changes
// dirwatcher.close();
