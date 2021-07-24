/**
 * Gateway - NekoApp
 */
 const server = require("./server.js");
 const dotenv = require("dotenv");
 dotenv.config()
 
 // Start gateway
 new server({
     port: process.env.PORT,
     type: "g"
 })

 // Start gateway chat
 new server({
    port: process.env.PORTChat,
    type: "c"
})