//const MongoClient = require('mongodb').MongoClient;
//ES6 way of destructuring and pulling off any property of an object
const {MongoClient, ObjectID} = require('mongodb');

// // Using ObjectID property, you can create your own ObjectID, which is unique and as timestamp, server info, etc. embedded in it
// let objId = new ObjectID();
// console.log('ObjectID created using mongodb library: ', objId);
// console.log('Timestamp pulled from above ObjectID: ', objId.getTimestamp());

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // return can be called along with console.log. Helps stop further execution
    return console.log('Could not connect to MongoDB');
  }
  console.log('Connected to MongoDB!');

  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert into MongoDB -> Todos collection.');
    } else {
  // <results>.ops gives an array of all the fields that got inserted
      console.log(JSON.stringify(result.ops), undefined, 2);
    }
  });

  db.collection('Users').insertOne({
    name: 'Virender',
    age: 45,
    location: 'Goel'
  }, (err, result) => {
    if (err) {
      return console.log('Could not insert to MongoDB -> Users collection');
    } else {
      console.log(JSON.stringify(result.ops), undefined, 2);
    }
  });

  client.close();
});
