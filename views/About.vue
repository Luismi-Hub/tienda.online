<template>
  <div class="about">
    <h1>Welcome Admin!</h1>
    <panelAdmin/>

  </div>
</template>


<script>


import panelAdmin from '@/components/panelAdmin.vue'


export default {
  name: 'Home',
  components: {
  panelAdmin
  }
}
</script>