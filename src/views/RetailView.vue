<template >
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Надежное решение для розничных магазинов'"
      :desc="`Заранее планируйте ваши акции и управляйте их трансляцией в любое время и из любого места.`"
      :img="'hero-retail'"
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
            desc: `Избавьтесь от постоянных расходов на производство и размещение печатных рекламных материалов. 
                  Просто создайте новый макет и за пару минут разошлите его по всем своим экранам.`, 
            icon: 'tab-percent',
          },
          {
            title: 'Рост продаж', 
            desc: `Внедрение системы digital signage повышает общие продажи в розничном магазине в среднем на 32%. 
                  Используйте красивый продающий контент, рассказывайте истории, вовлекайте.`, 
            icon: 'tab-upstream',
          },
          {
            title: 'Больше покупок', 
            desc: `Около 20% людей заявили, что совершили незапланированную покупку под влиянием цифровых экранов. 
                  Растите покупательский чек, публикуя ваши промо в правильное время.`, 
            icon: 'tab-blocks',
          },
          {
            title: 'Доходы от рекламы', 
            desc: `Привлекайте бюджеты от сторониих рекламодателей, предоставляя уникальные возможности 
                  размещения на рекламных поверхностях качественно нового уровня.`, 
            icon: 'tab-star',
          },
          {
            title: 'Интерактивный опыт', 
            desc: `Делайте дополнительные продажи в вашем магазине и получайте актуальную обратную связь 
                  от ваших покупателей через внедрение интерактивных сценариев на сенсорных панелях.`, 
            icon: 'tab-finger',
          },
          {
            title: 'Нет человеческого фактора', 
            desc: `Исключите сотрудников магазина из процесса смены акций. Планируйте их заранее и загружайте удаленно. 
                  Отслеживайте статус загрузки и статистику проигрываний.`, 
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