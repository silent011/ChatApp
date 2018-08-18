const { usersOnline } = require('./db')

const findNewUserErrors = (newUser) => {
    const { username, socketid } = newUser;

    if(!username || !socketid)
        return 'Missing field/s'
    if(usersOnline.has(username))
        return 'Username is taken.'

    return ''
}

const registerUser = (req, res) => {
    const newUser = req.body
    const response = Object.assign({error: '', success: true}, newUser)
    response.error = findNewUserErrors(newUser)
    console.log('response', response)
    if(response.error) {
        response.success = false
        return res.send(JSON.stringify(response))
    }


    const { username, socketid} = newUser
    usersOnline.set(username, socketid)

    return res.send(JSON.stringify(response))
}

const getOnlineUsers = (res) => {
    let response = { success:true, error: '', body: []}
    for(let username of usersOnline.keys()){
        response.body.push({ username })
    }

    res.send(JSON.stringify(response))
}

module.exports = app => {
    app.post('/user/register', (req, res) => {
        registerUser(req, res)
    })

    app.get('/user/online', (req, res) => {
        getOnlineUsers(res)
    })
}