import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(vuex)

const store = new vuex.Store({
  state:{
    userInfo:{
      username:'',
      avatar:'',
      email:'',
      password:''
    }
  },
  mutations:{
    'CHANGE_USERINFO' (state,payload){
      state.userInfo = payload;
    }
  },
  actions:{},
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    })
  ]
});
export default store
