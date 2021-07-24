const config = require('./config')
const wsG = require("socket.io-client")(config.configSite.socketG, {
  parser: require("socket.io-msgpack-parser")
});

const wsC = require("socket.io-client")(config.configSite.socketC, {
    parser: require("socket.io-msgpack-parser")
});

const token = window.localStorage.getItem(`token`)

wsG.on('connect', () => {
    wsG.emit('message', {
        c: "h",
        d: {
            token: token ? token : null
        }
    });
    wsG.emit('message', {
        c: "frS",
        d: {
            token: token ? token : null
        }
    });
    wsG.emit('message', {
        c: "jr",
        d: {
            token: token ? token : null
        }
    });
});

wsC.on('connect', () => {
    wsC.emit('message', {
        c: "h",
        d: {
            token: token ? token : null
        }
    });
    wsC.emit('message', {
        c: "jr",
        d: {
            token: token ? token : null
        }
    });
});

export const socket = {wg: wsG, wc: wsC}
