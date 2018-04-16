const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findOneAndRemove({_id: '5ad4f03f3799d91b9cc72534'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5ad4f03f3799d91b9cc72534').then((todo) => {
    console.log(todo);
});