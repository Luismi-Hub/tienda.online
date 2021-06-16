<template>
  <div id="app">

<div class="jose">
<nav  id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">  <router-link to="/">productos</router-link> |<span class="sr-only">(current)</span></a>
      </li>
   
      <li class="nav-item">
        <a class="nav-link" href="#"><router-link to="/carrito">carrito</router-link></a>
      </li>  
       <li class="nav-item" id="myAdmin" style="display:none">
        <a class="nav-link" href="#"><router-link to="/about">admin</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"></a>
      </li>
    </ul>
  </div>
  <loginB v-on:showAdmin="showMyAdmin"/>
  <router-link to="/carrito"><botonCarrito/></router-link>
  

</nav>

</div>
    <router-view/>
       <div class="notificaciones">
    <notifications  group="foo" />
    </div>
  </div>
</template>






<script lang="js">

import Firebase from "@/components/db"
import loginB from "@/components/loginButton"
import botonCarrito from "@/components/botonCarrito"


  export default  {
    
    props: [],

    data () {
      return {

         user: {
          loggedIn: false,
          data: {}
        }
,


      }
    },

    components:{loginB,botonCarrito},
    methods: {
      login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      },

      showMyAdmin(){


          document.getElementById("myAdmin").style.display="block"
          console.log("emitiendo")

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  
  width: 100%;

}
 #nav{
       position:relative;
   }
    #nav > li:last-child
    {
    right:0;
    position:absolute
   }

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav > li{
  display:inline-block;
  vertical-align:middle;
 }

#nav >li:last-child{
  float:right;
}

#navBar{

  width: 100%;
display: table;
}

.notificaciones{



}


</style>
