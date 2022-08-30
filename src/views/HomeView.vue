<template>
  <section class="gigatest grey__darken-4 pb-96 rounded-lg">
    <Header />
  </section>
</template>

<script>
import Header from '@/components/Header/Header'
export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

<style>
.gigatest {
  height: 2000px;
}  
</style>