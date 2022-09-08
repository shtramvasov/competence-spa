<template >
  <section class="tariffs flex jcc gap-6">
    <BlockTariff v-for="plan in plans" :key="plan" :plan="plan"/>
  </section>
</template>
<script>
import BlockTariff from '../BlockTariff/BlockTariff';
export default {
    data() {
        return {
          plans: {
                beginner: {
                name: "Начальный",
                price: 799,
                screen: 5,
                storage: 35,
                savings: 10
            },

            buisness: {
                name: "Бизнес",
                price: 1800,
                screen: 10,
                storage: 120,
                savings: 15
            },
            pro: {
                name: "Про",
                price: 4500,
                screen: 'Безлимитно',
                storage: 1024,
                savings: 20
            },
          }
        };
    },
    components: { BlockTariff }
}
</script>
<style lang="scss" scoped>
  .tariffs {
    flex-wrap: wrap;
  }

</style>