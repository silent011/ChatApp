const usersOnline = require('./db').usersOnline

let checkPrivatePayload = ({userName, msg, receiverName, socket}) => {

    if(!userName || !msg || !receiverName || !socket){
        return 'missing field/s'
    }

    if(!usersOnline.has(userName) || !usersOnline.has(receiverName)){
        return 'invalid user name or receiver name'
    }

    if(!socket.id){
        return 'socket doesn\'t have id'
    }

    return ''
}

module.exports = (io) => {
    io.on('connection', socket => {
        console.log(`user ${socket.id} connected`)

        socket.on('private message', payload => {
        console.log('private msg', payload)
   })

        socket.on('disconnect', () => {
            console.log(`user ${socket.id} disconnected`)
        })
    })  

}