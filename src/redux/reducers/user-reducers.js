import { types } from '../actions/user-actions'

const initialState = {
    username: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CREATED_USER:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}

export default userReducer