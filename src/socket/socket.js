import io from 'socket.io-client'

const socket = io(window.location.href)
socket.emit('private message', {userName: 'josh', receiverName: 'Daniel', msg: 'hi'})

export default socket