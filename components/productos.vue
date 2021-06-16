<template lang="html">  

<section class="josecopy">
  <card v-for="inst in documentos " v-bind:articulo="inst" v-bind:key="inst.nombre"/>

  </section>

  
</template>

<script lang="js">
import card from './card.vue'
import {db} from "./db"



  export default  {
    name: 'productos',
    props: [],
  
    data () {
      return {
 
    documentos:[],
   
      }
    },


    firestore:{
      documentos: db.collection("instrumentos"),
    
    },

    components:{
        card
    },

  

    
}

</script>

<style>
 section{

   display:flex;
   flex-wrap: wrap;


 }
</style>
