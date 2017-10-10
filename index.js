

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io').listen(22599);

const HTTP_PORT = 3333;
const SOCKET_PORt = 22599;

// console.info('app', app);
// console.info('server', server);
// console.info('io', io);

io.on('connection', (socket) => {
  socket.emit('message', {message: 'this is your connection message'});
});

app.get('/', (req, res) => {
  console.info('got request to /');
  res.sendFile(__dirname + '/index.html');
});

app.get('/update', (req, res) => {
  console.debug('hit update', io);
  io.emit('message', {message: 'io emit on /update'});
  res.send(200);
});

server.listen(HTTP_PORT);
