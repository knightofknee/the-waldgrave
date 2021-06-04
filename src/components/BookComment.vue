<template>
  <div>
    raaaaa
    {{comment.name}}
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
  },
  mounted () {
    console.log('rawr', this.props.comment)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
