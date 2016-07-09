// search for documents, only fetch the fields we need (projection in mongo)
// parrots collection from database named learnyoumongo
// find all documents where age is greater than first argument
// we only want the name and age
// print out
var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
mongo.connect(url,function(err,db){
    var col = db.collection("parrots")
    col.find({
        age: {$gt:+process.argv[2]}
        
    }, {
        _id:0
        
    }).toArray(function(err,documents){
        console.log(documents)
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
      }, {
        name: 1
      , age: 1
      , _id: 0
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })
*/