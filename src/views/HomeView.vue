<template>
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Работа с документами никогда не была на столько простой'"
      :desc="'Управляйте документами и адаптируйтесь к нуждам вашей команды. Просто. Из любого места.'"
      :centered="true"
      class="mb-340"
    >
    <CTAButtons class="jcc pb-120" :dark="true"/>
    <img src="@/assets/img/hero-inventory.gif" class="rounded flex self-center pb-64">
    <div class="clients flex jcsb">
      <img src="@/assets/img/client-salamander.svg" alt="Саламандр">
      <img src="@/assets/img/client-askona.svg" alt="Аскона">
      <img src="@/assets/img/client-gazprom.svg" alt="Газпрос">
      <img src="@/assets/img/client-rosatom.svg" alt="Росатом">
      <img src="@/assets/img/client-spar.svg" alt="Спар">
      <img src="@/assets/img/client-mars.svg" alt="Марс">
    </div>
    </HeroSection>
  </section>
</template>

<script>
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection';
import CTAButtons from '@/components/CTAButtons/CTAButtons';
export default {
  name: 'HomeView',
  components: {
    Header,
    HeroSection,
    CTAButtons
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/breakpoints';

@media (max-width: $screen-medium) {
  .clients {
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  }
}
</style>
