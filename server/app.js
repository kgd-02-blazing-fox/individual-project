const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const server = require('http').createServer(app)
const io = require('socket.io')(server)
let money, items, i = 0, j = 0

app.use(cors())

io.on('connection', socket => {
  j++
  console.log('Konek dengan server dari user',j,'<<<<<<<<<<<<<<<<<<<<<')
  socket.on('test', payload => {
    if(!money && !items) {
      money = payload.money
      items = payload.items
    }
    io.emit('get-data', {
      money,
      items
    })
  })
  socket.on('buy-item', payload => {
    i++
    console.log('koneksikan disini',i,'==================================')
    money = payload.money
    items = payload.items
    io.emit('get-data', {
      money,
      items
    })
  })
})

server.listen(port, _=> console.log('listen to port at http://localhost:'+port))