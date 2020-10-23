<template>
  <div class="container">
    <div style="margin: 0 auto">
    <div>
      <h1>DASHBOARD</h1>
        {{ this.$store.state.result_log_out }}
        CSRF TOKEN : {{ this.$store.state.csrf_token }}
        {{ this.$store.state.ip }}

    </div>
    <button @click="getUserData">Get User Data</button>
        {{ this.$store.state.ip }}
    </div>
    <div style="max-width: 500px; margin: 0 auto">{{ userData }}</div>
    State Counter :
  </div>


</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      user_id: "1",
      user_info: ""
    }
  },
  created() {
    console.log('created')

  },
  computed: {
    userData() {
      return this.$store.state.user
    }
  },
  methods: {
    async getUserData() {
      const get_user_data = await this.$store.dispatch('getUserData')
    },
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
