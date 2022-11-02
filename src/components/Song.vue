<template>
  <div style="display:flex;flexDirection:column;justifyContent:center">
    <h3>Lyrics: </h3>
    <p v-for="(lyricBlock, index) in lyrics" :key="index">
      {{lyricBlock}}
    </p>
  </div>
</template>

<script>

export default {
  name: 'Song',
  props: { lyrics: [''] }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  margin: 0 5%;
}
</style>
