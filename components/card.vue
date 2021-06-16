<template lang="html">
  
    <section class="card">
 
     <h3 >{{articulo.nombre}}</h3>
        <img v-bind:src="articulo.imagen" style="padding: 10px;width: 250px;height: 140px;">
        <p>{{articulo.descripcion}}</p>
        <div><a>{{articulo.precio}}€</a> <button :disabled="articulo.stock<=0" v-on:click="anadirCarrito(articulo)">Buy</button></div>
        <br><p></p>
        <p style="color:red">stock:{{articulo.stock}}</p>
    
    
  </section>

</template>

<script lang="js">

 
import {db} from "./db"
import Firebase from "./db"
import Vue from 'vue'

export default  {
    name: 'card',
    props: ["articulo"],
  
    
    data () {
      return {
    userUID:"",
    documentos:[],
     user: {
          loggedIn: false,
          data: {}
        }

      }
    },

    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
          this.userUID=user.uid
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },

  

    methods: {
        login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      },


      anadirCarrito(prod){

        if( this.user.loggedIn === false){

          document.getElementById("inicioLogin").click()
        }

        else{
        
      var doc={
        cantidad:1,
        idCliente:this.userUID,
        nombre:prod.nombre,
        imagen:prod.imagen,
        precio:prod.precio,
        stock:prod.stock,
       
      }
      db.collection('carrito').add(doc)
      Vue.notify({
  group: 'foo',
  title: '¡Enhorabuena!',
  text: 'has añadido un producto a la cesta'
})
    }
      }
    },

   
    computed: {

    }
}


</script>

<style>
.card {
  width: 30%;
  padding: 30px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

}

button{
  width: 60px;
}

p {
  width: 100%;
}
img {
  margin: 15px;
}
a {
  padding: 10px;
}
</style>

//// pasando propiedades estaticas o dinamicas vue ////////////
