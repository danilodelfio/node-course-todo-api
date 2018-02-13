const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').find({name:'Danilo Del Fio'}).toArray().then((todos) => {
            console.log('Todos');
            console.log(todos);
    }, (err) => {
        console.log('Unable to load the todos', err);
    }); 

    //db.close();
});