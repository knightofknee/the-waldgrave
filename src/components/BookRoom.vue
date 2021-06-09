<template>
<div>
  <div v-if="roomCode.length > 0">
    Room Code: {{roomCode}}
  </div>
  <div v-else>||</div>
  <BookComment v-for="comment in bookComments" :key="comment.id" v-bind:comment="comment"></BookComment>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
