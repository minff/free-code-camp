// update document in "users" collection
// database name given via 1st argument
// process.argv[2]
// e.g. an user defined:
//  {
//      "name": "Tina",
//      "age": 30,
//      "username": "tinatime"
//    }
// assume username property is unique
var mongo =require("mongodb").MongoClient
var host ="mongodb://localhost:27017"
var dbname=process.argv[2]
var url=host+"/"+dbname

mongo.connect(url,function(err,db){
    var query = {
        username:"tinatime"
    }
    var replace = {
        $set: {
            age:40
        }
    }
    var collection = db.collection("users")
    collection.update(query,replace,function(err,data){
        db.close()
    })
})

/*
## Resources

  * http://docs.mongodb.org/manual/tutorial/modify-documents/
  * http://docs.mongodb.org/manual/reference/operator/update/set/#set
*/
// official solution
/*
    var mongo = require('mongodb').MongoClient
    
    var url = 'mongodb://localhost:27017/' + process.argv[2]
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var collection = db.collection('users')
      collection.update({
        username: 'tinatime'
      }, {
        $set: {
          age: 40
        }
      }, function(err) {
        if (err) throw err
        db.close()
      })
    })
*/