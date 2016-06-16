// read a file, parse it to JSON
// output to user
// filename at argv3
// response with res.json(object)
// match "/books" resource path
var express = require("express")
var app = express()
var fs= require("fs")
app.get("/books",function(req,res){
    fs.readFile(process.argv[3],function(err,content){
        var obj = JSON.parse(content)
        res.json(obj)
    })
})
app.listen(process.argv[2])

// official solution
/*
    var express = require('express')
    var app = express()
    var fs = require('fs')
    
    app.get('/books', function(req, res){
      var filename = process.argv[3]
      fs.readFile(filename, function(e, data) {
        if (e) return res.send(500)
        try {
          books = JSON.parse(data)
        } catch (e) {
          res.send(500)
        }
        res.json(books)
      })
    })
    
    app.listen(process.argv[2])
*/