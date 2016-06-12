// Async Juggle
if (process.argv.length < 3) return;
var urls = [];
for (i = process.argv.length-1 ; i > 1; i--){
    urls.push(process.argv[i]);
}
console.error(urls);
var http = require("http");
send_request();
function send_request(){
    if (urls.length >0) {
        url = urls.pop();
        http.get(url,function(data){
    callback(data,new Buffer(0));})
        .on("error",function(data){
            console.error("error");
    });
    }
}
function callback(response,buf){
    response.on("data",function(data){
        totallength = buf.length + data.length;
        buf = Buffer.concat([buf,data],totallength);
    })
    response.on("end",function(data) {
        buffer_end(buf);
    })
}
function buffer_end(buf){
    console.log(buf.toString());
    send_request();
}

// oficial solution
/*var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)   
     */