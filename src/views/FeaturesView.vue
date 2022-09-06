<template>
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Решение для ваших проектов'"
      :desc="`Создавайте яркие захватывающие кейсы с помощью полнофункционального облачного инструмента, 
              способного обеспечить вам выдающийся пользовательский опыт.`"
      :img="'hero-features'"
      class="mb-300"
    />
    <Card
      class="mb-200"
      :title="'Дизайнер макетов'"
      :images="[{ image: 'features-hub.png' }, { image: 'features-plan.gif' }]"
    >
    <p class="light grey__darken-1--text">
      Гибко настраиваемый инструмент, с помощью которого вы можете поделить экран на несколько 
      областей и создать уникальный макет для вашей команды.
    </p>
    <BlockFeaturesList />
    </Card>
    <SectionFeaturesTabs class="mb-200"/>
    <SectionCTA class="mb-340"/>
    <Footer />
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Card from '@/components/Card/Card';
import FeatureItem from '@/components/FeatureItem/FeatureItem';
import SectionFeaturesTabs from '../components/SectionFeaturesTabs/SectionFeaturesTabs';
import BlockFeaturesList from '@/components/BlockFeaturesList/BlockFeaturesList';
import SectionCTA from '@/components/SectionCTA/SectionCTA';
import Footer from '@/components/Footer/Footer';
export default {
    name: "FeaturesView",
    components: { Header, HeroSection, Card, FeatureItem, FeatureItem, SectionFeaturesTabs, BlockFeaturesList, SectionCTA, Footer }
}
</script>
<style lang="scss" scoped>

</style>