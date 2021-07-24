const wsG = require("./dist/socket_gateway/messages.js");
const wsC = require("./dist/socket_chat/messages.js");

const types = [
    { 
        type: "g",
        server: "gateway",
        void: wsG,
        message: "Gateway"
    },
    { 
        type: "c",
        server: "chat",
        void: wsC,
        message: "Chat"
    }
]

const typeServer = t => {
    const foundType = types.find(e => e.type.toLowerCase() == t.toLowerCase())
    if(foundType){
        return foundType
    }
}

module.exports = typeServer