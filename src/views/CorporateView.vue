<template >
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Простое решение для построения корпоративного ТВ️'"
      :desc="`Создавайте и поддерживайте канал коммуникации с вашими сотрудниками в любое время и из любого места.`"
      :img="'hero-corporate'"
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
            title: 'Единое поле', 
            desc: `Создавайте и своевременно обновляйте корпоративный инфо канал с последними бизнес новостями, 
                  репортажами с корпоративных событий, результатами внутренних спортивных состязаний и прочим.`, 
            icon: 'tab-screen',
          },
          {
            title: 'Быстрое обслуживание', 
            desc: `Уменьшайте время ожидания клиентов в очереди, внедряя интерактивные инструменты самообслуживания в филиалах. 
                  Отвечайте на большинство вопросов без участия сотрудников.`, 
            icon: 'tab-time',
          },
          {
            title: 'Команда с историей', 
            desc: `Не забывайте поздравлять сотрудников с Днями рождения и проф. юбилеями, попутно напоминая о них другим коллегам. 
                  Рассказывайте о продвижениях и представляйте новичков.`, 
            icon: 'tab-person',
          },
          {
            title: 'Повышение вовлеченности', 
            desc: `Рассказывайте сотрудникам о ключевых принципах и глобальных целях компании. 
                  Делитесь достижениями. Вызывайте чувство сопричастности к общим победам.`, 
            icon: 'tab-star',
          },
          {
            title: 'Экстренные новости', 
            desc: `В случае необходимости, рассылайте экстренные сообщения на все экраны единовременно в один клик. 
                  Мгновенно прерывайте плановую трансляцию горячими новостями.`, 
            icon: 'tab-news',
          },
          {
            title: 'Бронирование переговорок', 
            desc: `Удаленно управляйте статусом бронирования переговорок и конференц-залов. 
                  Изменяйте статус в режиме реального времени или составляйте расписание заранее.`, 
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