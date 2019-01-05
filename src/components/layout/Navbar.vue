<!-- component scripts -->
<script>
// import Vuex helpers.
import { mapGetters, mapActions } from 'vuex'

// export component.
export default {
  // component name.
  name: 'AppNavbar',

  // computed properties.
  computed: {
    // map getters from web3 vuex store.
    ...mapGetters('web3', ['avatar', 'selectedAddress', 'guest'])
  },

  // component methods.
  methods: {
    // import actions from web3 vuex store.
    ...mapActions('web3', ['enableWeb3Account'])
  },
  mounted () {
    // enable the web3 account when a page starts.
    this.enableWeb3Account()
  }
}
</script>

<template>
  <!-- app navbar -->
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <!-- internal navbar container -->
    <div class="container">
      <!-- brand / logo -->
      <div class="navbar-brand">
        <!-- logo -->
        <a class="navbar-item" href="/">
          <img src="../../assets/logo-text.svg" alt="PetChain">
        </a>

        <!-- toggle menu button -->
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            <img class="avatar" :src="avatar" :alt="selectedAddress" v-if="!guest">
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style lang="scss">
  // custom navbar styles.
  .navbar {
    box-shadow: 0 0 2px 1px rgba(black, 0.05);

    // make account avatar rounded.
    img.avatar {
      border-radius: 50%;
    }
  }
</style>
