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
    <!-- <div class="purple-circle-container">
      <router-link to="/thepurplecircle"><img class="purple-circle" src="../assets/thepurplecircle.jpg"></router-link>
    </div> -->
    <h2>Goals</h2>
        <!-- We are creatures of creation and expression, but our everyday
          lives do not always give us outlets, so we must create spaces that do.
          The Waldgrave aims to provide the tools to create those spaces for you and your friends,
          and to promote the creation and capture of ideas. -->
    <div>
        <p>We are the tiny aliens in Men in Black who run around inside the heads of human robots. The Waldgrave aims to create spaces where you can comfortably and safely exit your robot for a bit with your alien friends. Current projects and goals of the Waldgrave include <router-link to="/teganandsara"> a music blog</router-link>, <router-link to="/readtogether">a bookclub app</router-link>, <router-link to="/brainstree"> a notes app</router-link>, <router-link to="/fixingsocialsecurity">fixing social security</router-link>, reducing income equality, <router-link to="/climatechangestrats">combatting climate change</router-link> and <router-link to="/endoftheuniverse">how to survive the heat death of the universe</router-link>
        </p>
    </div>
    <div>
      <img style="width:3rem;" src="../assets/thew1.png">
    </div>
    <h2>What is the Waldgrave?</h2>
      <div>
        <h4>Why is the Waldgrave?</h4>
        <p>To promote regular crativity with friends in particular, and to promote  general ideation</p>
      </div>
      <div>
        <h4>How is the Waldgrave?</h4>
        <p>Through creativity, weird and effort. Creativity comes easy when you put in the effort to set up an environment where you want to be weird</p>
      </div>
      <div>
        <h4>Who is the Waldgrave?</h4>
        <p>You, or You and your friends, or You and some potential new friends</p>
      </div>
      <div>
        <img style="width:3rem;" src="../assets/thew2.png">
      </div>
      <div>
        <h4>What is Good?</h4>
        <p>
          Everything is Good, stop stressing the shoulds and worrying the woulds, can the coulds, everything is good.
        </p>
        <p>
          On the cosmic level, we are insignificant and might not even have free will, so why should we spend so much time with judgements? I think the universe is a good thing, and we are a part of it. We are basically patterns, we can lean into the rest of the universe or pull back, and we can choose to observe more or less. We can learn from those interactions, but I don't see the need to judge a part of the universe for being how it is, even it is me. This brings us to the individual level. People exist as waves, constantly riding ups and downs. But we only observe people at one point at a time. This creates a perception issue, especially for people you don't know. Living in a city, the effect is heightened. If you are around a lot of people, it is expected that you will pass by people at the bottom or top of their waves regularly. If a good driver makes a small mistake once every 100 trips, but you are driving past 400 cars a day, expect to see at least 4 small mistakes. Everyone is driving a different spaceship through the same spacetime, the question becomes 'How does your wave interact with the waves aroud you?'
        </p>
        <p>
          Additionally, it is imperative that you fully acknowledge that you are a biological computer that is constantly re-programming itself based on neural paths taken. We have limited processing power. We think in a very indirect, complicated neural net, but if your complicated neural net is fully occupied, it cannot do other things. That's part of the power of meditation, bringing yourself out of trains of thought that you don't want to ride. Being positive isn't only about helping others, primarily it helps your own brain.
        </p>
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
  margin: 0 5%;
}
</style>
