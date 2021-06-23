<template>
<div>
  <div>
    Room Code: {{roomCode}}
  </div>
  <div>
    <div>Change the page number to reveal more comments: </div>
    <input type="number" v-model="pageNumber" placeholder="enter page number"/>
    <!-- <button type="click" v-on:click="findRoom">enter</button> -->
    <br/>
    <div>{{revealedComments.length}} / {{bookComments.length}} comments visible</div>
    <!-- <div v-if="hiddenCount > 1">There are {{hiddenCount}} hidden comments</div>
    <div v-if="hiddenCount === 1">There is 1 hidden comment</div>
    <div v-if="hiddenCount === 0 && revealedComments.length > 0">There are no hidden comments</div> -->
    <br/>
  </div>
  <BookComment v-if="revealedComments.length > 0" v-for="comment in revealedComments" :key="comment.id" v-bind:comment="comment"></BookComment>
</div>
</template>

<script>
import BookComment from './BookComment'

export default {
  name: 'BookRoom',
  props: { roomCode: String, bookComments: [Object] },
  components: { BookComment },
  data () {
    return {
      pageNumber: 1
    }
  },
  computed: {
    revealedComments: function () {
      return this.bookComments.filter(comment =>
        comment.pageNumber <= this.pageNumber)
    },
    hiddenCount: function () {
      return this.bookComments.length - this.revealedComments.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
