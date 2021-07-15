import { socket } from '../../../socket';

export const userLogin = () => {
    const token = window.localStorage.getItem("token") ? window.localStorage.getItem("token") : null
    if(token != null){
        socket.emit('tokenValida', token)
    }
}
