import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combinedReducer from './reducers/combined'
import { actions as userActions } from './actions/user-actions'
import socket from '../socket/socket'

const store = createStore(
    combinedReducer,
    applyMiddleware(thunk)
)

store.dispatch(userActions.createUser({username: 'Josh', socketid: socket.io.engine.id}))
store.dispatch(userActions.getOnlineUsers())
export default store