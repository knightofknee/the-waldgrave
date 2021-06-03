<template>
  <div>
    {{roomCode}}
  </div>
</template>

<script>
export default {
  name: 'BookRoom',
  props: { roomCode: String },
  data () {
    return {
      msg: 'Here I will'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
