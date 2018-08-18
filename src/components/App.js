import React, { Component } from 'react'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import socket from '../socket/socket'

import ChatComponent from './ChatComponents/ChatComponent'
import LoadingScreen from './general/LoadingScreen'

import { actions } from '../redux/actions/global-actions'

import '../styles/base.styl'

// const App = (props) => {
//   return (
//     <main>
//      {props.isConnected ? <ChatComponent/> : LoadingScreen}
//     </main>
//   )
// }

class App extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      let {connectToSocket} = this.props;
      if(!connectToSocket) {
        console.log('no connect function in app component')
      } else {
        connectToSocket()
      }
    }

    render(){
     return <main>
              {this.props.isConnected ? <ChatComponent/> : <LoadingScreen/>}
            </main>
    }
}

const mapState = state => {
  return {
    isConnected: state.global.isConnected
  }
}

const mapDispatch = dispatch => {
  return {
    connectToSocket: () => {
      dispatch(actions.connect(socket))
    }
  }
}

const AppContainer = connect(
  mapState, mapDispatch
)(App) 

export default hot(module)(AppContainer);