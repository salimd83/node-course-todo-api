// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log('connect to DB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('594b74debde7f39248ba421d')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('594a6f5d45ce27a61253a50f')
    }, {
        $set: {
            name: "Salim Dirani"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    })

    // db.close();
});