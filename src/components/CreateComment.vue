<template>
  <div style="display:flex;justify-content:space-evenly">
    <form style="display:flex;flex-direction:column;align-items:flex-end;">Create a comment
      <div>
        <label name="author">Name</label>
        <input type="text" name="author" />
      </div>
      <div>
        <label name="pageNumber">Page Number</label>
        <input type="number" name="pageNumber" />
      </div>
      <div>
        <label name="comment">Comment</label>
        <textarea style="width:100%;" rows="5" name="comment" />
      </div>
    </form>
  </div>
</template>

<script>

import firebase from 'firebase/app'

export default {
  name: 'CreateComment',
  props: { },
  data () {
    return {
      test: 'dunno if ill use this var'
    }
  },
  methods: {
    postComment: function () {
      // var database = firebase.database().ref("Books/" + this.typedCode).get()
      // .then((snapshot) => {
      //   if (snapshot.exists()) {
      //     var currComments = snapshot.val()
      //   }
      // })
      // .catch((error) => {
      //   console.error(error);
      // });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
