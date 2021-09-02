<template>
  <div style="display:flex;flexDirection:column;justifyContent:center">
    Lyrics: {{song}}
  </div>
</template>

<script>

export default {
  name: 'Song',
  props: { song: ''}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
