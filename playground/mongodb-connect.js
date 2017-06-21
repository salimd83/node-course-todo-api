// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log('connect to DB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Salim Dirani',
    //     age: 33,
    //     location: 'Beirut'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user'), err;
    //     }
    //     console.log(result.ops[0]._id.getTimestamp())
    // })

    db.close();
});