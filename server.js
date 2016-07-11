/* 
still needed to split string
*/
var express = require("express")
var app= express()
var port =  process.env.PORT //8080
var host =  process.env.IP //"localhost"
app.get("/header/whoami",process_header)
app.listen(port,host)

function process_header(req,res){
    var header=req.headers
    var obj={
        ipaddress:header["x-forwarded-for"],
        language:header["accept-language"],
        software:header["user-agent"]
    }
    var result =JSON.stringify(obj)
    console.log(result)
    res.statusCode=200
    res.end(result)
}