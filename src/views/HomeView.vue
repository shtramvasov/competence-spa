<!-- 

  TODO:
    1. добавление опциональных компонентов через слот? или придумать другое решение

 -->


<template>
  <section>
    <Header />
    <HeroSection 
      :title="'Работа с документами никогда не была на столько простой'"
      :desc="'Управляйте документами и адаптируйтесь к нуждам вашей команды. Просто. Из любого места.'"
      :dark="true"

      :img="'hero-how-it-works.png'"
    >
    </HeroSection>
  </section>
</template>

<script>
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection';
export default {
  name: 'HomeView',
  components: {
    Header,
    HeroSection
}
}
</script>
