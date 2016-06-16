// route that extract data from query string
// in the GET "/search" url. e.g. ?results=recent&include_tabs=true
// then output it back in JSON format
var express = require("express")
var app = express()
app.get("/search",function(req,res){
    var query = req.query
    //console.log(query)
    res.send(query)
})

app.listen(process.argv[2])
/*
In Express.js to extract query string parameters, we can use:

    req.query.NAME

To output JSON we can use:

    res.send(object)
*/