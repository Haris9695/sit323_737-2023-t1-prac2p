var express = require('express')
var app = express()
// respond with "hello world" when a Get request is made tothe homepage
app.get('/',function(req,res){

    res.send('hello world')
})


//list to particular
app.listen(3000)