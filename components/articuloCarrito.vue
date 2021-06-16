<template lang="html">
  
    <section class="articuloCarrito">
    
     <h3 >{{seleccionados.nombre}}</h3>
        <img v-bind:src="seleccionados.imagen" style="padding: 10px;width: 250px;height: 140px;">
        <div><a>{{seleccionados.precio}}€</a> <button v-on:click="eliminarProducto(seleccionados)">x</button></div>
        <button v-on:click="productoMenos(seleccionados)">-</button ><a>{{seleccionados.cantidad}}</a><button v-on:click="productoMas(seleccionados)">+</button>
        <br><p></p>
      
    
    
  </section>

</template>

<script lang="js">

 
import {db} from "./db"
import Vue from 'vue'

export default  {
      name: 'articuloCarrito',
    props: ["seleccionados"],
    mounted () {

    },
    data () {

      
      return {
      
      }
    },
    methods: {
      eliminarProducto(prod){
        db.collection('carrito').doc(prod.id).delete()
        
        Vue.notify({
  group: 'foo',
  type: "warn",
  title: '¡Atención!',
  text: 'Se ha eliminado un articulo de la cesta'
})
      }
,
  productoMas(prod){

    db.collection('carrito').set(prod.cantidad+1)

  },

  productoMenos(prod){
    
    if(db.collection('carrito').doc(prod.cantidad===0))

          {db.collection('carrito').doc(prod.id).delete()}
    

    else{   

      db.collection('carrito').update(prod.cantidad-1)}}
 
    }
    ,

   
    computed: {

    }
}


</script>

<style>
.articuloCarrito {
  width: 100%;
  padding: 30px;
  margin: 15px;
  display: flex;
  flex-direction: row;
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
