<template>
  <div>
    <div>log in to a book room: </div>
    <input type="text" v-model="typedCode" placeholder="enter room code"/>
    <button type="click" v-on:click="findRoom">enter</button>
    <BookRoom v-if="bookComments.length" v-bind:roomCode="roomCode" v-bind:bookComments="bookComments"></BookRoom>
  </div>
</template>

<script>
import BookRoom from './BookRoom'
import axios from 'axios'
import firebase from 'firebase/app'

export default {
  name: 'ReadTogether',
  components: {
    BookRoom
  },
  data () {
    return {
      roomCode: '',
      typedCode: '',
      bookComments: [{ author: '', text: '', id: '', pageNumber: 0, replies: [{author: '', text: '', id: ''}] }]
    }
  },
  methods: {
    findRoom: function () {
      this.roomCode = this.typedCode
      // axios.Get(this.typedCode)
      
      var database = firebase.database().ref("Books/Bible").get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log("rawrwwwwww", snapshot.val());
          
          var currComments = snapshot.val()
          var temp = []
          for (var commentID in currComments) {
            var commentValues = currComments[commentID]
            temp.push({id: commentID, author: commentValues.author,
              text: commentValues.text, pageNumber: commentValues.pageNumber,
              replies: commentValues.replies})
          }
          
          this.bookComments = temp
          
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
