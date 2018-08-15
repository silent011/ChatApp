const webpack = require('webpack')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http)
const socketHandler = require('./socket-handler.js')

module.exports = PORT => {
    const config = require('../configs/webpack-dev-config')

    const compiler = webpack(config)

    app.use(require("webpack-dev-middleware")(compiler))
    app.use(require("webpack-hot-middleware")(compiler))
    app.use(bodyParser.json())
    app.use(express.json())

    app.use(express.static("./static"))

    require('./routers')(app)

    socketHandler(io)
      
    http.listen(PORT, () => {
        console.log('dev server listening on http://localhost:8000')
    })

}

