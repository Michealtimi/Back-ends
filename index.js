const http = require ('http')
const express = require('express')
const app = express ()

app.get('/', function(req, res){
    res.writeHead(200,{"Context-Type" : "type/plain"})
    res.end("Home/n")
})

app.get('/', function(req, res){
    res.writeHead(200,{"Context-Type" : "type/plain"})
    res.end("about")
})

//Create Http server

app.listen(8901, () => {
    console.log(`Example app Listening on Port ${8901}`)
})