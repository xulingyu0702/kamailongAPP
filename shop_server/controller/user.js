const Router = require('koa-router');
let router = new Router();
const mongoose = require('mongoose');

router.post('/registUser', async (ctx) => {
    //获取MODEL
    const User = mongoose.model('User');
    //接收POST请求 封装成user对象
    let newUser = new User(ctx.request.body)
    //使用save保存用户信息
    await newUser.save().then(() => {
        ctx.body = {
            code: 200,
            message: '注册成功'
        };
    }).catch(err => {
        ctx.body = {
            code: 500,
            message: err,

        }

    })

});
router.post('/loginUser', async (ctx) => {
    //接受前端发送的数据
    let loginUser = ctx.request.body;
    let userName = loginUser.userName;
    let password = loginUser.password;
    //引入model
    const User = mongoose.model('User');
    //比对

    await User.findOne({
        userName: userName
    }).exec().then(async (result) => {
        if (result) {
            let newUser = new User();
            await newUser.comparePassword(password, result.password)
                .then(isMatch => {
                    if (isMatch) {
                        ctx.body = {
                            code: 200,
                            message: '登录成功',
                            userInfo:result 
                        }
                    } else {
                        ctx.body={
                            code:201,
                            message:"登录失败"
                        }
                    }
                })
        } else {
            ctx.boy = {
                code: 201,
                message: '用户名不存在'
            }
        }
    })

});
// module.exports=router;
module.exports = router;