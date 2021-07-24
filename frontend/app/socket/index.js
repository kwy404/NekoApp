const config = require('./config')
const wsG = require("socket.io-client")(config.configSite.socketG, {
  parser: require("socket.io-msgpack-parser")
});

const wsC = require("socket.io-client")(config.configSite.socketC, {
    parser: require("socket.io-msgpack-parser")
});

const token = window.localStorage.getItem(`token`)

export const socket = {wg:wsG, wc: wsC}
