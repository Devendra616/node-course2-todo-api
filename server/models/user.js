var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    email: {
        type:String,
        required:true,
        trim:true,
        minlength:1
    }
})

var user1 = new Users({
  email:'somemail'
});

user1.save().then((doc)=>{
    console.log(JSON.stringify(doc,2));
},(e)=>{
    console.log('Some error occured',e);
});

module.exports = {Users};
