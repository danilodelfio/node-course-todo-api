const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // delete many
    /*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
        console.log(result);
    })*/
    // deleteOne
    /*db.collection('Todos').deleteOne({text:'Eat lunch'})
        .then((result) => {
            console.log(result);
        })*/
    
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false})
    //     .then((result) => {
    //         console.log(result);
    //     })
    //db.collection('Users').deleteMany({name:'Danilo Del Fio'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a82fe75635b0a24e59c5761')
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});