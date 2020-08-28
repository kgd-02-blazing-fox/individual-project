const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require("cors")
app.use(cors())
const port = process.env.PORT || 3000

let money = 1000000000
let products = [
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
app.get("/", (req, res) => {
  res.send('Hello World, this is server to individual project')
})
io.on('connect', function (socket) {
  console.log('Socket.io client connected')
  io.emit('init', { money, products })
  
  socket.on('new-message', function (payload) {
    console.log(payload)
  })

  socket.on("updated-item", (payload) => {
    socket.broadcast.emit("updated", payload)
    // console.log(payload)
    // console.log(products[payload.index].stock)
    // console.log("------------------")
    // console.log(payload.product.stock)
    // console.log("------------------")
    products[payload.index].stock = payload.product.stock
    money -= payload.product.price
    io.emit('init', { money, products })
  })
})

server.listen(port, () => {
  console.log('Listening on port ' + 3000)
})