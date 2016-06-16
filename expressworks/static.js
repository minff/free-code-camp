// use static middleware
// perhaps this is server listening to static request !?
var express = require("express")
var app = express()
var path = require("path")
// call static middleware
// load static resource, let it be js, css, index.html, etc.
app.use(express.static(process.argv[3] || path.join(__dirname,"public")))
//console.log(process.argv[3]) ///home/ubuntu/.nvm/versions/node/v4.1.2/lib/node_modules/expressworks/exercises/static/public
// try to get request
/*
app.get("/",function(req,res){
    console.log(req)
    console.log(res)
})
*/
// local (commented)
try {
//app.listen(process.argv[2], "localhost")

// port 80 throw Error: listen EACCES 127.0.0.1:80
// at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:82:10)
} catch (err){
    console.log(err)
}

// listen to browser request. Url: free-code-camp-minff.c9users.io
// process.env.PORT process.env.IP
app.listen(process.argv[2] || process.env.PORT, process.env.IP)