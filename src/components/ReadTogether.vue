<template>
  <div>
    <div>log in to a book room: </div>
    <input type="text" v-model="roomCode" placeholder="enter room code"/>
    <button type="click" v-on:click="findRoom">enter</button>
    <!-- v-on:click="findRoom" -->
    <BookRoom v-bind:roomCode="roomCode" v-bind:bookComments="bookComments"></BookRoom>
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
      roomCode: '',
      bookComments: [{name: 'carl', text: 'you right you right'}]
    }
  },
  methods: {
    findroom () {
      // need to get from the database here
      console.log('rawrrr')

      this.roomCode = "is this thing on?"

      //  var useThis = this.roomCode

      // var roomComments = [{name: 'replaceMEOW', text: 'holding until we get from db'}]

      // this.bookComments = roomComments

      this.console.log('rawrrr22222')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
