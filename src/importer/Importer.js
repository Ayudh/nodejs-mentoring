import { readFile } from 'fs';
import * as csv from 'csvtojson';

export class Importer {
  static import(path) {
    return new Promise((resolve, reject) => {
      readFile(path, 'utf-8', (error, data) => {
        if (error) {
          reject(error);
        } else {
          csv
            .csv()
            .fromString(data)
            .then(json => {
              resolve(json);
            });
        }
      });
    });
  }
}
