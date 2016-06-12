var http = require("http")
var url = require('url')
server = http.createServer(function(req,res){
    //res.end("ok")
})
server.listen(process.argv[2],"localhost")
server.on("request",function (req,res) {
    option = url.parse(req.url,true)
    path=option.pathname.split('/')[2]
    data = "ok"
    if (path=="parsetime"){
        data=getDateJSONString(option.query.iso)
    } else if (path == "unixtime"){
        data=getUnixDateJSONString(option.query.iso)
    }
    res.writeHead(200, { 
    'Content-Length': data.length,
    'Content-Type': 'application/json' })
    
    res.end(data)
})

function getDateJSONString(iso_string){
    d = new Date(Date.parse(iso_string))
    json = {
        "hour": d.getHours(),
        "minute": d.getMinutes(),
        "second": d.getSeconds()
    }
    return JSON.stringify(json)
    // iso time parser
    /*
    time=iso_string.substr(11).split(':')
    json = {
        "hour": time[0].substr(0,2),
        "minute": time[1].substr(0,2),
        "second": time[2].substr(0,2)
    }
    return JSON.stringify(json)
    */
    
}
function getUnixDateJSONString(iso_string){
    json = {
        "unixtime" : Date.parse(iso_string)
    }
    return JSON.stringify(json)
}
// ──────────────────────────────────────────────────────────────────────  
// official solution
/*
   
     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
     */