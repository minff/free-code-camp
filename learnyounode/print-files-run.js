// learnyounode make it modular
var pf = require('./print-files.js');
if (process.argv.length < 4) return;
pf(process.argv[2],process.argv[3],function(err,files){
    if (err) return console.error(err.message);
    for (f in files){
        console.log(files[f]);
    }
});

// official solution 
//  _/home/ubuntu/.nvm/versions/node/v4.4.3/lib/node_modules/learnyounode/exercises/make_it_modular/solution/solution.js_ :  
/*
 var filterFn = require('./solution_filter.js')  
 var dir = process.argv[2]  
 var filterStr = process.argv[3]  
   
 filterFn(dir, filterStr, function (err, list) {  
   if (err)  
     return console.error('There was an error:', err)  
   
   list.forEach(function (file) {  
     console.log(file)  
   })  
 })  
 */