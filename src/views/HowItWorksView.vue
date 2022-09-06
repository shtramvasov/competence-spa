<template>
  <section>
    <Header />
    <HeroSection
      :dark="true"
      :title="'Как это работает?'"
      :desc="`Все, что вам нужно, это компьютер или планшет,подключенный к интернету, и несколько минут 
              свободного времени. Остальное за вас сделает магия Competence.`"
      :img="'hero-how-it-works'"
      class="mb-300"
    >
    </HeroSection>
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
export default {
  name: 'HowItWorksView',
  components: {
    Header,
    HeroSection
}
}
</script>

<style lang="scss" scoped>
  
</style>