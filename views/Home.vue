<template>
  <div class="home">

    <HelloWorld msg=""/>
    <productos/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import productos from '@/components/productos.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    productos
  }
}
</script>

<style scoped>
section{

  display: flex;
  flex-wrap: wrap;

}
</style>
