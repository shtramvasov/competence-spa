<template>
  <div class="item grey__lighten-5 rounded elevation-3 flex cols gap-3">
    <div class="item__header flex cols gap-0-5">
      <h2 class="blue-grey__darken-4--text">{{ plan.name }}</h2>
      <h2 class="bold green--text">₽ {{ plan.price }}</h2>
    </div>
    <div class="item__body">
      <ul class="flex cols gap-2 pb-64">
        <li class="grey__darken-1--text flex vcenter gap-0-5">
          <img src="@/assets/img/icons/icon-pricing-screen.svg" >
          <p class="description"><b class="blue-grey__darken-4--text">{{ plan.screen }}</b> экранов</p>
        </li>
        <li class="grey__darken-1--text flex vcenter gap-0-5">
          <img src="@/assets/img/icons/icon-pricing-storage.svg" >
          <p class="description"><b class="blue-grey__darken-4--text">{{ plan.storage }} ГБ</b> хранилище</p>
        </li>
        <li class="grey__darken-1--text flex vcenter gap-0-5">
          <img src="@/assets/img/icons/icon-pricing-savings.svg" >
          <p class="description"><b class="blue-grey__darken-4--text">{{ plan.savings }}%</b> экономии</p>
        </li>
      </ul>
      <router-link :to="{name: 'sign-in'}"><button class="button grey__lighten-5--text">Выбрать тарифный план</button></router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['plan']
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/colors';

  .item {
    padding: 1.5rem;

    &__header {
      border-bottom: 1px solid $grey-lighten-3;
    }
  }
</style>