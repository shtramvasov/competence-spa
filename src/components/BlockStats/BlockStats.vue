<template>
  <div class="stats grey__lighten-5 elevated-1 rounded-lg flex  gap-1-5">
    <div class="item">
      <p class="bold">2016</p>
      <p class="description grey__darken-1--text">Год основания</p>
    </div>
    <div class="item">
      <p class="bold">10 000+</p>
      <p class="description grey__darken-1--text">Организаций</p>
    </div>
    <div class="item">
      <p class="bold">1200+</p>
      <p class="description grey__darken-1--text">Пользователей</p>
    </div>
    <div class="item">
      <p class="bold">45+</p>
      <p class="description grey__darken-1--text">Стран</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/breakpoints';

  .stats {
    margin-top: 5rem;
    flex-wrap: wrap;
    padding: 1.5rem 3.5rem;
    justify-content: space-around;
  }

  @media (max-width: $screen-phone) {
    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
</style>