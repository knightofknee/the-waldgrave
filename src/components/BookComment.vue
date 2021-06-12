<template>
  <div style="display:flex;flexDirection:column;justifyContent:center">
    <span>{{comment.author}} - {{comment.pageNumber}}</span>
    <span>{{comment.text}}</span>
    <ul>
      <div v-for="commentReply in comment.replies" v-bind:key="commentReply.id">
        {{commentReply.author + " : " + commentReply.text}}
      </div>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'BookComment',
  props: { comment: Object },
  data () {
    return {
      replyText: 'dunno if ill use this var'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
