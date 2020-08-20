<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Core Values</h2>
    <ul>
      <li>
        <span>Creativity</span>
      </li>
      <li>
        <span>Weird</span>
      </li>
      <li>
        <span>Effort</span>
      </li>
    </ul>
    <h2>Goal</h2>
    <ul>
      <li>
        <p>We are creatures of creation and expression, but our everyday
          lives do not always give us outlets, so we must create spaces that do.
          The Waldgrave aims to provide the tools to create those spaces for you and your friends,
          and to promote the creation and capture of ideas. Current projects and goals of the Waldgrave include a music blog, a bookclub app, a notes app, fixing social security, and reducing income equality
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'The Waldgrave Welcomes You'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
