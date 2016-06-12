// uppercaser
// http server that receive only POST request
// conver incoming POST body characto  to uppercase
// and return it
// listen to port given in 1st arg
http = require("http")

server = http.createServer(function(req,res){
    if (req.method != "POST") return
    //console.log(req.headers['transfer-encoding'])
    msg=""
    req.on("data", function(data){
        msg+=data
    })
    req.on("end", function() {
        res.statusCode = 200
        res.setHeader("Content-Type","text/plain")
        res.end(msg.toUpperCase()) // work with Buffer too
    })
    
}).listen(process.argv[2],"localhost")

// official solution

/*
var http = require('http')  
     var map = require('through2-map')  
       
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
*/