// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server', err);
    }

    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'eat dinner'
    // }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Kyle'
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: ObjectID('5ad14a7e3799d91b9cc724b1') }).then((result) => {
        console.log(result);
    });

    client.close();
});