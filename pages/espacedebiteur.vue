<template>
  <div class="container" >
    <div id="ml_container">
      <div class="mentions_legales_block">
          <h2>
          Espace Débiteur
          </h2>

          <h4>Règlement par virement bancaire : </h4>
          <br>
          <p>Vous trouverez ci-dessous un exemplaire de notre RIB que vous pouvez télécharger en cliquant sur le lien.</p>
          <p>Lors de votre virement, pensez à renseigner le numéro de dossier en libellé. </p>
          <p>Ce numéro se trouve dans chacune de nos correspondance (courrier, email). </p>
          <br>

          <a class="rib_link" href="https://res.cloudinary.com/dpwhjxnci/image/upload/v1607158017/rib_v3ftzn.pdf" target="_blank">ICI NOTRE RIB EN .PDF</a>

          <br>
          <br>
          <br>

          <h4>Règlement par virement bancaire : </h4>
          <br>
          <p>En cas de règlement par chèque, merci de le mettre à l'ordre de <strong>SOLUTION CRÉANCE</strong> et de renseigner le numéro de dossier au dos du chèque. </p>
          <p>Celui-ci sera ensuite à nous envoyer par courrier à l'adresse suivante :</p>
          <br>
          <p><strong>Solution Créance</strong></p>
          <p>25, rue du Devidet </p>
          <p>45000 Orléans</p>
      </div>
    </div>
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
        isActive: true,
        activeCompany: false,
        formIsValid: false,
        sirenLength: "",
        siren: "",
        company_address: "Adresse de votre entreprise",
        company_zip: "Code postal",
        company_city: "Ville",
        company_info: "",
        company_name: "Nom de votre entreprise",
        company_siret: "SIRET de votre entreprise",
        first_name: "",
        last_name: "",
        email: "",
        message: "",
        companies_array: [],
        response_contact: "RESPONSE CONTACT"
      }
    },
    computed: {
      sirenLength() { return this.siren.length > 8 },
      first_nameLength() { return this.first_name.length > 0},
      last_nameLength() { return this.last_name.length > 0},
      emailLength() { return this.email.length > 0},
    },
    methods: {
        toggleText: function() {
          this.isActive = !this.isActive;
          // some code to filter users
        }
      }
    }
</script>

<style>
#ml_container {
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
