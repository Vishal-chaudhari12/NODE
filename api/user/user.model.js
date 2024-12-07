const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    firstName:String,
    lastName:String
});

const UserModel= mongoose.model('user',userSchema);

module.exports={UserModel}