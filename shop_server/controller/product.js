const Koa =require('koa');
const Router=require('koa-router');
let router =new Router();
const mongoose =require('mongoose');
const fs =require('fs')//读取JSON文件的插件


router.get('/insertProductInfo', async (ctx) => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        data = JSON.parse(data);
        console.log(data);
        let count = 0; // 计数器
        const Product = mongoose.model('Product');
        data.map((value, index) => {
            console.log(value);
            let product = new Product(value);
            // 随机生成类型 范围是1~8
            product.type = Math.floor(Math.random() * 8) + 1;
            product.save().then(() => {
                count++;
                console.log('成功' + count);
            }).catch(err => {
                console.log('失败啦:' + error);
            });
        });
    });
    ctx.body = '导入数据';
});
module.exports=router;
