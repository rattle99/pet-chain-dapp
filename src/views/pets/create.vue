<!-- component script -->
<script>
export default {
  // component name.
  name: 'app-pets-create',

  // component data.
  data () {
    return {
      name: null, // pet name.
      kind: null // pet kind.
    }
  }
}
</script>

<!-- component template -->
<template>

  <!-- external column wrapper (half size for a simple form) -->
  <div class="column is-half-desktop">

    <!-- component wrapper -->
    <div class="app-pets-create" id="app-content">

      <!-- form title -->
      <div class="columns">
        <div class="column">
          <h4 class="title is-4">Register your Pet!</h4>
        </div>
      </div>

      <!-- form fields -->
      <div class="columns">
        <div class="column">

          <!-- pet name field group -->
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" v-model="name" type="text" placeholder="e.g. Benjamin, Sam...">
            </div>
          </div>

          <!-- pet kind field group -->
          <div class="field">
            <label class="label">Kind</label>
            <div class="control">
              <div class="select">
                <select v-model="kind">
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<!-- component style -->
<style lang="scss">
  //
</style>
