const constants = require("./constants.js");
const emit = require("./emit.js");
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const customParser = require("socket.io-msgpack-parser");
const dotenv = require("dotenv");

dotenv.config()
const app = express();
app.use(cors());
app.use(bodyParser.json());
const serve = http.Server(app)
const v = process.env.SocketVERSION


const WS = require("socket.io")(serve, {
    cors: {
        origin: '*',
    },
    parser: customParser
});


app.get(`/`, (req, res) => {
    res.send(`Gateway NekoApp ${v}`)
})

module.exports = wsC = async ({
    port,
    voidBack
}) => {
    ((voidBack) => {
        serve.listen(port, async () => {
            WS.on('connection', function(socket) {
                socket.on('message', msg => {
                    if (msg.c && msg.d) {
                        emit({
                            type: constants(msg.c),
                            data: msg.d,
                            socket,
                            WS
                        })
                    }
                })
                socket.on('disconnect', () => {
                    emit({
                        type: constants(`dis`),
                        data: {
                            session: socket.id
                        },
                        socket,
                        WS
                    })
                })
            })
            await voidBack()
        });
    })(voidBack)
}