<template>
  <div class="items flex gap-1">
    <img :src="require(`@/assets/img/icons/icon-${icon}.svg`)" :alt="title">
    <div>
      <p class="bold blue-grey__darken-4--text">{{ title }}</p>
      <p class="grey__darken-1--text description">{{ desc }}</p>
    </div>
  </div>
</template>
<script>
export default {
    props: {
    title: String,
    desc: String,
    icon: String,
  }
}
</script>
<style lang="scss" scoped>
  .items {
    align-items: start;
  }

</style>