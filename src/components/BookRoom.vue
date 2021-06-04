<template>
  <div>
    {{roomCode}}
    <div>
      <BookComment v-for="comment in bookComments" :key="comment.id" v-bind:comment="comment">{{comment.name}}</BookComment>
    </div>
  </div>
</template>

<script>
import BookComment from './BookComment'

export default {
  name: 'BookRoom',
  props: { roomCode: String },
  components: { BookComment },
  data () {
    return {
      pageNumber: 1,
      bookComments: [{name: 'josephina'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
