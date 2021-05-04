<template>
  <div class="dashboard" style="flex-direction: column;">
  <div class="greetings">
    <h2 style="text-align:left;">Bonjour {{user_data.first_name}} !</h2>
    <h5>Bienvenue dans votre espace client, ici vous pouvez suivre l'avancée de vos recouvrements ainsi que communiquer de nouvelles factures à nos équipes.</h5>
  </div>

  <div  class="first_invoice">
    <button class="side_buttons" @click="front_logout()">Se déconnecter</button>
    <button class="side_buttons" @click="$refs.newInvoice.openModal()">
      <span v-if="userInvoices.length === 0">Ajoutez votre première facture</span>
      <span v-else>Nouvelle facture</span>
    </button>
  </div>

  <div class="invoices_list" v-if="userInvoices.length > 0" style="margin: 0 auto">
    <table>
       <thead>
         <tr class="table_header">
           <th @click="sort('id')">Numéro de dossier<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="10px" height="10px" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;"
   xml:space="preserve">
<g>
  <g>
    <path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847
      c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331
      c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/>
    <path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847
      c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906
      c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/>
  </g>
</g>

</svg></th>
           <th @click="sort('amount')">Montant <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="10px" height="10px" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;"
   xml:space="preserve">
<g>
  <g>
    <path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847
      c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331
      c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/>
    <path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847
      c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906
      c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/>
  </g>
</g>

</svg></th>
           <th @click="sort('created_at')">Date d'envoi <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="10px" height="10px" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;"
   xml:space="preserve">
<g>
  <g>
    <path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847
      c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331
      c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/>
    <path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847
      c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906
      c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/>
  </g>
</g>

</svg></th>
           <th @click="sort('status')">Statut <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="10px" height="10px" viewBox="0 0 401.998 401.998" style="enable-background:new 0 0 401.998 401.998;"
   xml:space="preserve">
<g>
  <g>
    <path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847
      c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331
      c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/>
    <path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847
      c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906
      c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/>
  </g>
</g>

</svg></th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="invoice in sortedInvoices">
           <td>{{ invoice.reference ? invoice.reference : "-" }} {{invoice.id}}</td>
           <td>{{ invoice.amount}}</td>
           <td>{{ invoice.created_at}}</td>
           <td style="" :class="['invoice_status',invoice.status]">
            <span class="circle" style="">
              <svg style="padding-top: 3px;"width="10px" height="10px" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">

                <circle   :class="['invoice_status',invoice.status]" cx="3" cy="3" r="3" />

              </svg>
            </span>
           {{ invoice.status}}</td>
           <td class="action_links">
              <a :href="invoice.file" target="_blank">
                <svg  class="pop" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 488.85 488.85" style="width: 24px;height: 26px;enable-background:new 0 0 488.85 488.85;" xml:space="preserve">
                <g>
                  <path d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
                    s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
                    c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
                    C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
                    c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"/>
                </g>

                </svg>
             </a>
              <div v-if="invoice.status === 'En attente' " style="cursor: pointer; "  class="destroy" @click="deleteInvoice"><svg class="wizz" :data-id="invoice.id" id="Layer_1" enable-background="new 0 0 512 512" height="22" viewBox="0 0 512 512" width="22" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"/><path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"/></g></svg>
              </div>
            </td>
         </tr>
       </tbody>
     </table>
     <p>
      <svg  @click="prevPage" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12px" height="12px"
         viewBox="0 0 443.52 443.52" style="cursor:pointer; enable-background:new 0 0 443.52 443.52;" xml:space="preserve">
      <g>
        <g>
          <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
            c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
            L143.492,221.863z"/>
        </g>
      </g>
      </svg>
     <span>Page {{currentPage}} sur {{ Math.ceil(userInvoices.length / pageSize) }}</span>
     <svg   @click="nextPage" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 240.823 240.823" width="12px" height="12px" style="cursor:pointer; enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
     <g>
      <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
        l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
        C187.881,124.315,187.881,116.495,183.189,111.816z"/>

     </g>
     </svg>
     </p>
</div>



  <modal ref="newInvoice">
     <template v-slot:header>
       <h1>Nouvelle facture :</h1>
     </template>
     <template v-slot:body>
       <form action="" v-on:submit.prevent>
        <div class="new_invoice_row">
           <label for="amount">Montant de la facture*</label>
           <input required v-model="amount" placeholder="" name="amount" type="number">
        </div>
        <div class="new_invoice_row">
          <label for="invoice">Facture au format .pdf*</label>
           <input required v-on:change="uploadFile" type="file" name="invoice_file" placeholder="facture.pdf">
        </div>
        <div class="new_invoice_row">
          <label for="invoice">E-mail du contact</label>
           <input   type="email" v-model="new_debtor_mail" name="new_debtor_mail" placeholder="contact@email.fr">
        </div>
        <div class="new_invoice_row">
          <label for="invoice">Téléphone du contact</label>
           <input type="tel" v-model="new_debtor_tel" name="new_debtor_tel" placeholder="06 63 47 29 66">
        </div>
           <h6 class="invoice_disclaimer">"Afin de permettre un traitement optimal de vos dossiers merci de nous transmettre des coordonnées fonctionnelles"</h6>

           <div>
              <button class="side_buttons" id="close_modal" @click="$refs.newInvoice.closeModal()">Annuler</button>

             <button class="valid side_buttons" @click="createInvoice">Envoyer</button>

           </div>
       </form>
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
      user_data: this.$store.state.user,
      access_expiring_date: this.$store.state.access_expiring_date,
      userInvoices: [],
      user_info: "",
      amount: 0,
      invoice_file: null,
      new_debtor_tel: "",
      new_debtor_mail: "",
      currentSort:'created_at',
      currentSortDir:'desc',
      pageSize:6,
      currentPage:1,
      isActive: true,
      formIsValid: false
    }
  },
  components: {
    Modal
  },
  created() {
    console.log('created')

  },
  mounted () {
    this.userInvoices = this.$store.state.user_invoices
    var d1 = new Date()
    var d2 = new Date(this.$store.state.access_expiring_date)
    var d3 = new Date(d2.getTime() - 600000)
    if (d1.getTime() >= d3.getTime()) {
      console.log("needs logout")
      const flushing = this.$store.dispatch('front_logout')
    }
  },
  computed: {
    userData() { return this.$store.state.user },
    sortedInvoices:function() {
        return this.userInvoices.sort((a,b) => {
          let modifier = 1;
          if(this.currentSortDir === 'desc') modifier = -1;
          if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
          }).filter((row, index) => {
          let start = (this.currentPage-1)*this.pageSize;
          let end = this.currentPage*this.pageSize;
          if(index >= start && index < end) return true;
        });
      }
      },
  methods: {
    nextPage:function() {
      if((this.currentPage*this.pageSize) < this.userInvoices.length) this.currentPage++;
    },
    prevPage:function() {
      if(this.currentPage > 1) this.currentPage--;
    },
    formValid: function () {
      if (this.amount.length > 0 && this.invoice_file.length !== null) {
        this.formIsValid = true
      }
    },
    sort:function(s) {
        //if s == current sort, reverse
        if(s === this.currentSort) {
          this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
        }
        this.currentSort = s;
      },

    async refresh(){
      const refreshed = await this.$store.dispatch('refreshTokens')
    },
    async front_logout(){
      const refreshed = await this.$store.dispatch('front_logout_bis')
    },
    uploadFile(event) {
      this.inputInvoice = event.target.files[0]
      console.log(this.inputInvoice)
    },
    async deleteInvoice(event) {
      console.log( event.target.parentNode.parentNode.dataset.id)
      const result = await this.$axios.$delete(this.$store.state.test_url + "invoices/" + event.target.parentNode.parentNode.dataset.id)
      console.log(result)

      if(result) {
        const update = await this.$store.dispatch('getUserData', this.user_id)
        this.userInvoices = this.$store.state.user_invoices

      }

    },
    async createInvoice(){
      var d1 = new Date()
      var d2 = new Date(this.$store.state.access_expiring_date)
      var d3 = new Date(d2.getTime() - 600000)
      if (d1.getTime() >= d3.getTime()) {
        console.log("needs logout")
        const flushing = this.$store.dispatch('front_logout')
      }
      const params = {
              'amount': this.amount,
              'user_id': this.user_id,
              'picture': this.inputInvoice,
              'tel': this.new_debtor_tel,
              'email': this.new_debtor_mail
            }
      let formData = new FormData()

      Object.entries(params).forEach(
        ([key, value]) => formData.append(key, value)
      )


      // Finally, sending the POST request with our beloved Axios
      const result = await this.$axios.$post(this.$store.state.test_url + "invoices" ,formData)
      if(result) {
        const update = await this.$store.dispatch('getUserData', this.user_id)
        this.userInvoices = this.$store.state.user_invoices
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
