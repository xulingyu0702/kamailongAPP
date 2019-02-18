const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const userSchema =new Schema({
    userId:Schema.Types.ObjectId,
    userName:{ unique : true, type:String},
    password:String,
    createDate:{type:Date,default:Date.now()}
})

mongoose.model('User',userSchema)