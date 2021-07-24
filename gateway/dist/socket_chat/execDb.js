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
            default:
                break;
        }
    })(type, user, db, room, session)
}