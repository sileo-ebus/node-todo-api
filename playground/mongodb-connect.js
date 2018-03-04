

//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb'); // wie oben
const {MongoClient, ObjectID} = require('mongodb'); // mehr

//var user = {name : 'Sven', age: 25}; // Beispiel für Destruction
//var {name} = user; // Variable wird mit Namen aus Object belegt
//console.log(name);

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{ // db wird angelegt, wenn daten angelegt werden
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to db');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined, 2 ));
        
    // });

    // db.collection('Users').insertOne({
    //     texnamet: 'Sven',
    //     age: 44,
    //     location: 'Hamburg'
    // }, (err,result) => {
    //     if (err){
    //         return console.log('Unable to insert user', err)
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined, 2 ));
        
    // });

    db.close();
    
});