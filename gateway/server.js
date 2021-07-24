const typeServer = require("./types_server.js");
class server {
    constructor({
        port,
        type
    }) {
        this.socket = typeServer(type)
        this.port = port
        this.server = `http://localhost:${port}`
        if(!this.socket){
            console.log(`[ ERROR ] Socket ${type} dont found.`)
            return;
        }
        const voidBack = () => {
            this.start(this.server, this.socket.message)
        }
        this.socket.void({
         port,
         voidBack   
        })
        
    }
    start(server, message) {
        console.log(`[ ${message} ] Starting in ${server}.`)
    }
}

module.exports = server