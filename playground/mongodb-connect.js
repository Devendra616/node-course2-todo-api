const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
   
    
       /*
    dbo.collection('Todos').insertOne({
      text:'Something to do',
      completed:false
    },(err,result)=>{
      if(err){
        return console.log('Unable to insert todo',err);
      }
      console.log(JSON.stringify(result.ops,undefined,2));
    }) */
    var db= client.db('TodoApp');
    console.log('Connected to MongoDB Server '+db.databaseName + " database");
    db.collection('Users').insertOne({
      name:'Devendra',
      age:31,
      location:'Kirandul'
    },(err,result)=>{
      if(err)
        return console.log('Unable to insert into users',err);
      
       console.log(JSON.stringify(result.ops,undefined,2)) ;
    })
    
    client.close();
});