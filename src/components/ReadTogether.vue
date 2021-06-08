<template>
  <div>
    <div>log in to a book room: </div>
    <input type="text" v-model="roomCode" placeholder="enter room code"/>
    <button type="click" v-on:click="findRoom">enter</button>
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
      bookComments: [{name: 'carl', text: 'you right you right', id: '22'}]
    }
  },
  methods: {
    findRoom: function () {
      // need to get from the database here

      //var useThis = this.roomCode

      console.log("meeeoooooowww")

      var roomComments = [{name: 'replaceMEOW', text: 'holding until we get from db'}]

      this.bookComments.push(roomComments[0])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
