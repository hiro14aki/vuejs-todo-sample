<style>
  .welcomeMessage {
    color: #00FF00;
  }
</style>

<template>
  <div class="welcomeMessage">
    {{ message }}
  </div>
</template>

<script>
  module.exports = {
    data () {
      return {
        message: 'Hello, Vue.js!'
      }
    }
  }
</script>
