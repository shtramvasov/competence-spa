<template >
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
</template>
<script>
import FeatureItem from '../FeatureItem/FeatureItem.vue';
export default {
    components: { FeatureItem }
}
</script>
<style lang="scss" scoped>
  .features {
    padding-top: 4rem;
  }
</style>