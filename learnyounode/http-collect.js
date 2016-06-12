// HTTP Collect
if (process.argv.length < 3) return;
url = process.argv[2];
var http = require("http");
http.get(url,function(data){
    callback(data,new Buffer(0));
});

function callback(response,buf){
    response.on("data",function(data){
        totallength = buf.length + data.length;
        buf = Buffer.concat([buf,data],totallength);
    })
    response.on("end",function(data) {
        console.log(buf.length);
        console.log(buf.toString());
    })
}

// oficial solution
/*
var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
     */