const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });
// Todo.findOneAndRemove

Todo.findOneAndRemove({_id: '594c251dbbcf53c98ac92e03'}).then((todo) => {

});
Todo.findByIdAndRemove('594c251dbbcf53c98ac92e03').then((todo) => {
    console.log(todo);
})