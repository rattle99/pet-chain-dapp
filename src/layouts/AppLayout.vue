<!-- layout scripts -->
<script>
// import Vuex helpers.
import { mapActions } from 'vuex'
// import child components.
import AppNavbar from '../components/layout/Navbar'

// export component.
export default {
  // component name.
  name: 'AppLayout',

  // child components.
  components: {
    AppNavbar
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
<!-- layout template -->
<template>
  <!-- layout wrapper -->
  <div id="app">
    <!-- app navbar -->
    <app-navbar></app-navbar>

    <!-- content container-->
    <div class="container" id="app-content-container">
      <div class="columns is-centered">
        <!-- use div#app-container on inner elements to have the panel borders -->
        <router-view/>
      </div>
    </div>
  </div>
</template>

<!-- layout style -->
<style lang="scss">

  // custom variables.
  $navbar-height: 4.5rem;
  $navbar-item-img-max-height: 2.5rem;

  // import bulma.
  @import "~bulma/bulma.sass";

  // main app wrapper style.
  #app {
    background: lighten($grey-lighter, 10%);
    min-height: 100vh;
  }

  #app-content-container {
    padding: 15px;
  }

  // inner content wrapper style.
  #app-content {
    border-radius: 4px;
    box-shadow: 0 0 2px 1px rgba(black, 0.05);
    background: white;
    margin-top: 30px;
    padding: 30px;
  }
</style>
