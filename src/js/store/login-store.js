import Vue from 'vue'
import qs from "qs"

export default {
  state: {
    isLogin: false,
    user: {
      username: ''
    }
  },
  mutations: {
    login(state, payload) {
      state.isLogin = true
      state.user.username = payload.username
    },
    logout(state, payload) {
      state.isLogin = false
      state.user.username = payload.username
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        Vue.axios
          .post(
            "/api/login",
            qs.stringify(
              payload
            )
          )
          .then(function (response) {
            var result = response.data;
            if (result.code == 200) {
              context.commit('login', payload)
              resolve(response)
            } else {
              reject(response)
            }
          })
          .catch(function (error) {
            var errorData = {
              message: "网络连接中断！请联系管理员！"
            }
            reject(errorData)
          });
      })
    }
  },
  getters: {
    getUsername(state) {
      return state.user.username
    }
  }
}
