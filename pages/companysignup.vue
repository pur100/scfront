<template>
  <div class="container">
    <div>
      <h1 class="title">
        Sign up
      </h1>
      <input v-model="username" placeholder="username">
      <br/>
      <input v-model="password" placeholder="password" type="password">
      <br/>
      <input v-model="passwordRepeat" placeholder="repeat password" type="password">
      <br/>
      same passwords ?{{ samePasswords }}
      <br/>
      <input v-model="siren" placeholder="SIREn de votre entreprise">

      <button @click="getCompany">Trouvez votre entreprise</button>

      <div v-for="etablissement in company_info.etablissements">

        <h3>Etablissement</h3>
        {{ etablissement.siren }}<br>
        {{ etablissement.uniteLegale.denominationUniteLegale }}<br>
        <span>{{ etablissement.adresseEtablissement.numeroVoieEtablissement }} {{ etablissement.adresseEtablissement.libelleVoieEtablissement }}</span>
        <br>
        <span>{{ etablissement.adresseEtablissement.codePostalEtablissement }}</span>
        <span>{{ etablissement.adresseEtablissement.libelleCommuneEtablissement }}</span>
      </div>
      <br>
    </div>

    <br>

    <h1>modal ?</h1>

    <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Open modal</button>

    <modal ref="modalName">
       <template v-slot:header>
         <h1>Modal title</h1>
       </template>

       <template v-slot:body>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id. Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</p>
         <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
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
import Modal from "@/components/Modal";

export default {
    components: {
      Modal
    },
    data() {
      return {
        username: "",
        siren: "Code SIREN",
        password: "",
        passwordRepeat: "",
        isActive: false,
        company_address: "Adresse de votre entreprise",
        company_zip: "Code postal",
        company_city: "Ville",
        company_info: ""
      }
    },
    computed: {
      loggedIn() { return this.$store.state.logged_in },
      samePasswords() { return this.password === this.passwordRepeat },
      passwordLength() { return this.password.length > 5}
    },
    methods: {
      toggleText: function() {
        this.isActive = !this.isActive;
        // some code to filter users
      },
      async getCompany() {
        console.log(this.siren)
        const url = "https://api.insee.fr/entreprises/sirene/V3/siret?q=siren:" + this.siren
        const company_info = await this.$axios.$get(url,{
      headers: {Authorization: "Bearer " + "f4a15e85-6a24-365d-bb84-bbc3b48ecc41"}
    })
        this.company_info = company_info
        console.log(company_info)
      }
    }
  }
</script>

<style>
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
