const webpack = require('webpack')
const path = require('path')
const express = require('express')
const app = express();

module.exports = PORT => {
    const config = require("../configs/webpack-prod-config")

    webpack(config, (err, stats) => {
        if(err || stats.hasErrors()){
            console.log("Webpack Error: ", err || stats.compilation.errors)
        } else {
            console.log("Webpack compiled: ")
        }
    })

    app.use(express.static(path.resolve(__dirname,"../static")))
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../index.html"));
    })


    app.listen(PORT, () => {
        console.log("Listening on http://localhost:" + PORT)
    })
}

