const codes = require("./codes.js");

module.exports = constants = codeB => {
    return (() => {
        const Code = codeB.toString().toLowerCase()
        const found = codes.find(e => e.code.toString().toLowerCase() == Code)
        if(found){
            return codes.find(e => e.code.toString().toLowerCase() == Code).command
        } else{
            return {error: 404}
        }
    })()
}