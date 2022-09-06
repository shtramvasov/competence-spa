<template >
  <div class="flex cols gap-0-5" :class="{ 'text-centered' : tab }">
    <img :src="require(`@/assets/img/icons/icon-${icon}.svg`)" :alt="title">
    <p v-show="tab" class="bold blue-grey__darken-4--text">{{ title }}</p>
    <p v-show="tab" class="grey__darken-1--text description">{{ desc }}</p>
    <h3 v-show="!tab" :class="{'grey__lighten-5--text' : this.dark == true}">{{ title }}</h3>
    <p v-show="!tab" class="grey__darken-1--text light">{{ desc }}</p>
  </div>
</template>
<script>
export default {
  props: {
    dark: Boolean | false,
    tab: Boolean | false,
    title: String,
    desc: String,
    icon: String,
  }
}
</script>