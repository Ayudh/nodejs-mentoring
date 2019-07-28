import * as http from 'http';

const server = http.createServer();
server
  .on('request', (req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello World');
  })
  .listen(3000);

server.on('listening', () => {
  console.log('server listening on 3000');
});
