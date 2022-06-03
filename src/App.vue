<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
  import Home from './components/Home.vue'

  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  body {
    background: #232323;
    margin: 0;
    font-family: "Montserrat", "Avenir";
  }

  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;
  }

</style>
