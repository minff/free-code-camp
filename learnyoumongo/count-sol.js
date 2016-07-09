/*
count the number of documents that meet certain criteria
collection "parrots" from db name learnyoumongo
count all documents where age is greater than the 1st argument
print the result to stdout (count)

## Resource

  * https://docs.mongodb.com/manual/reference/method/db.collection.count/
*/
var mongo =require("mongodb").MongoClient
var url ="mongodb://localhost:27017/learnyoumongo"
var age_ref = process.argv[2]
mongo.connect(url,function(err,db){
    var collection = db.collection("parrots")
    collection.count({
        age:{ $gt:+age_ref }
    },function(err,count){
        console.log(count)
        db.close()
    })
})