// listen to port at first arg
// file content location in second argument
// stream file content to response
http = require("http")
fs = require("fs")
file_content = process.argv[3]
server = http.createServer(callback_createServer)
.listen(process.argv[2],"localhost")

server.close()
function callback_createServer(req,res){
    res.statusCode=200
    res.setHeader("Content-Type","text/html")
    // pipe stream to response
    // res.end() implicit after fs stream.end()
    //fs.createReadStream(file_content).pipe(res)
    
    // explicit res.end()
    fs.createReadStream(file_content).pipe(res,{"end":false})
    .on("end",function(){
        res.end()
    })
    
}
// official solution
/*
var http = require('http')  
     var fs = require('fs')  
       
     var server = http.createServer(function (req, res) {  
       res.writeHead(200, { 'content-type': 'text/plain' })  
       
       fs.createReadStream(process.argv[3]).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
     */