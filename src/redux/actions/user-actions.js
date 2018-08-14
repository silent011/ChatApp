import { registerUser } from '../../api-calls/user'

export const types = {
    CREATE_USER: 'CREATE_USER',
    CREATED_USER: 'CREATED_USER',
    ERR_CREATING_USER: 'ERR_CREATING_USER'
}

const createUser =  (user) => {
    return (dispatch) => {
        registerUser(user).then(resp => resp.json(),
        error => console.log("Error registering user:", error))
        .then(json => {
            console.log('registered user')
            if(json.error)  
                dispatch(errorCreatingUser(json.error))
            else
                dispatch(createdUser(json))
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

export const actions = {
        createUser,
        createdUser,
        errorCreatingUser,
}