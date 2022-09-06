<template>
  <section class="inner-wrapper">
    <div class="features grey__lighten-5 rounded-lg elevation-1 jcc gap-4">
      <FeatureItem
        :tab="true"
        :icon="'tab-4k'"
        :title="`Поддержка 4К`"
        :desc="`Если ваш девайс поддерживает 4K, Competence покажет контент именно в этом разрешении.`"
      />
      <FeatureItem
        :tab="true"
        :icon="'tab-folders'"
        :title="`Группировка экранов`"
        :desc="`Группируйте экраны, исходя из их назначения, чтобы проигрывать на них идентичные сценарии.`"
      />
      <FeatureItem
        :tab="true"
        :icon="'tab-settings'"
        :title="`Настройки экранов`"
        :desc="`Удаленно изменяйте ориентацию, устанавливайте спящий режим, время перезагрузки и пр.`"
      />
      <FeatureItem
        :tab="true"
        :icon="'tab-radio'"
        :title="`Виджеты`"
        :desc="`Добавляйте погоду, RSS потоки, текст или бегущие строки, время или изображения поверх ваших плейлистов.`"
      />
      <FeatureItem
        :tab="true"
        :icon="'tab-blocks'"
        :title="`Фильтрация и теги`"
        :desc="`Быстро находите конкретный экран или группу контента. Проверяйте статус работы сети.`"
      />
      <FeatureItem
        :tab="true"
        :icon="'tab-chart'"
        :title="`Стастистика`"
        :desc="`Отслеживайте и скачивайте статистику по показам контента в ваших документах.`"
      />
    </div>
  </section>
</template>
<script>
import FeatureItem from '../FeatureItem/FeatureItem';
export default {
    components: { FeatureItem }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/breakpoints';

  .features {
    padding: 3.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 5rem;
  }

  @media (max-width: $screen-medium) {
    .features {
      display: flex;
      flex-direction: column;
    }
  }
  
</style>