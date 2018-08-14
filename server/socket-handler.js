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
        // const {userName, msg, receiverName} = payload
        console.log('private msg', payload)
    //     let error = checkPrivatePayload(payload)
    //     if(error){
    //         console.log('pm payload verifier error: ' + error)
    //         socket.emit('error', error)
    //         return
    //     }
            
    //     const receiverSocket = usersOnline[receiverName]

    //     let payloadToSend = {
    //         from: userName,
    //         msg
    //     }

    //     io.to(receiverSocket).emit('private message', payloadToSend)
    //         .valueof((isOk) => {
    //             if(!isOk) {
    //                 console.log('error while sending the pm to receiver')
    //                 socket.emit('error', 'error while sending the pm to receiver')
    //             }
    //         })
    })

        socket.on('disconnect', () => {
            console.log(`user ${socket.id} disconnected`)
        })
    })  

}