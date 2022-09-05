<template>
  <section>
    <Header />
    <HeroSection 
      :dark="true"
      :title="'Работа с документами никогда не была на столько простой'"
      :desc="'Управляйте документами и адаптируйтесь к нуждам вашей команды. Просто. Из любого места.'"
      :centered="true"
      class="mb-340"
    >
    <CTAButtons class="jcc pb-120" :dark="true"/>
    <img src="@/assets/img/hero-inventory.gif" class="rounded flex self-center pb-64">
    <div class="clients flex jcsb">
      <img src="@/assets/img/client-salamander.svg" alt="Саламандр">
      <img src="@/assets/img/client-askona.svg" alt="Аскона">
      <img src="@/assets/img/client-gazprom.svg" alt="Газпрос">
      <img src="@/assets/img/client-rosatom.svg" alt="Росатом">
      <img src="@/assets/img/client-spar.svg" alt="Спар">
      <img src="@/assets/img/client-mars.svg" alt="Марс">
    </div>
    </HeroSection>
    <section>
      <Card 
        class="mb-300"
        :title="'Документ для всех'"
        :images="[{ image: 'the-doc-for-everyone.gif' }]"
      >
      <p class="light grey__darken-4--text">
        Competence ощущается знакомо как .doc и интерактивно как приложение, поэтому вы можете сразу приступить к работе, 
        начать эффективное и принимать решения.
      </p>
      </Card>
      <Card 
        class="mb-300"
        :title="'В одном ритме с командой'"
        :images="[{ image: 'fit-your-team.gif' }]"
      >
      <p class="light grey__darken-4--text">
        Если команда растет или планы меняются, вы можете использовать «строительные блоки» для безшовной эволюции документа.
      </p>
      </Card>
      <Card 
        class="mb-300"
        :title="'Доступ ко всему'"
        :images="[{ image: 'all-access.gif' }]"
      >
      <p class="light grey__darken-4--text">
        Автоматически синхронизируйте ваши дела в Google Calendar, обновления в Slack, Jira Issues и контролируйте их изменения.
      </p>
      </Card>
    </section>
    <SectionScenarios class="mb-300"/>
    <SectionFastStart class="mb-200"/>
    <Card 
      class="mb-340"
      :title="'Бесплатные приложения'"
      :images="[{ image: 'free-app.png' }]"
    >
    <p class="grey__darken-1--text pb-48">
      Быстро создавайте вовлекающий динамический контент на основе социальных сетей, развлекательных каналов, 
      новостных лент или информационных сервисов непосредственно в личном кабинете Competence. Размещайте его в 
      конкретных областях экрана или внутри ваших документов в сочетании с другими единицами контента.
    </p>
    <CTAButtons />
    </Card>
  </section>
</template>

<script>
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/HeroSection';
import CTAButtons from '@/components/CTAButtons/CTAButtons';
import Card from '@/components/Card/Card';
import SectionScenarios from '@/components/SectionScenarios/SectionScenarios';
import SectionFastStart from '@/components/SectionFastStart/SectionFastStart';
export default {
  name: 'HomeView',
  components: {
    Header,
    HeroSection,
    CTAButtons,
    Card,
    SectionScenarios,
    SectionFastStart,
    CTAButtons
}
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/breakpoints';

@media (max-width: $screen-medium) {
  .clients {
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  }
}
</style>
