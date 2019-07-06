import { readFile, readFileSync } from 'fs';

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
          resolve(this.csvToJSON(data));
        }
      });
    });
  }

  importSync(path) {
    const csvData = readFileSync(path, 'utf-8');
    return this.csvToJSON(csvData);
  }

  csvToJSON(csvString) {
    csvString = csvString.replace(/\r/g, '');
    const rows = csvString.split('\n');
    const headers = rows[0].split(',');
    const body = rows.slice(1);
    let jsonData = [];
    body.forEach(row => {
      const jsonRow = row
        .split(',')
        .map((value, index) => ({ [headers[index]]: value }));
      jsonData.push(jsonRow.reduce((acc, value) => ({ ...acc, ...value }), {}));
    });
    return jsonData;
  }
}
