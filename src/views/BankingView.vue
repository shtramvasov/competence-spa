<template >
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Гибкое и безотказное решение для банковской сферы'"
      :desc="`Выстраивайте эффективную цифровую коммуникацию с посетителями филиалов в любое время и из любого места.`"
      :img="'hero-banking'"
      :cta="'Попробуйте бесплатно'"
      class="mb-300"
    />
    <section class="inner-wrapper mb-300">
      <h1 class="pb-80">Выгоды и возможности</h1>
      <BlockTabsList :features="features"/>
    </section>
    <Card
      :dark="true"
      :title="'Как это работает?'"
      :images="[{ image: 'group-phone.png' }, { image: 'splitter-white.svg' }, { image: 'group-screen.png' }]"
      class="mb-200"
    >  
    <div class="content flex cols gap-3">
      <div class="flex cols gap-0-5">
        <p class="bold grey__lighten-5--text">С вашего компьютера</p>
        <p class="grey__darken-1--text">Создавайте плейлисты и управляйте вашими документами в любом браузере на любом компьютере или планшете.</p>
      </div>
      <div class="flex cols gap-0-5">
        <p class="bold grey__lighten-5--text">На ваши экраны</p>
        <p class="grey__darken-1--text">Готовые документы будут автоматически появляться на ваших экранах, где бы они не находились.</p>
      </div>
      <CTAButtons :dark="true" class="pb-64"/>
    </div>
    </Card>
    <SectionSupport class="mb-200"/>
    <SectionCTA class="mb-340"/>
    <Footer />
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import BlockTabsList from '../components/BlockTabsList/BlockTabsList';
import Card from '@/components/Card/Card';
import CTAButtons from '@/components/CTAButtons/CTAButtons';
import SectionSupport from '@/components/SectionSupport/SectionSupport';
import SectionCTA from '@/components/SectionCTA/SectionCTA';
import Footer from '@/components/Footer/Footer';
export default {
    components: { Header, HeroSection, BlockTabsList, Card, CTAButtons, SectionSupport, SectionCTA, Footer },
    data() {
      return {
        features:
        [
          {
            title: 'Сокражения издержек', 
            desc: `Избавьтесь от постоянных расходов на производство и размещение печатных рекламных материалов и легальной документации. 
                  Просто за пару минут разошлите нужный файл всем филиалам.`, 
            icon: 'tab-percent',
          },
          {
            title: 'Быстрое обслуживание', 
            desc: `Уменьшайте время ожидания клиентов в очереди, внедряя интерактивные инструменты самообслуживания в филиалах. 
                  Отвечайте на большинство вопросов без участия сотрудников.`, 
            icon: 'tab-time',
          },
          {
            title: 'Увеличение траффика', 
            desc: `Получайте новых клиентов, транслируя свои мощнейшие предложения на экранах в витринах.`, 
            icon: 'tab-person',
          },
          {
            title: 'Успех брэнда', 
            desc: `Имидж имеет значение. Формируйте образ брэнда, как одного из самых передовых и высокотехнологичных на рынке, 
                  используя современные инструменты коммуникации с клиентами.`, 
            icon: 'tab-star',
          },
          {
            title: 'Интерактивные возможности', 
            desc: `Получайте заявки по продуктам и актуальную обратную связь от клиентов через внедрение интерактивных 
                  сценариев на сенсорных панелях в отделениях банка.`, 
            icon: 'tab-finger',
          },
          {
            title: 'Улучшение клиентского опыта', 
            desc: `Создавайте и своевременно обновляйте полезный информационный поток для посетителей филиалов. 
                  Чередуйте рекламу в  с новостями, погодой и другим контентом.`, 
            icon: 'tab-smile',
          },
        ]
      }
    }
}
</script>
<style lang="scss" scoped>
  .content {
    padding-top: 6rem;
  }
</style>