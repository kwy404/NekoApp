const execDb = require("./execDb.js");

module.exports = emit = async ({ type, data, socket, WS }) => {
    data.socket = socket
    data.WS = WS
    const returnBack = await execDb({ type, data })
    const emitMessages = {
        data,
        type
    }
    return emitMessages
}