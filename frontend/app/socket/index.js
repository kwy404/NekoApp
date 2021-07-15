import openSocket from 'socket.io-client'
const config = require('./config')
export const socket = openSocket(config.configSite.socket)
