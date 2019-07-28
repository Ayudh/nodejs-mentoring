import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import { Transform } from 'stream';

const strReplace = new Transform({
  readableObjectMode: true,
  writableObjectMode: true,
  transform(chunk, _encoding, callback) {
    let str = chunk.toString();
    str = str.replace('{message}', 'Hello World');
    this.push(str);
    callback();
  }
});

const server = http.createServer();
server
  .on('request', (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.createReadStream(path.join(__dirname, 'index.html'))
      .pipe(strReplace)
      .pipe(res);
  })
  .listen(3000);

server.on('listening', () => {
  console.log('server listening on 3000');
});
