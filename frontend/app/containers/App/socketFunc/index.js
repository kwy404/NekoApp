import {
    socket
} from '../../../socket';

export const nInfo = message => {
    console.warn(`(INFO) => ${message}`)
}

const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null

const ifOnGateway = () => {
    socket.wg.emit('message', {
        c: "h",
        d: {
            token: token ? token : null
        }
    });
    socket.wg.emit('message', {
        c: "frS",
        d: {
            token: token ? token : null
        }
    });
    socket.wg.emit('message', {
        c: "jr",
        d: {
            token: token ? token : null
        }
    });
    socket.wg.emit('message', {
        c: "gF",
        d: {
            token: token ? token : null
        }
    });
}

const ifOnChat = () => {
    socket.wc.emit('message', {
        c: "jr",
        d: {
            token: token ? token : null
        }
    });
    socket.wc.emit('message', {
        c: "h",
        d: {
            token: token ? token : null
        }
    });
}

export const online = () => {
    socket.wc.on("connect", () => {
        ifOnChat()
    })
    socket.wg.on("connect", () => {
        ifOnGateway()
    })
    socket.wg.io.on("disconnect", (attempt) => {
        ifOnGateway()
        socket.wg.connect();
    });
    socket.wc.io.on("disconnect", (attempt) => {
        ifOnChat()
        socket.wc.connect();
    });
   
    
}

export const sendSocket = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
}