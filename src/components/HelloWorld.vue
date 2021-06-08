<template>
<div>
  <div class="hello">
    <h1 style="z-index:2;">{{ msg }}</h1>
    <div style="margin: -2em 0;"><img class="bigw" src="../assets/transparentw.png"></div>

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
    <div class="purple-circle-container">
      <router-link to="/thepurplecircle"><img class="purple-circle" src="../assets/thepurplecircle.jpg"></router-link>
    </div>
    <h2>Goals</h2>
    <ul>
      <li>
        <p>We are creatures of creation and expression, but our everyday
          lives do not always give us outlets, so we must create spaces that do.
          The Waldgrave aims to provide the tools to create those spaces for you and your friends,
          and to promote the creation and capture of ideas. Current projects and goals ------ a music blog, a bookclub app, a notes app, fixing social security, and reducing income equality
        </p>
      </li>
    </ul>
    <div>
      <div id='rg_embed_link_4726856' class='rg_embed_link' data-song-id='4726856'>Read <a href='https://genius.com/Tegan-and-sara-hold-my-breath-until-i-die-lyrics'>“Hold My Breath Until I Die” by Tegan and Sara</a> on Genius</div>
    </div>
  </div>
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

.purple-circle {
  width: auto;
  height: 200px;
  border-radius: 90%;
  position: relative;
  float: right;
  right: 2em;
  top: -7em;
}

.purple-circle-container {
  height: 10px;
}

@media (max-width: 960px) {
  .purple-circle-container {
    order: 1;
    margin: 500px 0;
  }
  .purple-circle {
    float: none;
    right: 0;
    top: 0;
  }
}

.bigw {
  height: auto;
  max-width: 500px;
  margin: -10% 0;
}

.hello {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
