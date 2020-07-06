'use strict';
const MongoClient = require('mongodb');

function usage() {
  console.log('Usage:');
  console.log('node', __filename, '<option>');
  console.log('Where option is one of:');
}

console.log('  callbacks Use the callbacks paradigm');
console.log('  promises Use the Promises paradigm');
console.log('  generator Use the Generator paradigm');
console.log('  async Use the async module');

if (process.argv.length < 3) {
  console.log("Incorrect number of arguments");
  usage();
} else {
  if (process.argv[2] === 'callbacks') {
    testWithCallbacks();
  } else if (process.argv[2] === 'promises') {
    testWithPromises();
     } else if (process.argv[2] === 'generator') {
    testWithGenerator();
  } else if (process.argv[2] === 'async') {
    testWithAsync();
  } else {
    console.log("Invalid option:", process.argv[2]);
    usage();
} }

function testWithCallbacks() {
  MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true }, function(err, client) {

  	  var db = client.db('issuetracker');

	  db.collection('issues').insertOne({id: 1, name: 'A. Callback'}, function(err, result) {
      console.log("Result of insert:", result.insertedId);
      db.collection('issues').find({id: 1}).toArray(function(err, docs) {
        console.log('Result of find:', docs);
        client.close();
      });
}); });
}



function testWithPromises() {
  let db;
MongoClient.connect('mongodb://localhost:27017').then( connection => { 
    

	db = connection.db('issuetracker');
return db.collection('issues').insertOne({id: 1, name: 'B. Promises me'});
  }).then(result => {
    console.log("Result of insert:", result.insertedId);
    return db.collection('issues').find({id: 1}).toArray();
  }).then(docs => {
    console.log('Result of find:', docs);
    client.close();
  }).catch(err => {
    console.log('ERROR', err);
}); }




