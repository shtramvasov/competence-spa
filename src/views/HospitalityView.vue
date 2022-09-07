<template >
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Простое решение для отелей, кафе и ресторанов'"
      :desc="`Информируйте и развлекайте своих гостей в любое время и из любого места.`"
      :img="'hero-horeka'"
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
            title: 'Экономия времени', 
            desc: `Меняйте меню и спец. предложения во всех локациях в один клик. Сохраните свое время и время своих 
                  сотрудников для того, что действительно важно.`, 
            icon: 'tab-time',
          },
          {
            title: 'Сокращение издержек', 
            desc: `Избавьтесь от постоянных расходов на производство и размещение печатных меню и рекламных материалов. 
                  Просто создайте новый макет и за пару минут разошлите его.`, 
            icon: 'tab-percent',
          },
          {
            title: 'Увеличение среднего чека', 
            desc: `Повышайте клиентский чек за счет импульсных покупок на кассе ресторана или продаж доп. услуг отеля. 
                  Привлекайте бюджеты от сторониих рекламодателей.`, 
            icon: 'tab-upstream',
          },
          {
            title: 'Повышение лояльности гостей', 
            desc: `Создавайте и своевременно обновляйте полезный инфо-поток для ваших гостей. Чередуйте рекламу в ваших плейлистах с новостями, 
                  погодой и развлекательным контентом.`, 
            icon: 'tab-smile',
          },
          {
            title: 'Интерактивный опыт', 
            desc: `Сокращайте время обслуживания гостей и получайте от них атуальную обратную связь через внедрение 
                  интерактивных сценариев на сенсорных панелях.`, 
            icon: 'tab-finger',
          },
          {
            title: 'Навигация и бронирование', 
            desc: `Организуйте единую систему навигации для качественной регилировки гостевого траффика внутри вашего отеля. 
                  Удаленно управляйте статусом бронирования переговорок.`, 
            icon: 'tab-linked',
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