const {MongoClient,ObjectID} = require('mongodb');
var url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }

    var db = client.db('TodoApp');
    /* db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
      console.log('Todos');
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('Unable to fetch todos list');
    }); */ 
    
  /*   db.collection('Todos').find({_id: new ObjectID("5b3e73a786450a87ab78855f")}).toArray().then((docs)=>{
      console.log('Todos');
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
      console.log('Unable to fetch todos list');
    }); */

  /*   db.collection('Users').find({name:'Devendra'}).toArray().then((docs)=>{
      console.log();
      console.log(JSON.stringify(docs,undefined,2));
      
    },(err)=>{
      console.log('Unable to fetch todos list');
    }); */
    
    db.collection('Users').find().count().then((count)=>{
      console.log(`Users count is ${count}`);     
    },(err)=>{
      console.log('Unable to fetch todos list');
    });
    
    client.close();
});