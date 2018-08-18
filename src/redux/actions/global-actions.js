export const types = {
    CONNECTING: 'CONNECTING',
    CONNECTED: 'CONNECTED'
}

const connecting = () => ({
    type: types.CONNECTING
})

const connected = () => ({
    type: types.CONNECTED
})

const connect = (socket) => {
    return dispatch => {
        dispatch(connecting())
        socket.connect()
        socket.on('connect', () => {
            console.log('socket connected')
            setTimeout(() => {
            dispatch(connected())
            }, 1000)
        })
  
    }
}

export const actions = {
    connecting,
    connected,
    connect
}