// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log('connect to DB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('594a513e7abde9a1970a7f4a')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('unable to fetsh todos', err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('unable to fetsh todos', err)
    // });

    db.collection('Users').find({name: "Salim Dirani"}).toArray().then((docs) => {
        console.log('Users with Name Salim Dirani:')
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetsh users', err);
    })

    // db.close();
});