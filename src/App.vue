<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script>
export default {
  name: 'App'
}
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

//TODO: Add SDKs for Firebase products that you want to use
  //   https://firebase.google.com/docs/web/setup#available-libraries -->

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCbwLfs403aClVKHAZVWyqX0N28MQIxFio",
    authDomain: "readtogether-fa359.firebaseapp.com",
    databaseURL: "https://readtogether-fa359-default-rtdb.firebaseio.com",
    projectId: "readtogether-fa359",
    storageBucket: "readtogether-fa359.appspot.com",
    messagingSenderId: "917905795997",
    appId: "1:917905795997:web:977e48ba1080b24be19d74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
