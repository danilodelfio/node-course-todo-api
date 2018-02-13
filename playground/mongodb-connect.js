//const MongoClient = require('mongodb').MongoClient;
// destructuring di ES6. 
// Prende le proprietà MongoClient e ObjectID dalla libreria importata (dall'oggetto)
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed:false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo');
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    // db.collection('Users').insertOne({
    //     name: 'Danilo Del Fio',
    //     age: 44,
    //     location: 'Milan'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    db.close();
});