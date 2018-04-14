// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server', err);
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5ad1471b3799d91b9cc72492")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });
    
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // });

    db.collection('Users').find({
        name: 'Sarah'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('There are 0 Sarah\'s', err);
    });

    client.close();
});