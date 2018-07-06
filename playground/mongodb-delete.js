const {MongoClient,ObjectID} = require('mongodb');
var url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    var db = client.db('TodoApp');

    //deletemany
   /*  db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
      console.log(result);
    }); */
    //delete one
      /* db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
        console.log(result);
      }); */
    //find one delete
/*     db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
      console.log(result);
    }); */

    db.collection('Users').deleteMany({name:'Devendra'}).then((res)=>{
      console.log(res);
    });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('5b3e4ffef510541e1815d8ac')}).then((res)=>{
      console.log(res);
    })
    
});