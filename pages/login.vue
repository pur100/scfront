<template>
  <div class="login_container" style="flex-direction: column;">
    <div class="log_message" style="width: 30%; margin: 0 auto;">
      <h4>Veuillez vous connecter afin d'accéder à votre compte et suivre l'état de vos créances.</h4>
      <h6 style="margin-top: 10px">Pas de compte ? <a href="/signup" style="text-decoration: underline!important">Enregistrez-vous!</a></h6>
    </div>

    <div>
        <br/>
        <input v-model="username" placeholder="Identifiant">
        <br/>
        <input v-model="password" placeholder="Mot de passe" type="password">
        <br/>
        <br/>
        <br/>
        <button class="side_buttons" @click="login">Connexion</button>



        <h1 class="errors" style="display: none;">{{ errors }}</h1>

      </div>



    </div>
  </div>
</template>

<style>
  .active {
    color: yellow;
  }


</style>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      ip: "coucou",
      username: "",
      password: "",
      passwordRepeat: "",
      isActive: false
    }
  },
  computed: {
    userData() { return this.$store.state.user },
    errors() { return this.$store.state.errors },
    counter() { return this.$store.state.counter },
    loggedIn() { return this.$store.state.logged_in },
    samePasswords() { return this.password === this.passwordRepeat },
    passwordLength() { return this.password.length > 5}
  },
  methods: {
    toggleText: function() {
      this.isActive = !this.isActive;
      // some code to filter users
    },
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      this.ip = ip
      this.$store.commit('SET_IP', ip)
    },
    async logout() {
      await this.$store.dispatch('logout')
    },
    async login() {
      // if(!this.samePasswords){
      //   alert('passwords are different')
      //   return
      // }else if(!this.passwordLength){
      //   alert('password too short')
      //   return
      // }
      const credentials = await this.$store.dispatch('login', {username: this.username,password: this.password})

    }
  }
}
</script>

<style>

input{
  margin:10px;
  padding:4px;
}


.login_container {
  min-height: 83vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
