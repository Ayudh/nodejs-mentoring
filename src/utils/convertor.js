import { Transform } from 'stream';

export function csvToJSON(csvString) {
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

export const jsonTransform = new Transform({
  readableObjectMode: true,
  transform(chunk, _encoding, callback) {
    this.push(JSON.stringify(csvToJSON(chunk.toString())));
    callback();
  }
});
