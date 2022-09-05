<template >
  <div class="item grey__lighten-5 rounded elevation-2">
    <router-link :to="{name: link}">
      <div class="content flex vcenter gap-2">
        <img :src="require(`@/assets/img/${img}.png`)" :alt="title">
        <div>
          <h4 class="blue-grey__darken-4--text">{{ title }}</h4>
          <p class="grey__darken-1--text description">{{ desc }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
    props: {
    title: String,
    desc: String,
    img: String,
    link: String,
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/colors';
  @import '@/assets/sass/breakpoints';

  .item {
    padding: 1rem;
    transition: $transition;

    &:hover {
      box-shadow: 0px 3px 5px -1px rgba(155, 155, 155, 0.2), 0px 6px 10px rgba(155, 155, 155, 0.14), 0px 1px 18px rgba(155, 155, 155, 0.12);
    }
  }

  @media (max-width: $screen-phone) {
    .content {
      flex-direction: column;
    }
  }
</style>