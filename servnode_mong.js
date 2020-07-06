const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, function(err, client) {

  var db = client.db('issuetracker')
  db.collection('issues').find().toArray(function(err, docs) {
    console.log('Result of find:', docs);
    client.close();
  });
});

