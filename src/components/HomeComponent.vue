<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to Home Page'
      }
    }
  }
</script>