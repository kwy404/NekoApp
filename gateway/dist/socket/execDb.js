const friend = require ("./class/friend.js");
const notification = require ("./class/notification.js");

module.exports = execDb = async ({type, data}) => {
    const log = async message => {
        await console.log(`[ DB ] ${message}.`)
    }
    const ObjectId = require('mongodb').ObjectId; 
    const db = await require ("../utils/database.js");
    const { token, socket, session } = data
    var user = null
    if(data.session == undefined){
         user = await db.collection("users").findOne({token})
    }
    const room = data.WS.sockets
    await (async (type, user, db, room) => {
        if(user){
            switch (type) {
                case "notification":
                    break;
                case "friendRequest":
                    const { friendId } = data
                    const userF = await new friend(
                        {
                            isFriend: false,
                            status: "Income",
                            friendId: friendId,
                            myUserID: user._id.toString()
                        }
                    ).add({db, room, socket, token})
                    if(userF){
                        //Code
                    }
                    break;
                case "joinRooms":
                    // Se inscreve na sala
                    socket.join(user._id.toString())
                    room.in(user._id.toString()).emit('message', {
                        online: true   
                    })
                    break;
                case "getFriends":
                    const arrayIds = user.friends.map((item, i) => {
                        return ObjectId(item._id);   
                       })
                       const friends = await db.collection("users").find({ 
                           _id: {
                               $in: arrayIds
                           }
                       }).toArray();
                       friends.forEach((reFriend, i) => {
                           const friend = user.friends.find(e => e._id == reFriend._id.toString())
                           if(friend !== undefined){
                               reFriend.isFriend = friend.isFriend
                               reFriend.sendByMe = friend.sendByMe
                               reFriend.token = undefined
                               reFriend.password = undefined
                               reFriend.friends = undefined
                               reFriend.email = undefined
                               reFriend.notifications = undefined
                           }
                       })
                       socket.emit("friends", friends)
                       break;
                case "heartbeat":
                    db.collection("users").update(
                        { _id: user._id},
                        {
                        $set: {
                            online: true,
                            session: socket.id
                        }
                        }
                    )
                    break;
                case "friendsSuge":
                    let friendsSugeridos = await db.collection('users').find().toArray()
                    friendsSugeridos = friendsSugeridos.filter(e => e.username !== user.username)
                    friendsSugeridos.forEach((user) => {
                        user.token = undefined
                        user.password = undefined
                        user.friends = undefined
                        user.email = undefined
                        user.notifications = undefined
                    })
                    socket.emit("friendsSuge", friendsSugeridos)
                    break;
                case "disconnect":
                    const userU = await db.collection("users").findOneAndUpdate(
                        { "session" : session },
                        { $set: { "online" : false } }
                    )
                    if(userU){
                        console.log(`[ Disconnect ] ${userU.value.username}.`)
                    }
                    break;
                default:
                    break;
                }
        }
    })(type, user, db, room)
}