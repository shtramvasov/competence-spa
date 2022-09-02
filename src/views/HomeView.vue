<!-- 

  TODO:
    1. добавление опциональных компонентов через слот? или придумать другое решение

 -->


<template>
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Работа с документами никогда не была на столько простой'"
      :desc="'Управляйте документами и адаптируйтесь к нуждам вашей команды. Просто. Из любого места.'"
      :centered="true"
      
    >
    <CTAButtons class="jcc pb-120" :dark="true"/>
    <img src="@/assets/img/hero-inventory.gif" class="rounded flex self-center">
    </HeroSection>
  </section>
</template>

<script>
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection';
import CTAButtons from '@/components/CTAButtons/CTAButtons.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    HeroSection,
    CTAButtons
}
}
</script>
