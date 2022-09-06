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
    <section class="inner-wrapper mb-300">
      <div class="features grey__lighten-5 rounded-lg elevation-1 flex jcc ">
        <FeatureItem
          :tab="true"
          :icon="'tab-server'"
          :title="`Безопасное движение и хранение вашего контента обеспечивает управляющий облачный сервер на базе AWS`"
          :desc="`Это важно, знать, за безопасность вашей информации отвечает один из мировых лидеров в сфере облачных 
                  решений. Кроме того, его серверные мощности позволяют масштабировать ваш проект до любых размеров 
                  и в любой момент времени.`"
        />
      </div>
    </section>
    <SectionCTA class="mb-340"/>
    <Footer />
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Card from '@/components/Card/Card';
import FeatureItem from '@/components/FeatureItem/FeatureItem';
import SectionCTA from '@/components/SectionCTA/SectionCTA';
import Footer from '@/components/Footer/Footer';
export default {
  name: 'HowItWorksView',
  components: {
    Header,
    HeroSection,
    Card,
    FeatureItem,
    SectionCTA,
    Footer
}
}
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/breakpoints';

  .features {
    padding: 3.5rem;
  }

  @media (max-width: $screen-medium) {
    .features {
      padding: 3.5rem;
    }
  }
</style>