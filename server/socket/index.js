module.exports = () => {
    require('dotenv').config();

    const express = require('express')
    
    const app = express()

    const httpServer = require("http").createServer(app);

    const io = require('socket.io')(httpServer, {
        cors: {
          origin: '*',
        }
    });

    io.on("connection", socket => {
        console.log(socket.id)
    });

    console.log(`Socket.io running in http://localhost:${process.env.SocketPORT}`)
    httpServer.listen(process.env.SocketPORT);
}