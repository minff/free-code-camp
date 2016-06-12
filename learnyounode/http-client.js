// HTTP Client
/*
function callback(response){
    content ="";
    response.on("data",function (data){
        content = data.toString();
        console.log(content);
    })
}
if (process.argv.length < 3) return;
url = process.argv[2];
var http = require("http");
http.get(url,callback);
*/
// official solution
var http = require('http')  
// print to console.log
 http.get(process.argv[2], function (response) {  
   response.setEncoding('utf8')  
   response.on('data', console.log)  
   response.on('error', console.error)  
 }).on('error', console.error)  