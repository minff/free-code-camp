var express= require("express")
var app = express()
app.use(require("stylus").middleware(process.argv[3] || __dirname + "/public"))
console.log("style folder at: "+ process.argv[3])
app.use(express.static(process.argv[3]))

app.listen(process.argv[2])

// official solution
/*
    var express = require('express')
    var app = express()
    
    app.use(require('stylus').middleware(process.argv[3]));
    app.use(express.static(process.argv[3]));
    
    
    app.listen(process.argv[2])
    */