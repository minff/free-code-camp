var express = require("express")
var app= express()
var port =  process.env.PORT //8080
var host =  process.env.IP //"localhost"
app.get("/:input",process_time)
app.listen(port,host)

function process_time(req,res){
    var t=check_input_2(req)
    var res_obj
    if (!isNaN(t)){
        res_obj = {
            unix: t.getTime(), 
            natural: t.toString()
        }
        res.end(JSON.stringify(res_obj))
    } else{
        res_obj = {
            unix: null, 
            natural: null
        }
    }
    console.log(res_obj)
    res.end(JSON.stringify(res_obj))
}
function check_input_2(req){
    var input = req.params.input
    //replace if, conditional using or operation
    // try all cases, without knowing which case works
    var t = (Date.parse(input) && new Date (input)) || new Date(+input*(1+999 * (input.length<=10)))
    console.log(t)
    return t
}
function check_input(req){
    var input = req.params.input
    var t = new Date(input)
    if (!isNaN(t)){
        console.log("recognized: timestring input")
        console.log(t)
        return t
    }
    if (input.length>10) t=new Date(+input) // ms
    else t=new Date(+input*1000)    // mostly seconds (maybe ms, not implemented)
    if (!isNaN(t)){
        console.log("recognized: unix time input")
        return t
    } else {
        console.log("not recognized input")
        return t
    }
    
}