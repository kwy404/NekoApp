module.exports = execDb = async ({
    type,
    data
}) => {
    const db = await require("../utils/database.js");
    const {
        token,
        socket
    } = data
    const user = await db.collection("users").findOne({
        token
    })
    const room = data.WS.sockets
    await (async (type, user, socket) => {
        switch (type) {
            case "validation":
                if(user){
                    socket.emit('validation', user)
                } else{
                    socket.emit('validation', {error: 505})
                }
                break;
            default:
                break;
        }
    })(type, user, socket)
}