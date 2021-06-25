<template>
  <div>
    <div>Create a comment</div>
    <input type="text" />
    <input type="number" />
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
