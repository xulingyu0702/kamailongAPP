<template>
 <div><van-tabs>
    <van-tab title="登录">
 <van-cell-group>
  <van-field  required  clearable v-model="loginUsername" placeholder="请输入用户名" label="用户名"/>
  <van-field  required   clearable type="password" v-model="loginPassword" placeholder="请输入密码" label="密码"/>
</van-cell-group>
<div>
    <van-button type="primary" size="large" @click="loginHander">登录</van-button>
</div>

    </van-tab>
    <van-tab title="注册">
        <van-cell-group>
  <van-field  required  clearable v-model="registerUsername" placeholder="请输入用户名" label="用户名"/>
  <van-field  required   clearable type="password" v-model="registerPassword" placeholder="请输入密码" label="密码"/>
</van-cell-group>
<div>
    <van-button type="primary" size="large" @click="registHander">注册</van-button>
</div>
    </van-tab>
</van-tabs></div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js'
export default{
data() {
    return {
       loginUsername:"",
       loginPassword:"",
       registerUsername:"",
       registerPassword:""

    }
},
methods:{
registHander(){
    axios({
        url:url.registUser,
        method:'post',
        data:{
            userName:this.registerUsername,
            password:this.registerPassword
        }
    }).then(res=>{
      if(res.data.code == 200){
          this.$toast.success('注册成功')
      }else{
         this.$toast.fails('注册失败')
      }
    }).catch(err=>{
      console.log(err);
     this.$toast.fail('注册失败');


    })
},

loginHander(){
    axios({
        url:url.loginUser,
        method:'post',
        data:{
            userName:this.loginUsername,
            password:this.loginPassword,
        }
    }).then(res=>{
console.log('成功')
    }).catch(err=>{
console.log('失败') 
    })
}
}
}


</script>
