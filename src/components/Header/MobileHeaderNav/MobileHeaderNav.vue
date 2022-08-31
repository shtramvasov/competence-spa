<template>
  <div class="mobile-nav" v-show="mobileNav">
    <nav class="flex gap-4">
      <div class="flex cols gap-1-5">
        <p>Продукт</p>
        <ul class="flex cols gap-1">
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'how-it-works'}">Как это работает</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'features'}">Функционал</router-link>
        </ul>
      </div>
      <div class="flex cols gap-1-5">
        <p>Решения</p>
        <ul class="flex cols gap-1">
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'retail'}">Ритейл</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'banking'}">Банки</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'corporate'}">Корп.</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'hospitality'}">ХоРеКа</router-link>
        </ul>
      </div>
      <div class="flex cols gap-1-5">
        <p>Компания</p>
        <ul class="flex cols gap-1">
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'about'}">О нас</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'partnership'}">Партнерская программа</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'contacts'}">Контакты</router-link>
        </ul>
      </div>
      <div class="flex cols gap-1-5">
        <p>Вступить</p>
        <ul class="flex cols gap-1">
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'sign-in'}">Войти</router-link>
          <router-link class="description blue-grey__darken-4--text" :to="{name: 'sign-up'}">Начать Бесплатно</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MobileHeaderNav',
  props: {
    mobileNav: Boolean
  },
}
</script>

<style lang="scss" scoped >
@import '@/assets/sass/colors';
@import '@/assets/sass/breakpoints';

.mobile-nav {
  position: absolute;
  background-color: $grey-lighten-4;
  top: 75;
  height: 100vh;
  width: 100vw;

  nav {
    padding-top: 4rem;
    max-width: 80%;
    flex-wrap: wrap;
    justify-content: center;

    a {
      &:hover {
        color: $indigo;
      }
    }
  }
}

@media (max-width: $screen-phone) {
  .mobile-nav {
  nav {
    flex-direction: column;
    padding: 4rem;
    gap: 2.5rem;

    div {
      gap: 1rem;
      ul {
        gap: 0.5rem;
      }
    }
  }
  }
}
</style>