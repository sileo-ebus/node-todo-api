

//const MongoClient = require('mongodb').MongoClient;
//const {MongoClient} = require('mongodb'); // wie oben
const {MongoClient, ObjectID} = require('mongodb'); // mehr

var user = {name : 'Sven', age: 25}; // Beispiel für Destruction
var {name} = user; // Variable wird mit Namen aus Object belegt
console.log(name);

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{ // db wird angelegt, wenn daten angelegt werden
    if (err) {
        console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected to db');

  /*  db.collection('Todos').find({_id: new ObjectID('5a772778dde89248dc6a5c25')}).toArray().then((docs) => {
       console.log('Todos');
       console.log(JSON.stringify(docs,undefined,2));
       
       
   }, (err) => {
       console.log('Unable to fetch todos', err); */

  /*      db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
       
   }); // find returns cursor (pointer to document)
 */
     db.collection('Users').find({name: 'Sven'}).toArray().then((docs) => {
       console.log('Users');
       console.log(JSON.stringify(docs,undefined,2));
       
       
   }, (err) => {
       console.log('Unable to fetch todos', err); 
    }); // find returns cursor (pointer to document)

    //db.close();
    
})