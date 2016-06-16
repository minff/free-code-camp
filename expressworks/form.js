// form
// route /form that process HTML form input <form><input name="str"/></form>
// and print backward the str value
// GUIDE: Middleware https://github.com/senchalabs/connect#middlewaredies Express.js can use urlencoded() 
// middleware from the body-parser module.
// this example does not required connect actually
var express = require("express")
var app = express()
var bodyparser = require("body-parser")
// To parse x-www-form-urlencoded request bo
app.use(bodyparser.urlencoded({extended:false}))
app.post("/form",function(req,res){
    var str = req.body["str"]
    for (var i = str.length -1, rev=""; i>=0; rev +=str[i--]) {}
    res.end(rev)
})
app.listen(process.argv[2])

// compare ways of reversing string: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/
// official solution
/*
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
*/