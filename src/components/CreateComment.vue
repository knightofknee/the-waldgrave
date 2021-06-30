<template>
  <div style="display:flex;justify-content:space-evenly">
    <form v-on:submit.prevent="postComment"
    style="display:flex;flex-direction:column;align-items:flex-end;">Create a comment
      <div>
        <label name="author">Name</label>
        <input type="text" name="author" v-model="name" />
      </div>
      <div>
        <label name="pageNumber">Page Number</label>
        <input type="number" name="pageNumber" v-model="pageNumber" />
      </div>
      <div>
        <label name="comment">Comment</label>
        <textarea style="width:100%;" rows="5" name="comment" v-model="comment" />
      </div>
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>

import firebase from 'firebase/app'

export default {
  name: 'CreateComment',
  props: { roomCode: String },
  data () {
    return {
      name: '',
      pageNumber: 0,
      comment: ''

    }
  },
  methods: {
    postComment: function () {
      if (this.name.length < 3 || this.pageNumber == 0) return;
      firebase.database().ref("Books/" + this.roomCode + "/" + this.name + "/" + this.pageNumber + Date.now()).set({
        name: this.name,
        pageNumber: this.pageNumber,
        comment: this.comment
      })
      .then((snapshot) => {
        if (snapshot.exists()) {
          var reply = snapshot.val()
          console.log("woo", reply)
        }
      })
      .catch((error) => {
        console.log("nerp")
        console.error(error);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
