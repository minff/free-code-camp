// remove a document with given _id
// database name given in process.argv[2]
// colection name passed as 2nd argument
// _id as 3rd argument

/*
## Resource

  * http://docs.mongodb.org/manual/reference/method/db.collection.remove/
  */
var mongo = require("mongodb").MongoClient
var url ="mongodb://localhost:27017/" + process.argv[2]
var colname=process.argv[3]
var id=process.argv[4]

mongo.connect(url,function(err,db){
    if (err) throw err
    var collection = db.collection(colname)
    collection.remove({
        _id:id
    },function(err){
        if (err) throw err
        db.close()
    })
})
  
