// learnyounode challenges
// challenge 1
// console.log("HELLO WORLD");
// challenge 2
/*
arr = process.argv;
num=0;
for (i=2; i < arr.length; i++){
    num = num + +arr[i];
}
console.log(num);
*/

// challenge 3
// print number of newline, similar to bash: cat program.js | wc -l
/*
if (process.argv.length < 3) return;
path = process.argv[2];
var fs = require('fs');
console.log(fs.readFileSync(path).toString().split('\n').length-1);
*/



