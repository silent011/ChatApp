import io from 'socket.io-client'

const socket = io(window.location.href, {
    autoConnect: false
})


export default socket