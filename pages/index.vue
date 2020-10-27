<template>
  <div class="container">
    <div class="home_banner">
      <div class="content">
        <div class="titles">
          <h1 class="title">En finir avec vos</h1>
          <h1 class="title">factures impayées.</h1>
        </div>
        <div class="buttons">
          <button>Prendre Rendez-vous</button>
          <button>Contactez-nous</button>
        </div>
      </div>
    </div>
     <div class="home_info" >
      <div class="info_block" id="first">
        <div class="wrapper">
          <div class="logo">logo</div>
          <div class="text_block">
            <h3 class="title">Chaque créance <br>sa solution</h3>
            <p class="text">Courir derrière vos clients afin d’obtenir le règlement de vos factures devient vite une activité contre-productive. Chez Solution Créance nous pensons que chaque impayé a sa solution. C’est pourquoi nous mettons notre expérience du recouvrement amiable à votre service.</p>
          </div>
        </div>
      </div>
      <div class="info_block" id="second">
        <div class="wrapper">
          <div class="logo">logo</div>
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
    <div class="home_form" style="background-color: pink; height: 80vh;">

    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        isActive: true
      }
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
