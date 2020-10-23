// import actions from "actions"
import VuexPersistence from 'vuex-persist'

function getPlugins() {
    let plugins = []

    if (process.browser) {
        const vuexLocal = new VuexPersistence({
          storage: window.localStorage
        })

        plugins.push(vuexLocal.plugin)
    }
}

export const plugins = getPlugins()

export const state = () => ({
  counter: 0,
  ip: "ok",
  csrf_token: "token",
  result_log_out: "test",
  user: "user data"
})

export const actions= {
  async getIP ({ commit }) {
    const ip = await this.$axios.$get('http://icanhazip.com')
    commit('SET_IP', ip)
  },
  async login ({ commit }, values) {
    console.log("store values : ")
    console.log(values)
    // logIn(values)
    const result = await this.$axios.$post('http://localhost:3000/login',{
      email: values.username,
      password: values.password,
    })
    console.log(result)
    commit('SET_CSRF_TOKEN', result.session.access)
    commit('SET_USER', result.user)
    commit('increment')
    // if (result.session.access) {
    //   window.location = "/dashboard"
    //   return
    // }
    // do something for errrors
  },
  async getUserData ({ commit, state }) {
    console.log(state.csrf_token)
    const result = await this.$axios.$get('http://localhost:3000/users/1',{
      headers: {Authorization: "Bearer " + state.csrf_token}
    })
    commit('SET_RESULT', result)
    console.log(result)
  },
  async signup ({ commit }, values) {
    console.log("store values : ")
    console.log(values)
    // logIn(values)
    const result = await this.$axios.$post('http://localhost:3000/users',{
      email: values.username,
      password: values.password,
      password: values.password_confirmation
    })
    commit('SET_CSRF_TOKEN', result.access)
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  SET_RESULT(state,result) {
    state.result_log_out = result
  },
  SET_IP(state,ip) {
    state.ip = ip
  },
  SET_CSRF_TOKEN(state,token) {
    state.csrf_token = token
  },
  SET_USER(state,user) {
    state.user = user
  }
}
