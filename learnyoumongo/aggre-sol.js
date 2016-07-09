/*
Aggregation allows calculation the sum of a field of multiple documents 
or the average of a field of documents meeting certain criteria

Calculate the average price for all documents in 
collection "prices" in db name learnyoumongo
size of db will be passed as 1st argument

    {
      "name": "Tshirt",
      "size": "S",
      "price": 10,
      "quantity": 12
      "meta": {
        "vendor": "hanes",
        "location": "US"
      }
    }
    
## Resources

  * http://docs.mongodb.org/manual/aggregation/
  * http://docs.mongodb.org/manual/core/aggregation-introduction/
  
  
*/
var mongo = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
var size = process.argv[2]
mongo.connect(url,function(err,db){
    var collection = db.collection("prices")
    // aggregate take array of object as 1st arg
    // array contains 2 objects, match and group (operation)
    var match = { $match:{size:size}}
    var group = {
        $group:{
            _id: "average",
            average: {$avg: "$price"},
            sum: {$sum: "$price"}
        }
    }
    collection.aggregate([match,group]).toArray(function(err,result){
        
        console.log(result[0].average.toFixed(2))
        db.close()
    })
})

// official solution
/*
    var mongo = require('mongodb').MongoClient
    var size = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices')
      prices.aggregate([
        { $match: {
          size: size
        }}
      , { $group: {
          _id: 'average'
        , average: {
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        if (err) throw err
        if (!results.length) {
          throw new Error('No results found')
        }
        var o = results[0]
        console.log(Number(o.average).toFixed(2))
        db.close()
      })
    })
*/
/*
## HINTS

To use the aggregate() function, one first needs the collection.
The aggregate() function takes an array of objects as the first argument.

This array will contain the different pipelines for the aggregation.
To read more about pipelines, please visit [Aggregation](http://docs.mongodb.org/manual/core/aggregation-introduction/).

The two main pipeline stages we will use will be $match and $group.

### $match

$match is used similar to the way a query is done. It allows us to select
the documents that meet certain criteria.

Ex.

    var match = { $match: { status: 'A' } }

The above example will match all of the documents that have a status
property equal to A.

### $group

$group is what allows us to run operations on certain properties.

So, say we wanted to get the sum of the values of the property value
where status is equal to A and have it placed in the total property.

Ex.

    // [
    //  { status: 'A', value: 1 },
    //  { status: 'B', value: 2 },
    //  { status: 'A', value: 10 }
    // ]
    
    collection.aggregate([
      { $match: { status: 'A' }}
    , { $group: {
        _id: 'total' // This can be an arbitrary string in this case
      , total: {
          // $sum is the operator used here
          $sum: '$value'
        }
      }}
    ]).toArray(function(err, results) {
      // handle error
      console.log(results)
      // => [
      // =>   { _id: 'total', total: 11 }
      // => ]
    })

Other operators used in the $group stage include:

  * `$avg`
  * `$first`
  * `$last`
  * `$max`
  * `$min`
  * `$push`
  * `$addToSet`

# Rounding

The Number prototype contains a function toFixed(), which accepts the
number of decimal places you would like to round to, and returns a string
representation.

      var value = "1"
      Number(value).toFixed(5)
      // => '1.00000'

If your program does not finish executing, you may have forgotten to
close the db. That can be done by calling db.close() after you
have finished.
*/