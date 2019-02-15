const Koa=require('koa');
const app = new Koa();
//加载luyou
const Router=require('koa-router');
let user =require('./controller/user.js');
let router =new Router();
router.use('/user', user.routers());

app.use(router.routes());
app.use(router.allowedMethods());

const {connect,initSchemas} =require('./init.js');
(async()=>{
    await connect();
    initSchemas();
})();


app.use(async (ctx)=>{
    ctx.body='hello world'
})

app.listen(3000,()=>{
    console.log('start shop server')
})