const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const money = 1000000000
const products = [
  {
    "name": "Big Mac",
    "image_url": "https://m.media-amazon.com/images/I/51oQ6p3gj9L.jpg",
    "price": 15000,
    "stock": 56
  },
  {
    "name": "Book",
    "image_url": "https://neal.fun/spend/images/book.jpg",
    "price": 50000,
    "stock": 232
  },
  {
    "name": "Video Game",
    "image_url": "https://neal.fun/spend/images/video-game.jpg",
    "price": 4000000,
    "stock": 11
  }
]

io.on('connect', function (socket) {
  console.log('Socket.io client connected')
  socket.emit('init', { money, products })
  
  socket.on('new-message', function (payload) {
    console.log(payload)
  })
})

server.listen(3000, () => {
  console.log('Listening on port ' + 3000)
})