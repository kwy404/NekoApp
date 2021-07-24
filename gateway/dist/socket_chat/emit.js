const execDb = require("./execDb.js");

module.exports = emit = async ({
    type,
    data,
    socket,
    WS
}) => {
    data.socket = socket
    data.WS = WS
    await execDb({
        type,
        data
    })
}