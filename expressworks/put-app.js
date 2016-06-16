// process PUT '/message/:id' requests.
// return SHA1 hash
var express = require("express")
var app = express()
app.put("/message/:id",function(req,res){
    var id = req.params.id
    console.log(id)
    var msg = require("crypto")
    .createHash("sha1")
    .update(new Date().toDateString() + id)
    .digest("hex")
    res.end(msg)
})
app.listen(process.argv[2])
/*
To handle PUT requests use:

    app.put('/path/:NAME', function(req, res){...});

To extract parameters from within the request handlers, use:

    req.params.NAME
    */