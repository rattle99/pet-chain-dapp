<!-- component scripts -->
<script>
// import Vuex helpers.
import { mapGetters, mapActions } from 'vuex'

// export component.
export default {
  // component name.
  name: 'AppNavbar',

  // component data.
  data () {
    return {
      // nav menu open/closed state.
      navOpen: false
    }
  },

  // computed properties.
  computed: {
    // map getters from web3 vuex store.
    ...mapGetters('web3', ['avatar', 'selectedAddress', 'guest'])
  },

  // component methods.
  methods: {
    // import actions from web3 vuex store.
    ...mapActions('web3', ['enableWeb3Account']),

    // toggle navbar menu open/closed state.
    toggleNav () {
      this.navOpen = !this.navOpen
    }
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
        <a role="button" @click="toggleNav" :class="{ 'is-active': navOpen }" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" :class="{ 'is-active': navOpen }" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            <img class="avatar" :src="avatar" :title="selectedAddress" :alt="selectedAddress" v-if="!guest">
          </a>
        </div>
      </div>

    </div>
  </nav>
</template>

<style lang="scss">
  // import bulma mixins.
  @import "~bulma/sass/utilities/mixins";

  // custom navbar styles.
  .navbar {
    // padded container.
    > .container {
      // desktop only padding.
      @include from($desktop) {
        padding-left: 15px;
        padding-right: 15px;
      }

    }
    box-shadow: 0 0 2px 1px rgba(black, 0.05);

    // make account avatar rounded.
    img.avatar {
      border-radius: 50%;
    }
  }
</style>
