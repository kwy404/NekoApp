const config = require('./config')
const ws = require("socket.io-client")(config.configSite.socket, {
  parser: require("socket.io-msgpack-parser")
});

const token = window.localStorage.getItem(`token`)

ws.on('connect', () => {
    ws.emit('message', {
        c: "h",
        d: {
            token: token ? token : null
        }
    });
    ws.emit('message', {
        c: "frS",
        d: {
            token: token ? token : null
        }
    });
    ws.emit('message', {
        c: "jr",
        d: {
            token: token ? token : null
        }
    });
});

export const socket = ws
