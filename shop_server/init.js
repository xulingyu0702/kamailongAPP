const mongoose =require('mongoose');
const db ='mongodb://localhost/shop';
//引入 schema
const glob=require('glob');
const path=require('path');
exports.initSchemas=()=>{
    glob.sync(path.resolve(__dirname,'./model','*.js')).forEach(require)
}
exports.connect=()=>{
    //连接数据库
    mongoose.connect(db,{userNewUrlParser:true});
    //监听数据库连接 连接失败再次连接  可对其处理 三次失败就不连接了 
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(db);
    });
    //数据库出现错误
    mongoose.connection.on('error',err=>{
        console.log(err);
        mongoose.connect(db);
    });
    //连接的时候
    mongoose.connection.once('open',()=>{
        console.log('mongodb connected success')
    })
}