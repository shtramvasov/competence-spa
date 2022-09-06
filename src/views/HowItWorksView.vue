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
    <Card
      class="mb-120"
      :title="'Отправляйте готовый сценарий на экран или группу экранов.'"
      :images="[{ image: 'group-phone.png' }, { image: 'splitter.svg' }, { image: 'group-screen.png' }]"
    >
    <p class="light grey__darken-4--text">
      Делайте это в один клик в любое время и из любого места с помощью интернет технологий. Будьте уверены, 
      он начнет загружаться на ваших экранах мгновенно независимо от того, как далеко от вас они расположены.
    </p>
    </Card>
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Card from '@/components/Card/Card';
export default {
  name: 'HowItWorksView',
  components: {
    Header,
    HeroSection,
    Card
}
}
</script>

<style lang="scss" scoped>
  
</style>