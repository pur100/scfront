<template>
  <div class="container">
    <div class="home_banner">
      <div class="content">
        <div class="titles">
          <h1 class="title">En finir avec vos</h1>
          <h1 class="title">factures impayées.</h1>
        </div>
        <div class="buttons">
          <button  class="side_buttons" @click="scrollMeTo('signup_form')">Créez votre compte</button>
          <button class="side_buttons" ><router-link to="/tarifs">Consultez nos tarifs</router-link></button>
        </div>
      </div>
    </div>
     <div class="home_info" >
      <div class="info_block" id="first">
        <div class="wrapper">
            <div id="picto_left">
               <svg xmlns="http://www.w3.org/2000/svg" width="101.013" height="119" viewBox="0 0 101.013 119">
                 <g id="Groupe_27" data-name="Groupe 27" transform="translate(-12405 -10505)">
                   <rect id="Rectangle_70" data-name="Rectangle 70" width="86" height="119" transform="translate(12405 10505)" fill="#fff"/>
                   <path id="Trace_133" data-name="Trace 133" d="M5028,5675.31l34.732,34.732" transform="translate(7392.997 4881.075)" fill="none" stroke="#122746" stroke-width="21"/>
                   <path id="Trace_140" data-name="Trace 140" d="M5055.316,5710.042l57.689-57.689" transform="translate(7385.583 4881.075)" fill="none" stroke="#122746" stroke-width="21"/>
                 </g>
               </svg>
             </div>
          <div class="text_block">
            <h3 class="title">Chaque créance <br>a sa solution</h3>
            <p class="text">Courir derrière vos clients afin d’obtenir le règlement de vos factures devient vite une activité contre-productive. Chez Solution Créance nous pensons que chaque impayé a sa solution. C’est pourquoi nous mettons notre expérience du recouvrement amiable à votre service.</p>
          </div>
        </div>
      </div>
      <div class="info_block" id="second">
        <div class="wrapper">
            <div id="picto_right">
              <svg xmlns="http://www.w3.org/2000/svg" width="98" height="119" viewBox="0 0 98 119">
                <g id="Groupe_20" data-name="Groupe 20" transform="translate(-99 -1046)">
                  <rect id="Rectangle_71" data-name="Rectangle 71" width="86" height="119" transform="translate(105 1046)" fill="#fff"/>
                  <g id="Ellipse_7" data-name="Ellipse 7" transform="translate(99 1057)" fill="none" stroke="#122746" stroke-width="21">
                    <circle cx="49" cy="49" r="49" stroke="none"/>
                    <circle cx="49" cy="49" r="38.5" fill="none"/>
                  </g>
                </g>
              </svg>
            </div>
          <div class="text_block">
            <h3 class="title">Identifier l'origine <br>de l'impayé</h3>
            <p class="text">À l’issu de chaque dossier, vous recevrez un rapport de prévention du risque révélant les raisons du retard de paiement et les solutions à mettre en place afin d’éviter toute récidive.</p>
          </div>
        </div>
      </div>
    </div>
     <div class="home_us" >
      <div class="wrapper">
        <div class="who">
          <h3 class="title">Qui Sommes Nous ?</h3>
          <h1 class="minus" @click="toggleText">
            <transition name="fade">
              <span v-if="isActive">-</span>
              <span v-else >+</span>
            </transition>
          </h1>
        </div>
        <transition name="fade">
          <div v-show="isActive" class="content flex between align-center">
            <p id="first">Experts du recouvrement amiable nous mettons tout notre savoir-faire au service de vos créances. Il ne s’agit pas simplement de prendre le relais sur la relance téléphonique et l’envoi de courriers de relances. Nous souhaitons obtenir le règlement de vos factures impayées tout en préservant la relation commerciale qui s’est construite avec votre client débiteur. Solution Créance vous permet de comprendre d’où provient l’origine du retard de paiement dans le but de vous aider à pérenniser vos prochaines collaborations.</p>
            <p id="second">Nous confier vos créances, c’est vous soulager de leur gestion et profiter de l’impact de notre intervention pour obtenir leurs régularisations.</p>
          </div>
      </transition>
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
              <div class="input_full flex dir_column around">
                 <label for="email">Télephone</label>
                 <input v-model="phone" placeholder="">
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
            <p class="disclaimer">* Les données contenues dans ce formulaire sont utilisées uniquement pour nous permettre de prendre contact avec vous.
            Elles ne sont en aucun cas transférées ou cédées à un tiers et sont effacées sitôt le contact est établi ou au bout d’un mois.</p>
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
            <div class="modal_content" ref="message_modal_content">
              <div class="loading" ref="message_loader" v-if="waitingResponse">
                <img :src="'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'">
              </div>
              <div class="answer" v-else>
                <div class="success" v-if="response_contact.id">
                  <h3>Merci {{ response_contact.first_name }} !</h3>
                  <p>Votre message a bien été envoyé, et nous rentrerons très prochainement en contact avec vous.</p>
                </div>
                <div class="failure" v-else>
                  <h3>Oups, il y a eu une erreur</h3>
                  <p>Veuillez nous contacter ultérieurement, si le problème persiste, contactez nous directement à l'adresse suivante : contact@solutioncreance.fr</p>
                </div>
              </div>
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
        waitingResponse: true,
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
        phone: "",
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
          var top = element.offsetTop;


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
        if (this.siren.length > 7 && this.company_name.length > 0 && this.first_name.length > 0 && this.last_name.length > 0 && this.email.length > 0) {
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
          console.log(response)
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
              phone: this.phone,
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

          if (response) {
            this.waitingResponse = false
          }

          this.response_contact = response

          this.email = ""
          this.phone = ""
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
