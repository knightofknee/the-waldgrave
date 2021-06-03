<template>
  <div>
    <div>log in to a book room: </div>
    <input type="text"/>
    <button type="click">enter</button>
    <BookRoom></BookRoom>
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
      msg: 'Here I will post my own creative endeavors'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
