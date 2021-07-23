const ws = require("./dist/socket/messages.js");

class server {
    constructor({
        port
    }) {
        this.port = port
        this.server = `http://localhost:${port}`
        const voidBack = () => {
            this.start(this.server)
        }
        ws({
            port,
            voidBack
        })
    }
    start(server) {
        console.log(`[ Gateway ] Starting in ${server}.`)
    }
}

module.exports = server