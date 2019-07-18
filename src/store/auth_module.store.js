import { authService } from './../services/AuthService'

const user = JSON.parse(localStorage.getItem('user')) || null

export const AuthModule = {
  state: {
    user,
    error : null,
  },

  mutations: {
    setUser(state,payload) {
      state.user = payload
    }
  },

  actions: {
    login(context, { email, password }) {
      return authService.login(email, password)
      .then((user) => {
        context.commit('setUser', user)
      })
      .catch(e => {
        console.log(e) // eslint-disable-line
      })
    },
  },

  getters: {
    getUser(state){
      return state.user
    }
  }
}