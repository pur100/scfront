<template>
  <div class="container" style="flex-direction: column;">
    {{user_id}}
    <h1>hello</h1>
    {{access_expiring_date}}
    {{access_expiring_date}}

  <button @click="getUserData(user_id)">get data</button>
  <div style="margin: 0 auto">
      <div style="width: calc(80vw - 40px); margin: 40px; padding: 20px;">
        <div class="" style="display: flex; justify-content: space-between; ">
          <h3>ID</h3>
          <h3>Montant</h3>
          <h3>Date d'envoi</h3>
          <h3>Statut</h3>
          <button @click="$refs.newInvoice.openModal()">Nouvelle facture</button>
        </div>
        <div v-if="userInvoices.length >= 1" class="invoices">
          <div v-for="invoice in userInvoices" class="invoice" style="display: flex;justify-content: space-between;">
            <h4>{{ invoice.id }}</h4>
            <h4>{{ invoice.amount }}</h4>
            <h4>{{ invoice.created_at }}</h4>
            <h4>{{ invoice.status }}</h4>
            <div class="links">
              <a :href="invoice.file" target="_blank"><img width="22px" src="https://freeiconshop.com/wp-content/uploads/edd/eye-outline.png" alt=""></a>
              <div :data-id="invoice.id" class="destroy" @click="deleteInvoice">Destroy</div>
            </div>
          </div>
        </div>
      </div>
  </div>

  <h1 @click="refresh">refresh</h1>


  <modal ref="newInvoice">
     <template v-slot:header>
       <h1>Nouvelle facture:</h1>
     </template>

     <template v-slot:body>
       <label for="amount">Montant de la facture</label>
       <input v-model="amount" placeholder="" name="amount">
       <br>
      <label for="invoice">Facture au format .pdf</label>
       <input v-on:change="uploadFile" type="file" name="invoice_file" placeholder="facture.pdf">
       <br>
       {{amount}}
       invoice_file => {{invoice_file}}
     </template>

     <template v-slot:footer>
       <div>
         <button id="close_modal" @click="$refs.newInvoice.closeModal()">Cancel</button>
         <button @click="createInvoice">Save</button>
       </div>
     </template>
   </modal>




</div>
</template>

<script>

import { mapMutations } from 'vuex'
import Modal from "@/components/Modal";

export default {
  data() {
    return {
      user_id: this.$store.state.user.id,
      user_data: this.$store.state.user.data,
      access_expiring_date: this.$store.state.access_expiring_date,
      user_info: "",
        amount: 0,
      invoice_file: null
    }
  },
  components: {
    Modal
  },
  created() {
    console.log('created')

  },
  mounted () {

  },
  computed: {
    userData() { return this.$store.state.user },
    userInvoices() { return this.$store.state.user_invoices },

      },
  methods: {
    async refresh(){
      const refreshed = await this.$store.dispatch('refreshTokens')
    },
    uploadFile(event) {
      this.inputInvoice = event.target.files[0]
      console.log(this.inputInvoice)
    },
    async deleteInvoice(event) {

      const result = await this.$axios.$delete('http://localhost:3000/invoices/'+ event.target.dataset.id)
      console.log(result)
      await this.$store.dispatch('getUserData', this.$store.state.user_id)

    },
    async createInvoice(){
      const params = {
              'amount': this.amount,
              'user_id': this.user_id,
              'picture': this.inputInvoice
            }
      let formData = new FormData()

      Object.entries(params).forEach(
        ([key, value]) => formData.append(key, value)
      )

      // Finally, sending the POST request with our beloved Axios
      const result = await this.$axios.$post('http://localhost:3000/invoices',
        formData)
      if(result) {
        await this.$store.dispatch('getUserData', this.$store.state.user_id)
        document.getElementById('close_modal').click()
      }

    },
    async getUserData(user_id) {

      const get_user_data = await this.$store.dispatch('getUserData', user_id)
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
