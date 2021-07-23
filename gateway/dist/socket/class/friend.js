class friend {
    constructor({ isFriend, status, friendId, myUserID }){
        this.isFriend = isFriend
        this.sendByMe = myUserID !== friendId ? true : false
        this.status = status
        this.info = friendId
        this._id = friendId
        this.inbox = new Array()
        this.ObjectId = require('mongodb').ObjectId; 
        this.myId = myUserID
    }
    async add({db, room, socket, token}){
        const me = await db.collection("users").findOne({token})
        me.friends === undefined ? me.friends = [] : ''
        me.notifications === undefined ? me.notifications = [] : ''
        let o_id = new this.ObjectId(this._id);   // id as a string is passed
        const friend = await db.collection("users").findOne({"_id": o_id});
        friend.friends === undefined ? friend.friends = [] : ''
        friend.notifications === undefined ? friend.notifications = [] : ''
        //Update me
        if(me){
            const found = me.friends.find(e => e.info == o_id.toString() || e.info == this.myId)
            if(!found){
                me.friends.push(this)
            } else{
                const index = me.friends.indexOf(found)
            }
            await db.collection("users").findOneAndUpdate(
                { "token" : token },
                { $set: me }
            )
        }
        if(friend){
            //Update friend stranger
            const fraQ = {
                isFriend: false,
                sendByMe: false,
                status: "Income",
                info: this.myId,
                _id: this.myId,
                inbox: new Array()
            }
            const found = friend.friends.find(e => e.info == this.myId || e.info == o_id.toString())
            const notificationFriend = {
                message: `${me.username} te lhe enviou um pedido de amizade.`,
                seen: false,
                opened: false,
                info: this.myId.toString(),
                cratedAt: new Date()
            }
            if(!found){
                const foundNoti = friend.notifications.find(e => e.info == this.myId || e.info == o_id.toString())
                if(!foundNoti){
                    friend.friends.push(fraQ)
                    friend.notifications.push(notificationFriend)
                        room.in(o_id.toString()).emit('notification', {
                        notificationFriend
                    })
                }
            }
            this.myId = undefined
            await db.collection("users").findOneAndUpdate(
                {"_id": o_id},
                { $set: friend }
            )
            const meTo = me
            meTo.token = undefined
            meTo.password = undefined
            meTo.friends = undefined
            meTo.email = undefined
            meTo.notifications = undefined
        }
    }
}

module.exports = friend