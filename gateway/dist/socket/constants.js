const codes = require("./codes.js");

module.exports = constants = codeB => {
    return (() => {
        const Code = codeB.toString().toLowerCase()
        return codes.find(e => e.code.toString().toLowerCase() == Code).command
    })()
}