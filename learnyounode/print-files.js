module.exports = function (dir,ext,callback) {
        var fs = require("fs");
        fs.readdir(dir,function(err,files){
            if (err) return callback(err);
            files=files.filter(function(elem,index,arr){
                index = elem.lastIndexOf('.');
                if (index< 0) return false;
                else return (elem.substr(index + 1) == ext);
            });
            return callback(err,files);
        });
    }
    
// official solution
//_/home/ubuntu/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution_filter.js_ :  
   /*
 var fs = require('fs')  
 var path = require('path')  
   
 module.exports = function (dir, filterStr, callback) {  
   
   fs.readdir(dir, function (err, list) {  
     if (err)  
       return callback(err)  
   
     list = list.filter(function (file) {  
       return path.extname(file) === '.' + filterStr  
     })  
   
     callback(null, list)  
   })  
 }  
 */