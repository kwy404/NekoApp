import { socket } from '../../../socket';

export const nInfo = message => {
    console.warn(`(INFO) => ${message}`)
}

export const userLogin = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
    if(token != null){
        socket.emit('tokenValida', token)
    }
}
