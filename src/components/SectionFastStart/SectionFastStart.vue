<template>
  <section class="container inner-wrapper grey__lighten-3 elevation-1 rounded-lg flex cols jcc">
    <h1 class="mb-200 center">Быстрый старт с нашими решениями</h1>
    <div class="links gap-2">
      <LinkCard 
        :title="'Ритейл Бриф'"
        :desc="`Увеличивайте траффик и средний чек в вашем магазине, комбинируя горячие предложения с удобным 
                контролем документов и удаленным управлением.`"
        :img="'retail'"
        :link="'retail'"
      />
      <LinkCard 
        :title="'Банки'"
        :desc="`Сокращайте время ожидания, внедряя интерактивные инструменты самообслуживания в офисах продаж. 
                Улучшайте клиентский опыт, транслируя полезную информацию, биржевые новости и прогнозы.`"
        :img="'banking'"
        :link="'banking'"
      />
      <LinkCard 
        :title="'Корпоративные проекты'"
        :desc="`Вовлекайте сотрудников создавая эффективный канал коммуникации внутри корпоративной среды.`"
        :img="'corporate'"
        :link="'corporate'"
      />
      <LinkCard 
        :title="'ХоРеКа'"
        :desc="`Меняйте меню в своем ресторане, не выходя из дома и не тратя время своих сотрудников. 
                Информируйте гостей вашего отеля о дополнительных услугах.`"
        :img="'horeka'"
        :link="'hospitality'"
      />
    </div>
  </section>
</template>
<script>
import LinkCard from '../LinkCard/LinkCard.vue';
export default {
    components: { LinkCard }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/sass/breakpoints';

  .container {
    padding: 7.5rem 4.5rem 7.5rem;
  }

  .links {
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: $screen-medium) {
    h1 {
      margin-bottom: 5rem;
    }

    .links {
      display: flex;
      flex-direction: column;
    }

  }
</style>