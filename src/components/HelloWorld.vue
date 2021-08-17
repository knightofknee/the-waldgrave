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
        <!-- We are creatures of creation and expression, but our everyday
          lives do not always give us outlets, so we must create spaces that do.
          The Waldgrave aims to provide the tools to create those spaces for you and your friends,
          and to promote the creation and capture of ideas. -->
          <div>
        <p>We are the tiny aliens in Men in Black who run around inside the heads of human robots. The Waldgrave aims to create spaces where you can comfortably and safely exit your robot for a bit with your alien friends. Current projects and goals of the Waldgrave include <router-link to="/teganandsara"> a music blog</router-link>, <router-link to="/readtogether">a bookclub app</router-link>, a notes app, <router-link to="/fixingsocialsecurity">fixing social security</router-link>, reducing income equality and <router-link to="/endoftheuniverse">how to survive the heat death of the universe</router-link> (and a schedule-matching tool for finding best day of the week each week?)
        </p>
        </div>
    <h2>What is the Waldgrave?</h2>
    <ul>
      <li>
        <h4>Why is the Waldgrave?</h4>
        <p>To promote regular crativity with friends in particular, and to promote  general ideation</p>
      </li>
      <li>
        <h4>How is the Waldgrave?</h4>
        <p>Through creativity, weird and effort. Creativity comes easy when you put in the effort to set up an environment where you want to be weird</p>
      </li>
      <li>
        <h4>Who is the Waldgrave?</h4>
        <p>You, or You and your friends, or You and some potential new friends</p>
      </li>
    </ul>
    <div>
      <div id='rg_embed_link_4726856' class='rg_embed_link' data-song-id='4726856'>Read <a href='https://genius.com/Tegan-and-sara-hold-my-breath-until-i-die-lyrics'>“Hold My Breath Until I Die” by Tegan and Sara</a> on Genius</div> <script crossorigin src='//genius.com/songs/4726856/embed.js'></script>
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
