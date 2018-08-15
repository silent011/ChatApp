import { registerUser, fetchOnlineUsers } from '../../api-calls/user'

export const types = {
    CREATE_USER: 'CREATE_USER',
    CREATED_USER: 'CREATED_USER',
    ERR_CREATING_USER: 'ERR_CREATING_USER',
    GET_ONLINE_USERS: 'GET_ONLINE_USERS',
    ERR_GETTING_ONLINE_USERS: 'ERR_GETTING_ONLINE_USERS',
    GOT_ONLINE_USERS: 'GOT_ONLINE_USERS'
}

const createUser =  (user) => {
    return dispatch => {
        registerUser(user).then(resp => resp.json(),
        error => console.log("Error registering user:", error))
        .then(json => {
            console.log('registered user', user)
            if(json.error)  
                dispatch(errorCreatingUser(json.error))
            else
                dispatch(createdUser(json))
        })
    }   
}

const getOnlineUsers = () => {
    return dispatch => {
        fetchOnlineUsers().then(resp => resp.json())
        .then(resp => {
            console.log('getOnlineUsers', resp)
            if(!resp.success) dispatch(errGettingOnlineUsers(resp.error))
            else dispatch(gotOnlineUsers(resp.body))
        })
    }
}

const createdUser = (json) => ({
    type: types.CREATED_USER,
    payload: json
})


const errorCreatingUser = (error) => ({
    type: types.ERR_CREATING_USER,
    payload: error
})

const errGettingOnlineUsers = (error) => ({
    type: types.ERR_GETTING_ONLINE_USERS,
    payload: error
})

const gotOnlineUsers = (users) => ({
    type: types.GOT_ONLINE_USERS,
    payload: users
})

export const actions = {
        createUser,
        createdUser,
        errorCreatingUser,
        errGettingOnlineUsers,
        getOnlineUsers,
        gotOnlineUsers
}