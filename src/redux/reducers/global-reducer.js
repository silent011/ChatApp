import { types } from '../actions/global-actions'
import { createNewState } from './helpers'

const initialState = {
    isConnecting: true,
    isConnected: false,
}

const globalReducer = (state = initialState, action) => {
    switch(action.type){
        case types.CONNECTING:
            return createNewState(state, initialState)
        case types.CONNECTED:
            return createNewState(state, {isConnecting: false, isConnected:true})
        default: return state
    }
}

export default globalReducer