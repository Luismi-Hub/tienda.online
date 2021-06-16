<template lang="html">

  <section class="carrito">
    <articuloCarrito v-for="inst in seleccionados " v-bind:seleccionados="inst" v-bind:key="inst.id"/>
 
 {{cantidadProductos}}
 {{totalCarrito}}
 </section>

</template>

<script lang="js">

import articuloCarrito from './articuloCarrito.vue'
import {db} from "./db"
import Firebase from "./db"






  export default  {
    name: 'carrito',
    props: [],
   
    data () {
  
      return {

       

          user: {
          loggedIn: false,
          data: {}
        },
        seleccionados:[],
        userUID:"",
        idCliente:""
        }
    
    },
    
        components:{
        articuloCarrito
    },

 
 mounted () {
      Firebase.auth.onAuthStateChanged((user)=>{
        if(user){
          this.userUID=user.uid
          this.$bind('seleccionados', db.collection('carrito').where('idCliente','==',this.userUID))
        }
        else{
          this.userUID="";
          this.$bind('seleccionados', db.collection('carrito').where('idCliente','==',this.userUID))
          
        }
          
      });
    },

        firestore:{
// 
      seleccionados:db.collection("carrito")
    },

    methods: {

    },
     computed:{
     
     

    cantidadProductos(){

        var total=0; 
    
  
{
      this.seleccionados.forEach(prod => {
        total+=(prod.cantidad)
      })
       }
        

       return total

  
        },
           totalCarrito(){
      var total=0;
      
      this.seleccionados.forEach(prod => {
        total+=parseFloat(prod.precio)*parseFloat(prod.cantidad)
      });

      
      return total
    },
}

    
}


</script>

<style>
 section{

   display:flex;
   flex-wrap: wrap;


 }
</style>
