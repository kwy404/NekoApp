module.exports = execDb = async ({
    type,
    data
}) => {
    const log = async message => {
        await console.log(`[ DB ] ${message}.`)
    }
    const ObjectId = require('mongodb').ObjectId;
    const db = await require("../utils/database.js");
    const {
        token,
        socket,
        session
    } = data
    var user = null
    if (data.session == undefined) {
        user = await db.collection("users").findOne({
            token
        })
    }
    const room = data.WS.sockets
    await (async (type, user, db, room, session) => {
        switch (type) {
            case "heartbeat":
                db.collection("users").update({
                    token: token
                }, {
                    $set: {
                        onlineChat: true,
                        sessionChat: socket.id
                    }
                })
                break;
            case "joinRoomChat":
                //Se inscreve no chat Privado
                socket.join(user._id.toString())
                break;
            case "disconnect":
                const userU = await db.collection("users").findOneAndUpdate({
                    "sessionChat": session
                }, {
                    $set: {
                        "onlineChat": false
                    }
                })
                if (userU) {
                    console.log(`[ Disconnect chat ] ${userU.value.username}.`)
                }
                break;
            
            default:
                break;
        }
    })(type, user, db, room, session)
}