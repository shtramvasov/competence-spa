<template>
  <section class="container inner-wrapper" :class="{ 'grey__darken-4 rounded-lg' : this.dark == true }">
    <div class="pb-120">
      <div class="hero-content flex jcsb gap-4">
        <div class="item item__text" :class="{'center' :this.centered == true }">
          <h1 :class="{'grey__lighten-5--text' : this.dark == true}">{{ title }}</h1>
          <p class="grey__darken-1--text pb-48">{{ desc }}</p>
          <router-link :to="{name: 'pricing'}">
            <button v-if="cta" :class="{ 'grey__lighten-4--text' : this.dark == true}">{{ cta }}</button>
          </router-link>
        </div>
        <div v-if="img" class="item item__img">
          <img :src="require(`@/assets/img/${this.img}`)">
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dark: Boolean | false,
    centered: Boolean | false,
    title: String,
    desc: String,
    img: String,
    cta: String
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors';
@import '@/assets/sass/breakpoints';

  .container {
    padding-top: 15rem;
    flex-wrap: wrap;
  }

  .hero-content {

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
  }

  @media (max-width: $screen-medium) {

    .hero-content {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      .item {

        &__text {
          max-width: 100%;
        }
      }
    }
  }

   @media (max-width: $screen-phone) {
    .container {
      padding-top: 10rem;
    }

    .hero-content {
      flex-direction: column-reverse;
    }
   }
</style>