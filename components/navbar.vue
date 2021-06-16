<template lang="html">


<div class="jose">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Featu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> aa
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>

<button v-if="!authenticated" @click="login">Login</button>
   <div v-if="authenticated">
            <button @click="logout">Logout</button>
            <h1>Hi {{ firstName }}!</h1></a>
</div>
</template>

<script lang="js">

import Firebase from "./db"

  export default  {
    name: 'jose',
    props: [],
    mounted () {

    },
    data () {
      return {

         user: {
          loggedIn: false,
          data: {}
        }

      }
    },
    methods: {
      login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      }
    },

    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },

   computed: {
        authenticated(){
          return this.user.loggedIn
        },
        firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName.split(' ')[0]
          }
          return null
        }
    },
}


</script>

<style>
  .jose {
    margin-bottom: 40px;
  }
</style>
