<template >
  <div class="flex cols gap-0-5">
    <img :src="require(`@/assets/img/icons/icon-${icon}.svg`)" :alt="title">
    <h3 :class="{'grey__lighten-5--text' : this.dark == true}">{{ title }}</h3>
    <p class="grey__darken-1--text light">{{ desc }}</p>
  </div>
</template>
<script>
export default {
  props: {
    dark: Boolean | false,
    title: String,
    desc: String,
    icon: String,
  }
}
</script>