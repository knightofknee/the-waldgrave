<template>
  <div class="hello" style="background-image: url('../assets/thepurplecircle.jpg')">
    <h1>{{ msg }}</h1>
    <div><router-link to="/">Home</router-link></div>
    <!-- <img src="../assets/thepurplecircle.jpg"> -->
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'MyHomepage',
  data () {
    return {
      msg: 'Here I will post my own creative endeavors'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
