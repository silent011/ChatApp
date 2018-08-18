import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import './assets/favicon.ico'
import App from './components/App'

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>
, document.getElementById('root'))