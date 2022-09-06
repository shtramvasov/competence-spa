<template >
  <div class="features flex cols gap-3 jcsb">
    <FeatureItem v-for="feature in features" :key="feature"
      :title="feature.title"
      :desc="feature.desc"
      :icon="feature.icon"
    />
  </div>
</template>
<script>
import FeatureItem from '../FeatureItem/FeatureItem';

export default {
    components: { FeatureItem },
    props: ['features']
}
</script>
<style lang="scss" scoped>
  .features {
    padding-top: 4rem;
  }
</style>