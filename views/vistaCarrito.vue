<template>
  <div class="carrito">
   <carrito/>
  </div>
</template>

<script>
// @ is an alias to /src

import carrito from '@/components/carrito.vue'


export default {
  name: 'vistaCarrito',
  components: {
      carrito
  }
}
</script>

<style scoped>
section{

  display: flex;
  flex-wrap: wrap;

}
</style>
