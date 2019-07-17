import { readFile, readFileSync } from 'fs';
import { csvToJSON } from '../utils/convertor';

export class Importer {
  constructor(dirwatcher) {
    dirwatcher.emitter.on(dirwatcher.watchEvent, async files => {
      for (let fileName of files) {
        console.log(fileName + ': changed');
        await this.import(fileName).then(data => console.log(data));
        // console.log(this.importSync(fileName));
      }
    });

    // To stop watching the directory changes
    // dirwatcher.close();
  }

  import(path) {
    return new Promise((resolve, reject) => {
      readFile(path, 'utf-8', (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(csvToJSON(data));
        }
      });
    });
  }

  importSync(path) {
    const csvData = readFileSync(path, 'utf-8');
    return this.csvToJSON(csvData);
  }
}
