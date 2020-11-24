<template>
  <div class="container" id="tarif_container">
    <div class="tarifs_block">
      <h1>Nos Tarifs</h1>
      <div>
      <h3>Il est important pour nous que nos tarifs soient clairs et transparents.</h3>
      <h3>Nous nous rémunérons uniquement sur les montants que nous parvenons à récupérer.</h3>
      <h3>Il ne vous sera facturé aucun frais caché.</h3>
      <h3>Notre commission est calculée sur la base d’un pourcentage unique de <strong>10%</strong> se rapportant au montant TTC de votre facture impayée.</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    components: {
    },
    data() {
      return {

      }
    },
    computed: {

    },
    methods: {

      }
    }
</script>

<style>
#tarif_container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  text-align: center
}
</style>
