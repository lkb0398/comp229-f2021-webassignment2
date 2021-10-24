let mongoose = require('mongoose');

//create a model class
let bookModel = mongoose.Schema({
    name:String,
    email:String,
    phone:Number
},
{
    collection: "books"
});

module.exports = mongoose.model('book', bookModel);