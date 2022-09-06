<template>
  <section class="inner-wrapper">
    <div class="container green__lighten-2 rounded-lg elevation-1">
      <Card 
        class="item"
        :title="'Попробуйте Competence прямо сейчас'"
        :images="[{ image: 'section-cta.png' }]"
      >
        <CTAButtons :dark="true" />
      </Card>
    </div>
  </section>
</template>
<script>
import CTAButtons from '../CTAButtons/CTAButtons.vue';
import Card from '../Card/Card.vue';
export default {
    components: { CTAButtons, Card }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/colors';
  @import '@/assets/sass/breakpoints';

  .container {
    padding: 1.5rem;
    background-position: bottom 10px right 20px;
    position: relative;
  }

  .container::v-deep h1 {
    color: $grey-lighten-5;
    max-width: 70%;
    padding-bottom: 4rem;
  }

  .container::v-deep .container {
    align-items: center;
  }

</style>