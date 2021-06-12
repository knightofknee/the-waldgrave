<template>
  <div>
    <div>log in to a book room: </div>
    <input type="text" v-model="typedCode" placeholder="enter room code"/>
    <button type="click" v-on:click="findRoom">enter</button>
    <BookRoom v-bind:roomCode="roomCode" v-bind:bookComments="bookComments"></BookRoom>
  </div>
</template>

<script>
import BookRoom from './BookRoom'
import axios from 'axios'

export default {
  name: 'ReadTogether',
  components: {
    BookRoom
  },
  data () {
    return {
      roomCode: '',
      typedCode: '',
      bookComments: [{ author: 'carl', text: 'you right you right', id: '22', pageNumber: 2, replies: [{author: 'subAuth1', text: 'wowzer bowser', id: '55'}] }]
    }
  },
  methods: {
    findRoom: function () {
      this.roomCode = this.typedCode
      // axios.Get(this.typedCode)

      // need to get from the database here
      var roomComments = [{author: 'replaceMEOW', text: 'holding until we get from db', id: '', pageNumber: 33}]

      this.bookComments = roomComments
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
