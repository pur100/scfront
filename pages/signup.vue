<template>
  <div class="container">
    <div>
        <h1>signUp</h1>

        <input v-model="first_name" required placeholder="Prénom">
        <br/>

        <input v-model="last_name" required placeholder="Nom">
        <br/>

        <input v-model="company_name" required placeholder="Entreprise">
        <br/>

        <input v-model="siret" required placeholder="SIRET">
        <br/>


        <input v-model="tel" placeholder="Téléphone">
        <br/>

        <input v-model="username" required placeholder="E-mail">
        <br/>
        <input v-model="password" required placeholder="password" type="password">
        <br/>
        <input v-model="passwordRepeat" required placeholder="repeat password" type="password">
        <br/>
        {{ samePasswords }}
        <br/>
        <button @click="createUser">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: ""
    }
  },
  computed: {
    samePasswords() { return this.password === this.passwordRepeat },
    passwordLength() { return this.password.length > 5}
  },
  methods: {
    async getIP() {
      this.$store.dispatch('getIP')
    },
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      this.ip = ip
      this.$store.commit('SET_IP', ip)
    },
    async logout() {
      await this.$store.dispatch('logout')
    },
    async createUser() {
      if(!this.samePasswords){
        alert('passwords are different')
        return
      }else if(!this.passwordLength){
        alert('password too short')
        return
      }
      const credentials = await this.$store.dispatch('signup', {username: this.username,password: this.password, password_confirmation: this.passwordRepeat, first_name: this.first_name, last_name: this.last_name, company_name: this.company_name, siret: this.siret, tel: this.tel})
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
