const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // return can be called along with console.log. Helps stop further execution
    return console.log('Could not connect to MongoDB');
  }
  console.log('Connected to MongoDB!');

  const db = client.db('TodoApp');

  // // find() returns cursor which has many methods in it. toArray function on find() returns a promoise
  // db.collection('Todos').find({completed: false}).toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to find documents from MongoDB -> Todos collection');
  //   });

  // // Find by _id. Notice, you need to create a new ObjectID for it.
  // db.collection('Todos').find({
  //   _id: new ObjectID('5afecd05bec797a465118b6e')})
  //   .toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to find documents from MongoDB -> Todos collection');
  //   });

  // // count of documents
  // db.collection('Todos').find().count()
  //   .then((count) => {
  //     console.log(`Todos count: ${count}`);
  //   }, (err) => {
  //     console.log(err);
  //   })

  // // More query with matching document
  // db.collection('Users').find({name: 'Shiela'}).toArray()
  //   .then((res) => {
  //     console.log(JSON.stringify(res, undefined, 2));
  //   }, (err) => {
  //     console.log(err);
  //   });

  client.close();
});
