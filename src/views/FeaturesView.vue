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
    <div class="features flex cols gap-3 jcsb">
      <FeatureItem 
        :title="'Настраиваемые области'"
        :desc="`Делите экран на несколько областей с легко настраиваемыми размерами и 
                используйте различные единицы контента в каждой из них одновременно.`"
        :icon="'feature-layers'"
      />
      <FeatureItem 
        :title="'Встроенный графический редактор'"
        :desc="`Выбирайте цвет, размер и степень прозрачности для слоев, полей и шрифтов. 
                Задавайте скорость и направление движения для бегущей строки.`"
        :icon="'feature-pencil'"
      />
      <FeatureItem 
        :title="'Сцены'"
        :desc="`Создавайте несколько сцен в рамках одного макета, устанавливайте условия перехода 
                между ними, делайте свои сценарии многостраничными.`"
        :icon="'feature-scene'"
      />
      <FeatureItem 
        :title="'Адаптивность'"
        :desc="`Создавайте адаптивные макеты, которые выглядят одинаково отлично на экранах с 
                разными разрешениями, соотношением сторон и ориентацией.`"
        :icon="'feature-adapt'"
      />
    </div>
    </Card>
  </section>
</template>
<script>
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';
import Card from '@/components/Card/Card';
import FeatureItem from '@/components/FeatureItem/FeatureItem';
export default {
    name: "FeaturesView",
    components: { Header, HeroSection, Card, FeatureItem, FeatureItem }
}
</script>
<style lang="scss" scoped>
  .features {
    padding-top: 4rem;
  }
</style>