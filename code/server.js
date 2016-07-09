var express = require("express")
var app= express()
var port =  process.env.PORT //8080
var host =  process.env.IP //"localhost"
app.get("/:input",check_input)
app.listen(port,host)

function check_input(req,res){
    var input = req.params.input
    var t = new Date(input)
    if (!isNaN(t)){
        console.log("timestring input")
    } else{
        if (input.length>10) t=new Date(+input)
        else t=new Date(+input*1000)
        if (!isNaN(t)){
            console.log("unix time input")
        }
    }
    console.log(t)
    var res_obj = {
        unix: t.getTime(), 
        natural: t.toString()
    }
    console.log(res_obj)
    res.end(JSON.stringify(res_obj))
}