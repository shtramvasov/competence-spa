<template >
  <div class="flex gap-2">
    <router-link :to="{ name: 'sign-in' }">
      <button class='button grey__lighten-4--text'>Начать бесплатно</button>
    </router-link>
    <router-link :to="{ name: 'pricing' }">
      <button class="button__hollow" :class="{ 'dark' : this.dark == true }">Смотреть цены</button>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    dark: Boolean | false,
  }
  
}
</script>
<style lang="scss" scoped>
  
</style>