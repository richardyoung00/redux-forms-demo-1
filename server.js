const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// listen for new connections
io.on('connection', (client) => {

  // listen for actions from the client
  client.on('formActions', (action) => {
    client.broadcast.emit('formActions', action);
  })
});

http.listen(3001, () => {
  console.log('listening on *:3001');
});

