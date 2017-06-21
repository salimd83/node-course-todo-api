// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to database server');
    }
    console.log('connect to DB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findOneandDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // })

    // db.collection('Users').deleteMany({name: "Salim Dirani"}).then((res) => {
    //     console.log(res);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('594a6e4c3d227ea5edf86d22')}).then((res) => {
        console.log(res);
    })

    // db.close();
});