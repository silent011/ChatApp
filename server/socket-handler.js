const usersOnline = require('./db').usersOnline

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