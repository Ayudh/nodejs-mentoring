import * as http from 'http';

const server = http.createServer();
server
  .on('request', (req, res) => {
    req.pipe(res);
  })
  .listen(3000);

server.on('listening', () => {
  console.log('server listening on 3000');
});
