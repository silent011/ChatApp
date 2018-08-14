import { combineReducers } from 'redux'
import userReducer from './user-reducers'

const combinedReducer = combineReducers({
    user: userReducer
})

export default combinedReducer