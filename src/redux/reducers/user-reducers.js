import { types } from '../actions/user-actions'
import { createNewState } from './helpers'

const initialState = {
    username:'',
    errorRegister: '',
    onlineUsers: [],
    errGettingOnline: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CREATED_USER:
            return createNewState(state, {username: action.payload})
        case types.ERR_CREATING_USER:
            return createNewState(state, {error: action.payload})
        case types.ERR_GETTING_ONLINE_USERS:
            return createNewState(state, {errGettingOnline: action.payload})
        case types.GOT_ONLINE_USERS:
            return createNewState(state, {onlineUsers: action.payload})
        default:
            return state
    }
}

export default userReducer