<template >
  <div class="container inner-wrapper flex gap-4" :class="{ 'dark grey__darken-4 rounded-lg' : this.dark == true }">
    <div class="item item__text">
      <h1 :class="{'grey__lighten-5--text' : this.dark == true}">{{ title }}</h1>
      <slot />
    </div>
    <div class="item item__img flex cols jcc" :class="{ 'gap-3' : images.length > 1}">
      <img v-for="image in images" :key="image" :src="require(`@/assets/img/${image.image}`)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean | false,
    title: String,
    images: Array,
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/breakpoints';
  .container {
    justify-content: center;

    &.dark {
      padding-top: 7.5rem;
      padding-bottom: 7.5rem;
    }
  }

  .item {
    flex-wrap: wrap;

    &__text {
      max-width: 45%;

      &.center {
        max-width: 75%;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: $screen-medium) {

    .container {
      align-items: center;
      flex-wrap: wrap;

      .item {

        &__text {
          max-width: 100%;
        }
      }
    }
  }
</style>