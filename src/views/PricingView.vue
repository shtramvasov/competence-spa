<template>
  <section>
    <Header :background="'white'"/>
    <HeroSection 
      :title="'Информация о тарифных планах'"
      :desc="'Начните строить свою сеть digital signage бесплатно, затем переходите на свой тариф и добавляйте столько экранов, сколько вам требуется.'"
      class="hero mb-120"
    >
    <SectionTariffs />
    </HeroSection>
    <Card
      class="mb-200"
      :title="'Мы готовы к локальному использованию'"
      :images="[{ image: 'card-pricing.png' }]"
    >
    <p class="light grey__darken-1--text pb-48">
      Если по каким-то причинам вы не хотите использовать облачное решение с повторяющимися платежами, а предпочитаете 
      развернуть нашу систему на месте, мы готовы предложить вам этот вариант на условиях неисключительной лицензии. 
      Для получения подробной информации, пожалуйста, свяжитесь с нашим отделом продаж.
    </p>
    <router-link :to="{name: 'sign-in'}"><button class="button grey__lighten-5--text">Свяжитесь с нами</button></router-link>
    </Card>
    <SectionCTA class="mb-340"/>
    <Footer />
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Card from '@/components/Card/Card';
import SectionCTA from '@/components/SectionCTA/SectionCTA';
import Footer from '@/components/Footer/Footer';
import SectionTariffs from '@/components/SectionTariffs/SectionTariffs';
export default {
    components: { Header, HeroSection, Card, SectionCTA, Footer, SectionTariffs }
}
</script>
<style lang="scss" scoped>
  .hero::v-deep .item__text {
    max-width: 70%;
  }
</style>