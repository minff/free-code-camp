// count number of newlines
// using async filesystem
// from file in 1st arg
// and print it to console
fs = require("fs")
fs.readFile(process.argv[2],function(err, data){
    count = 0
    str = data.toString()
    // can be improved
    for (i in str){
        if (str[i] == '\n') count ++
    }
    console.log(count)
})
// official solution
/*
var fs = require('fs')  
     var file = process.argv[2]  
       
     fs.readFile(file, function (err, contents) {  
       // fs.readFile(file, 'utf8', callback) can also be used  
       var lines = contents.toString().split('\n').length - 1  
       console.log(lines)  
     })  
     
     */