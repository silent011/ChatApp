import { combineReducers } from 'redux'
import userReducer from './user-reducers'
import globalReducer from './global-reducer'

const combinedReducer = combineReducers({
    user: userReducer,
    global: globalReducer
})

export default combinedReducer