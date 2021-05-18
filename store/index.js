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
  live_url: "https://scbackapi.herokuapp.com/",
  test_url: "http://localhost:3000/",
  ip: "ok",
  csrf_token: "token",
  result_log_out: "test",
  user: "user data",
  user_invoices: "user invoices",
  access_expiring_date: "",
  errors: null,
  logged_in: false,
  allStatus: ["En attente", "En cours de traitement", "Créance recouvrée", "Fermée"]
})

export const actions= {
  async getIP ({ commit }) {
    const ip = await this.$axios.$get('http://icanhazip.com')
    commit('SET_IP', ip)
  },

  async login ({ commit, state }, values) {

    // logIn(values)
    // document.getElementsByClassName('loading_modal')[0].classList.add("visible")

    const result = await this.$axios.$post(state.live_url + "login",{
      email: values.username,
      password: values.password,
    })

    if(result.session) {
      commit('SET_CSRF_TOKEN', result.session.access)
      commit('SET_USER', result.user)
      commit('SET_EXPIRING_DATE', result.session.access_expires_at)
      commit('SET_USER_INVOICES', result.invoices)
      commit('increment')
      commit('LOGGED_IN', true)
      window.location = "/dashboard"
    } else {
      commit('SET_ERRORS', result.error_message)
      document.getElementsByClassName('errors')[0].classList.add("visible")
    }
    document.getElementsByClassName('loading_modal')[0].classList.remove("visible")

    // if (result.session.access) {
    //   window.location = "/dashboard"
    //   return
    // }
    // do something for errrors
  },
  async refreshTokens({ commit, state }) {
    const result = await this.$axios.$post('http://localhost:3000/refresh_by_access',{
      headers: {Authorization: "Bearer " + state.csrf_token}
    })
  },

  async front_logout({ commit, state}) {
      commit('CLEAN_STATE')
      commit('LOGGED_IN', false)
      setTimeout(function(){ window.location = '/login'; }, 3000);


  },
    async front_logout_bis({ commit, state}) {
      alert('Vous avez été déconnecté avec succès')
      commit('CLEAN_STATE')
      commit('LOGGED_IN', false)
      window.location = '/'

  },

  async logout ({ commit, state }) {
    // logIn(values)
    console.log("logging_out")

    commit('CLEAN_STATE')
    commit('LOGGED_IN', false)
    const result = await this.$axios.$delete(state.live_url + "login",
    {
      headers: {Authorization: "Bearer " + state.csrf_token}
    })

    window.location = '/login'
  },

  async getUserData ({ commit, state}) {
    const user_id = state.user.id

    const result = await this.$axios.$get(state.live_url + "users/" + user_id,{
      headers: {Authorization: "Bearer " + state.csrf_token}
    })
    commit('SET_RESULT', result)
    commit('SET_USER_INVOICES', result.invoices)
    console.log(result)
  },
  async signup ({ commit, state }, values) {
    document.getElementsByClassName('loading_modal')[0].classList.add("visible")


    // logIn(values)
    const result = await this.$axios.$post(state.live_url + "users",{
      email: values.username,
      password: values.password,
      password_confirmation: values.password_confirmation,
      first_name: values.first_name,
      last_name: values.last_name,
      company_name: values.company_name,
      tel: values.tel,
      company_siret: values.siret
    })

    if (result.session) {
      commit('SET_CSRF_TOKEN', result.session.access)
      commit('SET_USER', result.user)
      commit('SET_EXPIRING_DATE', result.session.access_expires_at)
      commit('SET_USER_INVOICES', result.invoices)
      commit('increment')
      commit('LOGGED_IN', true)
      if (result.session.access) {
      setTimeout(window.location = "/dashboard", 30000)
      }
    } else {
      commit('SET_ERRORS', result.error_message[0])
      document.getElementsByClassName('errors')[0].classList.add("visible")
    }

    document.getElementsByClassName('loading_modal')[0].classList.remove("visible")

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
  },
  SET_ERRORS(state,errors) {
    state.errors = errors
  },
  SET_EXPIRING_DATE(state, date_time) {
    state.access_expiring_date = date_time
  },
  SET_USER_INVOICES(state,user_invoices) {
    state.user_invoices = user_invoices
  },
  CLEAN_STATE(state) {
    state.user = ""
    state.ip = ""
    state.csrf_token = ""
    state.counter = 0
    state.errors = null
    state.access_expiring_date = ""
    state.user_invoices = null
    state.errors = null
    state.logged_in = false
  },
  LOGGED_IN(state, boolean) {
    state.logged_in = boolean
  }
}
