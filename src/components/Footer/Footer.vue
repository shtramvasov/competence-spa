<template>
  <section class="footer grey__darken-4 rounded-lg">
    <div class="container flex jcsb mb-200 gap-6">
      <div class="navigation flex gap-4">
        <div class="item flex cols gap-1">
          <p class="bold grey__lighten-5--text">Продукт</p>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'how-it-works'}">Как это работает</router-link>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'features'}">Функционал</router-link>
        </div>
        <div class="item flex cols gap-1">
          <p class="bold grey__lighten-5--text">Решения</p>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'retail'}">Ритейл</router-link>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'banking'}">Банки</router-link>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'corporate'}">Корпоративные проекты</router-link>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'hospitality'}">ХоРеКа</router-link>
        </div>
        <div class="item flex cols gap-1">
          <p class="bold grey__lighten-5--text">Компания</p>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'about'}">О нас</router-link>
          <router-link class="blue-grey__darken-1--text" :to="{name: 'partnership'}">Партнерская программа</router-link>
        </div>
      </div>
      <div class="contacts flex cols gap-1">
        <div class="socials flex vcenter gap-1-5">
          <router-link to="#"><img src="@/assets/img/icons/icon-insta.svg" alt="Instagram"></router-link>
          <router-link to="#"><img src="@/assets/img/icons/icon-fb.svg" alt="Facebook"></router-link>
          <router-link to="#"><img src="@/assets/img/icons/icon-twitter.svg" alt="Twitter"></router-link>
          <router-link to="#"><img src="@/assets/img/icons/icon-linked.svg" alt="LinkedIn"></router-link>
          <router-link to="#"><img src="@/assets/img/icons/icon-youtube.svg" alt="Youtube"></router-link>
        </div>
        <p class="description grey__darken-1--text">Россия, Москва, Пресненская наб.,21 оф. 2011</p>
        <router-link to="#" class="description grey__darken-1--text">contact@competence.com</router-link>
      </div>
    </div>
    <div class="copyright flex center vcenter">
      <img src="@/assets/img/logo-white.svg" alt="Competence">
      <p class="description grey__darken-1--text">© 2022 Competence DS LLC. All rights reserved.</p>
    </div>
  </section>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '@/assets/sass/colors';
  @import '@/assets/sass/breakpoints';

  .footer {
    padding: 5.5rem 9rem 3rem;
  }

  .container, .navigation{
    flex-wrap: wrap;
  }

  .copyright {

    * {
      flex: 1;
    }
  }
  @media (max-width: $screen-small) {
    .copyright, .navigation {
      flex-direction: column;
      gap: 3rem;
    }
  }

  @media (max-width: $screen-phone) {
    .container {
      justify-content: center;
    }
  }
</style>