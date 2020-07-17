<template>
  <div id="app">
    <img class="bigw" src="./assets/w.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bigw {
  height: auto;
  max-width: 500px;
  margin: -10% 0;
}

</style>
