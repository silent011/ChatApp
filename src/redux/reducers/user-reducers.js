import { types } from '../actions/user-actions'

const initialState = {
    username:'',
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CREATED_USER:
            return Object.assign({}, state, {username: action.payload})
        case types.ERR_CREATING_USER:
            return Object.assign({}, state, {error: action.payload})
        default:
            return state
    }
}

export default userReducer