<template>
  <div class="container" id="tarif_container">
    <div class="charte_block_full">
      <div class="wrap">
        <p class="title">La charte déontologique<br>du recouvrement amiable</p>

        <div class="text">
-
          <p class="p4"><span class="s1"><strong>Solution cr&eacute;ance garantit &agrave; ses clients :</strong></span></p>
          <p class="p3"><br></p>
          <ol class="ol1">
              <li class="li4"><span class="s1">La comp&eacute;tence et la moralit&eacute; de leurs collaborateurs.</span></li>
              <li class="li4"><span class="s1">Avoir souscrit une assurance en responsabilit&eacute; civile et professionnelle.</span></li>
              <li class="li4"><span class="s1">L&apos;ouverture d&apos;un compte affect&eacute; &agrave; la r&eacute;ception des fonds provenant du recouvrement des cr&eacute;ances.</span></li>
              <li class="li4"><span class="s1">La d&eacute;claration d&rsquo;activit&eacute; au Procureur de la R&eacute;publique.</span></li>
              <li class="li4"><span class="s1">L&apos;application de tarifs et conditions claires.</span></li>
              <li class="li4"><span class="s1">Des comptes rendus r&eacute;guliers.</span></li>
              <li class="li4"><span class="s1">Les reversements des sommes disponibles dans les d&eacute;lais convenus.</span></li>
              <li class="li4"><span class="s1">La confidentialit&eacute; des informations communiqu&eacute;es.</span></li>
          </ol>
          <p class="p3"><br></p>
          <p class="p4"><span class="s1"><strong>Solution Cr&eacute;ance s&apos;engage &agrave; l&apos;&eacute;gard des d&eacute;biteurs &agrave; :</strong></span></p>
          <p class="p3"><br></p>
          <ol class="ol1">
              <li class="li4"><span class="s1">S&apos;identifier, clairement et sans ambigu&iuml;t&eacute;.</span></li>
              <li class="li4"><span class="s1">Utiliser un langage simple et compr&eacute;hensible.</span></li>
              <li class="li4"><span class="s1">Respecter les personnes et leur vie priv&eacute;e.</span></li>
              <li class="li4"><span class="s1">Ne r&eacute;clamer que le montant des sommes contractuellement et l&eacute;galement dues.</span></li>
              <li class="li4"><span class="s1">Pr&eacute;venir les d&eacute;biteurs avant toute instance judiciaire.</span></li>
              <li class="li4"><span class="s1">R&eacute;pondre aux demandes d&apos;informations des clients sur leurs cr&eacute;ances.</span></li>
              <li class="li4"><span class="s1">Rechercher, si possible, un accord amiable.</span></li>
              <li class="li4"><span class="s1">Fournir une quittance pour tout paiement.</span></li>
          </ol>
        </div>
      </div>
    </div>

    <div class="home_form" ref="signup_form" id="signup_form">
      <div class="left">
        <p class="text">Augmenter votre trésorerie /<br> Diminuer le poids des impayés.</p>
        <div id="sc_logo">
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 55 80" style="enable-background:new 0 0 55 80;" xml:space="preserve">
          <style type="text/css">
            .st0, .st1{fill:none;stroke:#D9FFC7;stroke-width:11;stroke-miterlimit:10;}
          </style>
          <g>
            <g>
              <path class="st0" d="M27.5,48c-11,0-20-9-20-20s9-20,20-20s20,9,20,20"/>
            </g>
            <g>
              <path class="st1" d="M27.5,32c11,0,20,9,20,20s-9,20-20,20s-20-9-20-20"/>
            </g>
          </g>
          </svg>
        </div>
      </div>
      <div class="right">
        <p class="text">Rien de plus simple ! Créez votre compte en remplissant votre formulaire de renseignement, vous pourrez ensuite nous transmettre votre facture impayée par email et nous déléguer la gestion de son recouvrement. Le dépôt de votre facture est gratuit, nous nous rémunérons uniquement à la réussite.</p>
        <div class="form">
         <form action="" v-on:keydown="formValid" >
                 <div class="flex between input_block">
                   <div class="input_group flex dir_column around">
                     <label for="first_name">Prénom*</label>
                     <input v-model="first_name" placeholder="" required>
                   </div>
                   <div class="input_group flex dir_column around">
                     <label for="last_name">Nom*</label>
                     <input v-model="last_name" placeholder="" required>
                   </div>
                 </div>
                 <div class="flex between input_block">
                   <div class="input_full flex dir_column around">
                      <label for="email">Email*</label>
                      <input v-model="email" placeholder="" required>
                   </div>
                 </div>
                 <div class="flex between input_block">
                   <div class="input_group flex dir_column around relative">
                     <label for="siret">SIREN*</label>
                     <input v-model="siren" placeholder="" required>
                     <a @click.prevent="getCompany(), $refs.sirenModal.openModal()" class="sirencall absolute" v-if="siren.length > 0" href="">Vérifier le siren</a>
                   </div>
                   <div class="input_group flex dir_column around">
                     <label for="company_name">Raison Sociale*</label>
                     <input v-model="company_name" placeholder="" required>
                   </div>
                 </div>
                   <div class="flex between input_block">
                     <div class="input_full flex dir_column around">
                       <label for="message">Message</label>
                       <input class="message" v-model="message" placeholder="">
                     </div>
                   </div>
                   <div class="flex between input_block">
                     <button v-show="formIsValid" class="valid" @click.prevent="sendMessage(), $refs.messageModal.openModal()" type="submit">ENVOYER</button>
                     <button v-show="!formIsValid" class="notValid">ENVOYER</button>
                   </div>
                 </form>
          </div>
        </div>
      </div>
      <modal ref="sirenModal">
         <template v-slot:header>
           <h1 v-if="companies_array[0]" class="" style="color:#0E1B30">Validez votre entreprise:</h1><div> </div>
         </template>

         <template v-slot:body>
           <div class="etablissements flex around" v-if="companies_array[0]">
             <div class="etablissement" v-on:click="select($event)" v-for="etablissement in companies_array">
               <h3 class="company_name">{{ etablissement.uniteLegale.denominationUniteLegale }}</h3>
               <h6 class="company_address">{{ etablissement.adresseEtablissement.numeroVoieEtablissement }} {{ etablissement.adresseEtablissement.libelleVoieEtablissement }}</h6>
               <h6 class="company_zip">{{ etablissement.adresseEtablissement.codePostalEtablissement }}</h6>
               <h6 class="company_city">{{ etablissement.adresseEtablissement.libelleCommuneEtablissement }}</h6>
               <h6 class="company_siret none">{{ etablissement.siret }}</h6>
             </div>
           </div>
           <div class="failure" v-else>
            <h3>Désolé, mais nous ne retrouvons pas votre code SIREN...</h3>
            <p>Ce n'est pas grave, vous pouvez quand même nous envoyer votre message et nous vérifirons personnellement vos informations.</p>
           </div>
         </template>

         <template v-slot:footer>
           <div>
             <button class="side_buttons" @click="cancelCompany(), formValid(),$refs.sirenModal.closeModal()">Cancel</button>
             <button class="side_buttons" v-if="companies_array[0]" @click="saveCompany(), formValid(),$refs.sirenModal.closeModal()">Save</button>
           </div>
         </template>
       </modal>
       <modal ref="messageModal">
          <template v-slot:header>
            <div> </div>
          </template>

          <template v-slot:body>
              <div class="success" v-if="response_contact.id">
                <h3>Merci {{ response_contact.first_name }} !</h3>
                <p>Votre message a bien été envoyé, et nous rentrerons très prochainement en contact avec vous.</p>
              </div>
              <div class="failure" v-else>
                <h3>Oups, il y a eu une erreur</h3>
                <p>Veuillez nous contacter ultérieurement, si le problème persiste, contactez nous directement à l'adresse suivante : leny@solutioncreance.fr</p>
              </div>
          </template>

          <template v-slot:footer>
          </template>
        </modal>
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
        company_name: "",
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
      scrollMeTo(refName) {
          var element = this.$refs[refName];
          var top = element.offsetTop ;


          window.scrollTo({
            top: top,
            behavior: 'smooth',
          });
        },
        toggleText: function() {
          this.isActive = !this.isActive;
          // some code to filter users
        },
        formValid: function () {
          if (this.siren.length > 7 && this.first_name.length > 0 && this.last_name.length > 0 && this.email.length > 0) {
            this.formIsValid = true
          }
        },
          async getCompany() {
            console.log(this.siren.replace(/[\s\/]/g, ''))
            const url = "https://api.insee.fr/entreprises/sirene/V3/siret?q=siren:" + this.siren.replace(/[\s\/]/g, '')
            const response = await this.$axios.$get(url,{
                  headers: {Authorization: "Bearer " + "3b9c2bc8-35b8-3273-9fec-490e3e009ba4"}
            })
            const companies_array = response.etablissements
            this.companies_array = companies_array
            const company_info = response.etablissements[0]
            this.company_info = company_info
            console.log(company_info)
            console.log(company_info.uniteLegale.denominationUniteLegale)
            console.log(company_info.adresseEtablissement.numeroVoieEtablissement + " " + company_info.adresseEtablissement.libelleVoieEtablissement )
            console.log(company_info.adresseEtablissement.codePostalEtablissement)
            console.log(company_info.adresseEtablissement.libelleCommuneEtablissement)

          },
          async sendMessage() {
            const url = "https://scbackapi.herokuapp.com/contacts"
            const response = await this.$axios.$post(url,{
                email: this.email,
                siren: this.siren,
                first_name: this.first_name,
                last_name: this.last_name,
                siret: this.company_siret,
                company_name: this.company_name,
                company_address: this.company_address,
                company_zip: this.company_zip,
                company_city: this.company_city,
                message: this.message
              })
            this.response_contact = response

            this.email = ""
            this.siren = ""
            this.first_name = ""
            this.last_name = ""
            this.company_siret = ""
            this.company_name = ""
            this.company_address = ""
            this.company_zip = ""
            this.company_city = ""
            this.message = ""
          },
          clearform() {
            this.email = ""
            this.siren = ""
            this.first_name = ""
            this.last_name = ""
            this.company_siret = ""
            this.company_name = ""
            this.company_address = ""
            this.company_zip = ""
            this.company_city = ""
            this.message = ""
          },
          saveCompany() {
            console.log("inside save Company")
          },
          cancelCompany() {
            console.log("inside cancel Company")
            this.company_siret = ""
            this.company_address = ""
            this.company_zip = ""
            this.company_city = ""
            this.company_siret = ""
          },
          select: function(event) {
                const e = event.currentTarget;
                const etas = document.getElementsByClassName("etablissement")
                for (var eta of etas) {
                    eta.classList.remove('focus')
                }
                e.classList.toggle('focus')
                this.company_address = e.getElementsByClassName("company_address")[0].innerHTML
                this.company_zip = e.getElementsByClassName("company_zip")[0].innerHTML
                this.company_city = e.getElementsByClassName("company_city")[0].innerHTML
                this.company_siret = e.getElementsByClassName("company_siret")[0].innerHTML
                this.company_name = e.getElementsByClassName("company_name")[0].innerHTML
          }
      }
    }
</script>

<style>

</style>
