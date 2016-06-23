// connect to mongo db named learnyoumongo
// mongodb://localhost:27017/learnyoumongo
// parrots collection to find all documents, where age > argv[0]
/*

## Resources:

  * http://docs.mongodb.org/manual/reference/method/db.collection.find/
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  
  */
// mongod --port 27017 --dbpath=data --small-files
var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
// conect to mongo
mongo.connect(url,function (err,db){
    // get a collection
    var col=db.collection("parrots")
    col.find({
        age: {$gt: parseInt(process.argv[2])}
        
    })
    .toArray(function(err,documents){
        console.log(documents)
        if (err) console.log("")
    db.close()
    })
})
// official solution
/*
    var mongo = require('mongodb').MongoClient
    var age = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.find({
        age: {
          $gt: +age
        }
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })

*/