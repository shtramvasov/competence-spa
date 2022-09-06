<template>
  <div class="features gap-4 jcsb">
    <TabItem v-for="feature in features" :key="feature"
      :title="feature.title"
      :desc="feature.desc"
      :icon="feature.icon"
    />
  </div>
</template>
<script>
import TabItem from "../TabItem/TabItem";
export default {
    components: { TabItem },
    props: ['features']
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/breakpoints';

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: $screen-medium) {
    .features {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>