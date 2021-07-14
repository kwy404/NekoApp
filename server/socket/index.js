module.exports = () => {
    require('dotenv').config();
    
    const httpServer = require("http").createServer();
    const io = require("socket.io")(httpServer, {
    // ...
    });

    io.on("connection", socket => {
        console.log(socket.id)
    });
    console.log(`Socket.io running in http://localhost:${process.env.SocketPORT}`)
    httpServer.listen(process.env.SocketPORT);
}