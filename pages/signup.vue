
<template>
  <div class="container" style="min-height: 84vh;">
    <div>
        <h3>Enregistrez-vous afin de bénéficier de nos services :</h3>
        <h6 style="margin-top: 10px">Vous avez déjà un compte ? <a href="/login" style="text-decoration: underline!important">Connectez-vous!</a></h6>
        <br>
        <div class="signupform" style="width: 360px;margin: 0 auto;">
          <div class="signup_row">
            <input v-model="first_name" required placeholder="Prénom">
            <input v-model="last_name" required placeholder="Nom">
          </div>

          <div class="full_row">
            <input style="width:94%;"v-model="company_name" required placeholder="Entreprise">
          </div>


          <div class="signup_row">
            <input v-model="siret" required placeholder="SIREN">
            <input v-model="tel" placeholder="Téléphone">
          </div>

          <div class="full_row">
            <input style="width:94%;"v-model="username" required placeholder="E-mail">
          </div>
          <input v-model="password" required placeholder="password" type="password">
          <input v-model="passwordRepeat" required placeholder="repeat password" type="password">
          <br>
          <br>
          <button class="side_buttons" @click="createUser">Créez votre compte</button>
        </div>
        <h1 class="errors" style="display: none;">{{ errors }}</h1>

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
    passwordLength() { return this.password.length > 5},
    errors() { return this.$store.state.errors }
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
