<template>
  <div>
    {{roomCode}}
    <div>
      <BookComment v-for="comment in bookComments" :key="comment.id" v-bind:comment="comment"></BookComment>
    </div>
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
