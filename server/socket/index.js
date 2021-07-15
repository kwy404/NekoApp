module.exports = (object) => {
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
        socket.on(`tokenValida`, token => {
            if(token){
                const user = (user) => {
                    socket.emit(`user`, user)
                }
                object.validarToken(token, user)
            }
        })
        socket.on(`login`, data => {
            if(data.username && data.password){
                const tokenVoid = token => {
                    if(token.error === undefined){
                        socket.emit(`token`, token)
                    } else{
                        socket.emit(`logError`, token)
                    }
                }
                object.login(data, tokenVoid)
            }
        })
    });

    console.log(`Socket.io running in http://localhost:${process.env.SocketPORT}`)
    httpServer.listen(process.env.SocketPORT);
}