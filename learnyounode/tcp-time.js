// TCP Time server
port = process.argv[2]
var net = require("net")
var server = net.createServer(function(socket){
    socket.end(getDate())
})
server.listen(port,"localhost")
server.close()
function getDate(){
    //"YYYY-MM-DD hh:mm"  
    date = new Date()
    return digit(date.getFullYear(),4) +'-'+ digit(date.getMonth()+1,2) +'-'
    + digit(date.getDate(),2) + ' ' + digit(date.getHours(),2) + ':' + digit(date.getMinutes(),2)
    + '\n'
}
function digit(number,d){
    return (Array(d).join('0')+number).slice(-d)
}
// official solution
/*
 var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
     */
