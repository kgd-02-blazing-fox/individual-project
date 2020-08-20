"use strict"

if (process.env.NODE_ENV === "development") require("dotenv").config()

const app = require("express")()
const server = require('http').createServer(app)
const io = require("socket.io")(server)
const cors = require("cors")
const port = process.env.PORT || 3000
const seed = require("./seeders/Arnold.json")

app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).json(seed)
})

io.on("connect",(socket)=>{
    console.log("A user has been connected")
    socket.emit("init", seed)

    socket.on("item-changes", (payload) => {
        socket.broadcast.emit("changes", payload)
    })

    socket.on("reset", (payload) => {
        socket.broadcast.emit("init", seed)
    })
})

server.listen(port, ()=>console.log(`Arnold's Shopping Spree is listening at Port:${port}`))