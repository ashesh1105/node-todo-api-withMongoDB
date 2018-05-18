const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    // return can be called along with console.log. Helps stop further execution
    return console.log('Could not connect to MongoDB');
  }
  console.log('Connected to MongoDB!');

  const db = client.db('TodoApp');

  // findOneAndUpdate(<filter criteria>, <updated doc>) => returns a promise
  // Notice the use of one of update operators $set here, so we do not need to provide all the fields of a document
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5afedc7882d3c002b6e3f0a2')
    }, { $set: {
        completed: false
      }}, {
        returnOriginal: false
    })
    .then((result) => {
      console.log(result);
    }, (err) => {
      console.log(`Error occured in findOneAndUpdate: ${err}`);
    });

  db.collection('Users').findOneAndUpdate({location: 'Dublin'}, {
    $set: {
      name: 'Virender'
    }, $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log(`Error occured in findOneAndUpdate: ${err}`);
  });

  client.close();
});
