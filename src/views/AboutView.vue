<template >
  <section class="about">
    <Header :background="'white'" />
    <HeroSection 
      :title="'Кто мы'"
      :desc="`Competence это международная IT команда, базирующаяся в нескольких локациях по всему миру. 
              Наш ключевой продукт называется Competence digital signage сервис. Это отмеченное наградами 
              простое и надежное программное решение для удаленного управления документами вашей организации 
              различного масштаба и назначения, к примеру, рекламные мониторы в супермаркетах или цифровые 
              меню в ресторанах быстрого питания. Оно позволяет транслировать  медиа, будь то аудио, видео, 
              динамические потоки или интерактивные сценарии в неограниченном кол-ве локаций в любое время и из любого места.`"
      :img="'hero-about'"
    >
    <BlockStats class="mb-96"/>
    </HeroSection>
    <Card
      class="mb-200"
      :dark="true"
      :title="'Что мы делаем'"
      :images="[{ image: 'about-us.gif' }]"
    >
    <p class="light grey__darken-1--text">
      Мы помогаем малому и среднему бизнесу строить умный канал коммуникации со своей аудиторией в любое время 
      и из любого места, предоставляя им простой и надежный инструмент, который экономит их деньги и время, по вполне разумной цене.
    </p>
    <p class="accented light grey__lighten-4--text">
      Мы помогаем малому и среднему бизнесу строить умный канал коммуникации со своей аудиторией в любое время 
      и из любого места, предоставляя им простой и надежный инструмент, который экономит их деньги и время, по вполне разумной цене.
    </p>
    <p class="light grey__darken-1--text">
      Нам нравится думать, что мы помогаем таким же, как мы, предпринимателям сберегать свою энергию для того, 
      чтобы сосредоточиться на том, что действительно важно.
    </p>
    </Card>
    <SectionCTA class="mb-340"/>
    <Footer />
  </section>
</template>
<script>
import HeroSection from '@/components/HeroSection/HeroSection';
import Header from '@/components/Header/Header';
import BlockStats from '../components/BlockStats/BlockStats';
import Card from '@/components/Card/Card';
import SectionCTA from '@/components/SectionCTA/SectionCTA';
import Footer from '@/components/Footer/Footer';
export default {
    components: { HeroSection, Header, BlockStats, Card, SectionCTA, Footer }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/colors';

  .accented {
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-left: 4px solid $green-lighten-2;
  }

  .about::v-deep .container {
    p {
      padding-bottom: 1.5rem;
    }
  }

</style>