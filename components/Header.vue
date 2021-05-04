<template>
  <nav class="nav" style="position: relative;" v-bind:class="{ menuBurger: activeMenu }">
    <div class="wrap">
      <router-link tag="div" to="/">

      <a class="logo_wrap">
        <div id="sc_logo_header">
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 55 80" style="" xml:space="preserve">
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
        <div id="logo_text">
          <svg xmlns="http://www.w3.org/2000/svg" width="88.987" height="38.609" viewBox="0 0 88.987 38.609">
            <g id="Groupe_29" data-name="Groupe 29" transform="translate(-9033.488 -9156.789)">
              <path id="Tracé_99" data-name="Tracé 99" d="M1906.046,126.575a6.182,6.182,0,0,1-5.159-2.656l-2.554,1.839a9.154,9.154,0,0,0,7.56,3.549c4.343,0,6.973-2.145,6.973-5.363,0-3.167-2.35-4.214-5.594-4.955l-2.094-.46c-1.966-.434-2.809-.894-2.809-2.2,0-1.328,1.149-2.324,3.192-2.324a5.776,5.776,0,0,1,4.495,2.094l2.325-1.89a8.853,8.853,0,0,0-6.717-2.886c-3.78,0-6.59,1.992-6.59,5.159s2.375,4.367,5.21,4.98l2.324.511c1.762.382,2.963.894,2.963,2.247C1909.571,125.629,1908.4,126.575,1906.046,126.575Z" transform="translate(7135.155 9045.462)" fill="#caffc7"/>
              <path id="Tracé_100" data-name="Tracé 100" d="M1930.8,132.736c3.754,0,6.078-2.452,6.078-6.334,0-3.908-2.4-6.411-6.078-6.411s-6.08,2.5-6.08,6.411C1924.719,130.284,1927.043,132.736,1930.8,132.736Zm0-10.267c1.941,0,3.193,1.43,3.193,3.882,0,2.427-1.329,3.882-3.193,3.882s-3.193-1.43-3.193-3.882S1928.857,122.469,1930.8,122.469Z" transform="translate(7124.714 9042.033)" fill="#caffc7"/>
              <rect id="Rectangle_35" data-name="Rectangle 35" width="2.911" height="17.368" transform="translate(9063.764 9157.096)" fill="#caffc7"/>
              <path id="Tracé_101" data-name="Tracé 101" d="M1961.777,132.92a4.052,4.052,0,0,0,3.652-1.865v1.558h2.912V120.456h-2.912v6.539c0,1.941-.741,3.346-2.579,3.346-1.788,0-2.2-1.2-2.2-3.116v-6.769h-2.912V128.2C1957.742,132.282,1960.143,132.92,1961.777,132.92Z" transform="translate(7111.645 9041.85)" fill="#caffc7"/>
              <path id="Tracé_102" data-name="Tracé 102" d="M1986.188,129.521v-2.3a5.848,5.848,0,0,1-1.278.1,1.6,1.6,0,0,1-1.226-.332c-.23-.23-.333-.562-.333-1.252v-6.206h2.836v-2.274h-2.836v-4.878l-2.911.639v4.239h-2.6v2.274h2.6v6.691a3.523,3.523,0,0,0,.51,2.451,3.894,3.894,0,0,0,3.065,1.048A10.432,10.432,0,0,0,1986.188,129.521Z" transform="translate(7103.692 9045.044)" fill="#caffc7"/>
              <rect id="Rectangle_36" data-name="Rectangle 36" width="2.912" height="12.157" transform="translate(9091.789 9162.306)" fill="#caffc7"/>
              <rect id="Rectangle_37" data-name="Rectangle 37" width="2.912" height="2.963" transform="translate(9091.789 9157.096)" fill="#caffc7"/>
              <path id="Tracé_103" data-name="Tracé 103" d="M2009.261,132.736c3.754,0,6.078-2.452,6.078-6.334,0-3.908-2.4-6.411-6.078-6.411s-6.079,2.5-6.079,6.411C2003.182,130.284,2005.506,132.736,2009.261,132.736Zm0-10.267c1.941,0,3.193,1.43,3.193,3.882,0,2.427-1.329,3.882-3.193,3.882s-3.193-1.43-3.193-3.882S2007.32,122.469,2009.261,122.469Z" transform="translate(7093.661 9042.033)" fill="#caffc7"/>
              <path id="Tracé_104" data-name="Tracé 104" d="M2029.763,125.943c0-1.967.844-3.371,2.682-3.371a1.941,1.941,0,0,1,2.146,1.4,8.823,8.823,0,0,1,.2,2.325v6.129h2.912v-6.87c0-2.35-.281-3.27-.818-4.061a3.843,3.843,0,0,0-3.346-1.507,4.1,4.1,0,0,0-3.78,1.864v-1.583h-2.912V132.43h2.912Z" transform="translate(7084.294 9042.033)" fill="#caffc7"/>
              <path id="Tracé_105" data-name="Tracé 105" d="M1907.37,160.61c-3.142,0-4.9-2.375-4.9-6.155s1.838-6.232,4.9-6.232a4.4,4.4,0,0,1,4.239,2.887l2.682-1.66a7.767,7.767,0,0,0-6.92-3.984c-5.108,0-8.276,3.7-8.276,8.99s2.936,8.991,8.276,8.991a7.6,7.6,0,0,0,7.1-4.291l-2.912-1.225A4.387,4.387,0,0,1,1907.37,160.61Z" transform="translate(7134.854 9031.952)" fill="#caffc7"/>
              <path id="Tracé_106" data-name="Tracé 106" d="M1930.206,156.2v-1.788h-2.912v12.157h2.912V161.1a6.577,6.577,0,0,1,.332-2.4c.434-1.1,1.3-1.634,2.86-1.634.281,0,.537.025.818.051v-2.963a3.407,3.407,0,0,0-.46-.026A3.567,3.567,0,0,0,1930.206,156.2Z" transform="translate(7123.694 9028.522)" fill="#caffc7"/>
              <path id="Tracé_107" data-name="Tracé 107" d="M1952.309,145.972h-3.448l-1.635,3.269h2.5Z" transform="translate(7115.806 9031.751)" fill="#caffc7"/>
              <path id="Tracé_108" data-name="Tracé 108" d="M1946.374,164.372a3.236,3.236,0,0,1-3.371-3.091h8.863c0-.2.025-.536.025-.74,0-3.755-1.864-6.411-5.747-6.411a5.9,5.9,0,0,0-5.977,6.258c0,3.958,2.453,6.487,6.054,6.487a6.538,6.538,0,0,0,5.72-3.065l-2.017-1.532A4,4,0,0,1,1946.374,164.372Zm-.23-7.917a2.674,2.674,0,0,1,2.861,2.656h-5.926A2.832,2.832,0,0,1,1946.144,156.455Z" transform="translate(7118.6 9028.522)" fill="#caffc7"/>
              <path id="Tracé_109" data-name="Tracé 109" d="M1972.593,163.937v-6c0-2.733-2.095-3.678-4.878-3.678-2.988,0-5.313,1.2-5.313,4.214l2.733.077q.04-2.068,2.452-2.069c1.533,0,2.2.562,2.2,1.558v.1c0,.537-.256.69-.971.818l-.919.153c-3.652.613-5.9,1.2-5.9,4.112,0,2.478,1.788,3.7,4.343,3.7a4.687,4.687,0,0,0,3.652-1.328c.2.894.92,1.251,2.017,1.251a5.711,5.711,0,0,0,1.481-.153v-1.763h-.179C1972.721,164.933,1972.593,164.652,1972.593,163.937Zm-2.809-1.66a2.4,2.4,0,0,1-2.708,2.477c-1.4,0-2.094-.587-2.094-1.609,0-1,.664-1.4,2.094-1.685l1.66-.332a4.434,4.434,0,0,0,1.048-.358Z" transform="translate(7109.962 9028.473)" fill="#caffc7"/>
              <path id="Tracé_110" data-name="Tracé 110" d="M1991.014,154.13a4.094,4.094,0,0,0-3.779,1.865v-1.584h-2.912v12.157h2.912v-6.487c0-1.966.842-3.372,2.682-3.372a1.943,1.943,0,0,1,2.146,1.405,8.833,8.833,0,0,1,.2,2.324v6.13h2.912V159.7c0-2.35-.281-3.27-.817-4.061A3.847,3.847,0,0,0,1991.014,154.13Z" transform="translate(7101.125 9028.522)" fill="#caffc7"/>
              <path id="Tracé_111" data-name="Tracé 111" d="M2011.7,156.633a2.858,2.858,0,0,1,2.835,2.2l2.426-1.276a5.371,5.371,0,0,0-5.338-3.423c-3.371,0-5.977,2.325-5.977,6.41,0,4.113,2.426,6.335,5.977,6.335a5.671,5.671,0,0,0,5.338-3.346l-2.35-1.252a2.937,2.937,0,0,1-2.911,2.069c-1.942,0-3.167-1.4-3.167-3.856S2009.761,156.633,2011.7,156.633Z" transform="translate(7092.685 9028.522)" fill="#caffc7"/>
              <path id="Tracé_112" data-name="Tracé 112" d="M2035.872,162.278a4,4,0,0,1-3.55,2.094,3.236,3.236,0,0,1-3.371-3.091h8.862c0-.2.025-.536.025-.74,0-3.755-1.864-6.411-5.746-6.411a5.9,5.9,0,0,0-5.977,6.258c0,3.959,2.452,6.487,6.052,6.487a6.539,6.539,0,0,0,5.721-3.065Zm-3.779-5.823a2.673,2.673,0,0,1,2.86,2.656h-5.925A2.831,2.831,0,0,1,2032.093,156.455Z" transform="translate(7084.586 9028.522)" fill="#caffc7"/>
            </g>
          </svg>
        </div>
      </a>
    </router-link>

      <div class="menu desktop">
        <h4><router-link to="/tarifs">NOS TARIFS</router-link></h4>
        <p id='back_pipe' style="margin: 0 30px">|</p>
        <h4><router-link to="/espacedebiteur">ESPACE DEBITEUR</router-link></h4>
        <p id='back_pipe' style="margin: 0 30px">|</p>
        <h4><router-link to="/dashboard">ESPACE CLIENT</router-link></h4>
      </div>
      <div class="mobile" @click="toggleMenu" id="toggle">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>

    </div>
    <transition name="slide">
      <div  v-show="activeMenu" class="" style="position: absolute;" v-bind:class="{ slideDown: activeMenu }">
        <h4 @click="toggleMenu" style="margin: 10px 0px"><router-link to="/tarifs">NOS TARIFS</router-link></h4>
        <h4 @click="toggleMenu" style="margin: 10px 0px"><router-link to="/espacedebiteur">ESPACE DEBITEUR</router-link></h4>
        <h4 @click="toggleMenu" style="margin: 10px 0px"><router-link to="/mentionslegales">MENTIONS LEGALES</router-link></h4>
        <h4 @click="toggleMenu" style="margin: 10px 0px"><router-link to="/charte">CHARTE DEONTOLOGIQUE</router-link></h4>
      </div>
    </transition>
  </nav>
 </template>

<script>
  export default {
    data() {
      return {
        activeMenu: false,
        access_expiring_date: this.$store.state.access_expiring_date
      }
    },
    created() {
      console.log("created")
    },
    mounted() {
      console.log("mounted")

          },
    methods: {
      toggleMenu: function() {
        this.activeMenu = !this.activeMenu;
        // some code to filter users
      },
      handler: function handler(event) {
          const logout = this.$store.dispatch('logout')
         }
    }
  }
</script>

<style scoped>

</style>
