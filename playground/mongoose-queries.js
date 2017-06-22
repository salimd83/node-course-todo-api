const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '594bb660486259bc39e9113211';

// if(!ObjectID.isValid(id)) {
//    console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e));

// User.findById
var id = '594b83a5952ba6b4506eb3b3';
User.findById(id).then((user) => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));
