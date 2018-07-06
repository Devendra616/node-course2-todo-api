const {MongoClient,ObjectID} = require('mongodb');
var url = "mongodb://localhost:27017";

MongoClient.connect(url,(err,client)=>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    var db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
      _id:ObjectID('5b3e5379b9154b234047f3e0')
    },{
      $set:{name:'Devendra'},
      $inc:{age:-4}
    },{
      returnOriginal:false
    }).then((res)=>{
      console.log(res)
    })
    
});