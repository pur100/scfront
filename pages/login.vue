<template>
  <div class="container">
    <div>
        <br/>
        <input v-model="username" placeholder="username">
        <br/>
        <input v-model="password" placeholder="password" type="password">
        <br/>
        <input v-model="passwordRepeat" placeholder="repeat password" type="password">
        <br/>
        same passwords ?{{ samePasswords }}
        <br/>
        <button v-show="!loggedIn" @click="login">Submit</button>
        <button v-show="loggedIn" @click="logout">logout</button>

        <div style="max-width: 500px; margin: 0 auto">Are you logged ? {{ loggedIn }}</div>

        <div v-show="loggedIn">
          <div style="max-width: 500px; margin: 0 auto">Hello {{ userData.email }} :)</div>
          <div style="max-width: 500px; margin: 0 auto">your ID is {{ userData.id }}</div>
          <div style="max-width: 500px; margin: 0 auto">and you were created {{ userData.created_at }}</div>
        </div>

        <h1>STATE COUNTER : {{ counter }}</h1>
        <div style="height: auto; width: 300px; background-color:pink" >
            <button @click="toggleText"><span v-if="!isActive">SEE</span><span v-else >UNSEE</span></button>
            <transition name="fade">
              <div v-show="isActive" ><h1>I have been toggled</h1></div>
            </transition>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .active {
    color: yellow;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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

.container {
  margin: 0 auto;
  min-height: 100vh;
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
