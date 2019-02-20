import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  userInfo:{
    userName:'未登录'
  }
  },
  fetters:{

  },
  mutations: {
changesLogin(state,status){
 state.userInfo=status
}
  },
  actions: {
loginAction({commit},user){
  commit ('changesLogin',user)
}
  }
})
