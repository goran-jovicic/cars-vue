import { authService } from './../services/AuthService'

export const AuthModule = {
  state: {
    user: null,
    err : '',
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
    }
  },
}