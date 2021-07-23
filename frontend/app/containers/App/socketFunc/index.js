import { socket } from '../../../socket';

export const nInfo = message => {
    console.warn(`(INFO) => ${message}`)
}

export const online = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
    socket.emit('message', {
        c: "h",
        d: {
            token: token ? token : null
        }
    });
    socket.emit('message', {
        c: "frS",
        d: {
            token: token ? token : null
        }
    });
    socket.emit('message', {
        c: "jr",
        d: {
            token: token ? token : null
        }
    });
    socket.emit('message', {
        c: "gF",
        d: {
            token: token ? token : null
        }
    });
}

export const sendSocket = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
    if(token != null){
        socket.emit('message', {"c": 0})
    }
}
