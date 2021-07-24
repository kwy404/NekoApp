import {
    socket
} from '../../../socket';

export const nInfo = message => {
    console.warn(`(INFO) => ${message}`)
}

export const online = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
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

export const sendSocket = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
}