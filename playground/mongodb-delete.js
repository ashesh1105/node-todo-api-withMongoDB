const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // return can be called along with console.log. Helps stop further execution
    return console.log('Could not connect to MongoDB');
  }
  console.log('Connected to MongoDB!');

  const db = client.db('TodoApp');

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log(`There was an error deleting documents. Error: ${err}`);
  //   });

  // // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log(`There was an error deleting document. Error: ${err}`);
  //   });

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  //   }, (err) => {
  //     console.log(`There was an error finding one and deleting the document. Error: ${err}`);
  //   });

  // client.close();
});
