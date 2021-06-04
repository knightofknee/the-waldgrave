<template>
  <div>
    {{comment.name}}
  </div>
</template>

<script>
export default {
  name: 'BookComment',
  props: { comment: Object },
  data () {
    return {
      replyText: "dunno if ill use this var"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
