const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  
const server = app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
const io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
  console.log('User connected');
 
  socket.on('sendMessage', (message) => {
    io.emit('displayMessage', message);
  })

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

