<template>
  <div class="container">


  <div style="margin: 0 auto">
      <h1>DASHBOARD</h1>
      <div style="width: calc(80vw - 40px); margin: 40px; padding: 20px;">
        <div class="" style="display: flex; justify-content: space-between; ">
          <h3>Mes Factures</h3>
          <button @click="$refs.newInvoice.openModal()">Nouvelle facture</button>
        </div>
        <div class="invoices">
          <div v-for="invoice in userInvoices" class="invoice" style="display: flex;justify-content: space-between;">
            <h4>{{ invoice.amount }}</h4>
            <h4>{{ invoice.id }}</h4>
            <h4>{{ invoice.created_at }}</h4>
            <a :href="invoice.file">see file</a>
          </div>
        </div>
      </div>
  </div>

  <h1>modal ?</h1>

  <modal ref="newInvoice">
     <template v-slot:header>
       <h1>Nouvelle facture:</h1>
     </template>

     <template v-slot:body>
       <label for="amount">Montant de la facture</label>
       <input v-model="amount" placeholder="" name="amount">
       <br>
      <label for="invoice">Facture au format .pdf</label>
       <input v-on:change="invoice_file" type="file" name="invoice_file" placeholder="facture.pdf">
       <br>
     </template>

     <template v-slot:footer>
       <div>
         <button @click="$refs.modalName.closeModal()">Cancel</button>
         <button @click="$refs.modalName.closeModal()">Save</button>
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
      user_info: ""
    }
  },
  components: {
    Modal
  },
  created() {
    console.log('created')
  },
  computed: {
    userData() { return this.$store.state.user },
    userInvoices() { return this.$store.state.user_invoices }
  },
  methods: {
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
