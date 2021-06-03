<template>
  <div>
    <div>log in to a book room: </div>
    <input type="text"/>
    <button type="click">enter</button>
    <BookRoom v-bind:roomCode="code"></BookRoom>
  </div>
</template>

<script>
import BookRoom from './BookRoom'

export default {
  name: 'ReadTogether',
  components: {
    BookRoom
  },
  data () {
    return {
      code: '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
