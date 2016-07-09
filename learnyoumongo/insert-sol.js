// conenct to database learnyoumongo
// insert document into docs collection
// document should be json document// with properties: firstName, lastName

var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
var fname = process.argv[2]
var lname = process.argv[3]
var obj = {firstName: fname, lastName: lname};
var json_obj=JSON.stringify(obj);
mongo.connect(url,function(err,db){
    //if (err) throw err
    var col = db.collection("docs")
    // inserting document
    console.log(json_obj)
    col.insert(obj,function(err,data){
        // handle error
        // insert obj > ok
        // insert json > TypeError: Cannot assign to read only property '_id' of {"firstName":"min","lastName":"ha"}
        db.close()
    })
    
})


/*
## Resource

  * http://docs.mongodb.org/manual/reference/method/db.collection.insert/
*/