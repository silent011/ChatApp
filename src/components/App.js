import React from 'react'
import { hot } from 'react-hot-loader'
import ChatComponent from './ChatComponents/ChatComponent'

import '../styles/base.styl'
import '../socket/socket'

const App = (props) => {
  return (
    <div>
        <ChatComponent/>
    </div>
  )
}
export default hot(module)(App);