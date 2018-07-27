var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text: {
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var newTodo = new Todo({
    text:'Cook dinner'
});

newTodo.save().then((doc)=>{
    console.log('Saved to do',doc);
},(e)=>{
    console.log('Unable to save');
})

var perpTodo = new Todo({
    text:'Webinar attended for mongodb',
    completed:true,
    completedAt:1820
});

perpTodo.save().then((doc)=>{
    console.log('Saved data is ',doc);
},(err)=>{
    console.log('Unable to save the data');
});

module.exports = {Todo}