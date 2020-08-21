const app = require('../app.js')

const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connect', function(socket){
  console.log('CLIENT PAK ARNOLD CONNECTED');

  socket.on('itemChanged', function(payload){
    socket.broadcast.emit('newChange', payload)
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, ()=>{
  console.log('server pak arnold is online ' + PORT);
})