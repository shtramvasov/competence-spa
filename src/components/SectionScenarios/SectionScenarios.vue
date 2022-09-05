<template>
  <section class="container dark grey__darken-4 rounded-lg flex cols">
    <div class="content text-centered flex cols jcc">
      <h1 class="grey__lighten-5--text">Интерактивные сценарии</h1>
      <p class="grey__darken-1--text pb-96">
        Используете сенсорные мониторы? С Competence вы можете создавать многослойные интерактивные сценарии без написания единой 
        строчки программного кода прямо в вашем личном кабинете.
      </p>
    </div>
    <div class="features flex gap-4 jcsb pb-64">
      <FeatureItem 
        :dark="true"
        :title="'Интерактивный каталог'"
        :icon="'feature-folder'"
        :desc="`Допродавайте и высвобождайте время линейного персонала в ваших точках продаж, 
                создавая интерактивные каталоги с возможностью самостоятельного просмотра товара и оформления покупки.`"
      />
      <FeatureItem 
        :dark="true"
        :title="'Обратная связь'"
        :icon="'feature-info'"
        :desc="`Избавьтесь от бумажных носителей и перенесите всю важную информацию в открытый доступ на сенсорные мониторы. 
                Собирайте актуальную обратную связь с ваших клиентов и посетителей.`"
      />
      <FeatureItem 
        :dark="true"
        :title="'Геймификация'"
        :icon="'feature-gaming'"
        :desc="`Создавайте и используйте игровые сценарии для повышения вовлеченности ваших клиентов и сотрудников, проведения 
                онлайн обучений, организации промо акций и пр.`"
      />
    </div>
    <img class="image inner-wrapper mb-24" src="@/assets/img/scenarios.png" alt="Интерактивные сценарии">
    <p class="grey__darken-1--text text-centered">Есть другие идеи? Что ж, вы ограничены только своим воображением. Инструмент у вас уже есть.</p>
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

  .container {
  padding: 7.5rem 4.5rem 7.5rem;

    .content {
      p {
        max-width: 75%;
      }
    }
  }

  @media (max-width: $screen-medium) {
    .features {
      flex-wrap: wrap;
    }

    .image {
      padding: 0;
    }
  }

  @media (max-width: $screen-small) {
    .container {
      
      p {
        text-align: left;
      }
      .content {
        p {
          max-width: 100%;
        }
    }
  }
}
</style>