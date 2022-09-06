<template >
  <section>
    <Header />
    <HeroSection
      :dark="true"
      :centered="true"
      :title="'Партнерская программа Competence'"
      :desc="'Партнерская программа Competence создана, как для действующих игроков отрасли, так и для ее новичков.'"
      :cta="'Оставить запрос'"
      class="mb-300"
    >
    <img src="@/assets/img/hero-partnership.png" class="hero-img rounded flex self-center">
    </HeroSection>
    <Card
      class="mb-200"
      :title="'Что вы получаете'"
      :images="[{ image: 'profits.png' }]"
    >
    <BlockFeaturesList :features="features" class="mb-200"/>
  </Card>
  <SectionCTA class="mb-340"/>
  <Footer />
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Card from '@/components/Card/Card';
import BlockFeaturesList from '@/components/BlockFeaturesList/BlockFeaturesList';
import SectionCTA from '@/components/SectionCTA/SectionCTA';
import Footer from '@/components/Footer/Footer';
export default {
    components: { Header, HeroSection, Card, BlockFeaturesList, SectionCTA, Footer },
    data() {
      return {
        features:
        [
          {
            title: 'Кастомизированный интерфейс', 
            desc: `Ваши клиенты будут использовать платформу под вашим брэндом и на вашем домене.`, 
            icon: 'feature-star',
          },
          {
            title: 'Партнерский кабинет', 
            desc: `Мы предоставляем доступ к Партнерскому кабинету для управления балансом и клиентскими аккаунтами.`, 
            icon: 'feature-tree',
          },
          {
            title: 'Встроенный биллинг', 
            desc: `Вы можете подключить ваши аккаунты Stripe или PayPal для автоматического получения платежей от ваших клиентов.`, 
            icon: 'feature-setting',
          },
          {
            title: 'Партнерская скидка', 
            desc: `Для наших парнеров мы предлагаем увеличенную скидку, которая будет автоматически применяться 
                  при каждом списании денежных средств с вашего баланса.`, 
            icon: 'feature-percent',
          },
          {
            title: 'Программный плеер', 
            desc: `Опционально мы можем разработать и разместить на вашем Play Store аккаунте программный 
                  плеер с вашим названием и логотипом.`, 
            icon: 'feature-play',
          },
        ]
      }
    
    }
}
</script>
<style lang="scss" scoped>
  .hero-img {
    margin-top: 6rem;
  }
</style>