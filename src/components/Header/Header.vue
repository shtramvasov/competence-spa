<template>
  <div class="container flex vcenter jcsb">
    <div class="navigation flex vcenter gap-3">
      <router-link :to="{name: 'home'}">
        <img src="@/assets/img/logo.svg" alt="Competence">
      </router-link>
      <nav class="flex">
        <div class="grey__darken-1--text dropdown-item" :class="{ active: activeIndex == 1 }" @click="toggleDropdown(1)">
          Продукт
          <ul class="grey__darken-1--text dropdown-content">
            <router-link class="description grey__darken-4--text" :to="{name: 'how-it-works'}">Как это работает</router-link>
            <router-link class="description grey__darken-4--text" :to="{name: 'features'}">Функционал</router-link>
          </ul>
        </div>
        <div class="grey__darken-1--text dropdown-item" :class="{ active: activeIndex == 2 }" @click="toggleDropdown(2)" >
          Решения
          <ul class="dropdown-content flex">
            <div class="item-title">
              <p class="bold grey__darken-4--text">Выберите свой бизнес.</p>
              <p class="description light">И узнайте как повысить эффективность</p>
            </div>
            <div class="item-links">
              <router-link class="description" :to="{name: 'retail'}">
                <div class="item-body flex vcenter gap-0-5">
                  <img src="@/assets/img/retail.png" alt="Ритейл">
                  Ритейл
                </div>
              </router-link>
              <router-link class="description" :to="{name: 'banking'}">
                <div class="item-body flex vcenter gap-0-5">
                  <img src="@/assets/img/banking.png" alt="Банки">
                  Банки
                </div>
              </router-link>
              <router-link class="description" :to="{name: 'corporate'}">
                <div class="item-body flex vcenter gap-0-5">
                  <img src="@/assets/img/corporate.png" alt="Корп.">
                  Корп.
                </div>
              </router-link>
              <router-link class="description" :to="{name: 'hospitality'}">
                <div class="item-body flex vcenter gap-0-5">
                  <img src="@/assets/img/horeka.png" alt="ХоРеКа">
                  ХоРеКа
                </div>
              </router-link>
            </div>
          </ul>
        </div>
        <div class="grey__darken-1--text dropdown-item" :class="{ active: activeIndex == 3 }" @click="toggleDropdown(3)">
          Компания
          <ul class="grey__darken-1--text dropdown-content">
            <router-link class="description grey__darken-4--text" :to="{name: 'about'}">О нас</router-link>
            <router-link class="description grey__darken-4--text" :to="{name: 'partnership'}">Партнерская программа</router-link>
            <router-link class="description grey__darken-4--text" :to="{name: 'contacts'}">Контакты</router-link>
          </ul>
        </div>
        <router-link class="dropdown-item grey__darken-1--text" :to="{name: 'pricing'}">Цены</router-link>     
      </nav>
    </div>
    <div class="buttons flex gap-1-5">
      <router-link :to="{name: 'sign-in'}">
        <button class="button__outlined grey__darken-1--text dark small">Войти</button>
      </router-link>
      <router-link :to="{name: 'sign-up'}">
        <button class="button__outlined grey__darken-1--text small">Начать Бесплатно</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
 data() {
  return {
    activeIndex: null
  }
 },
  methods: {
    toggleDropdown: function(index) {
      this.activeIndex == index ? (event.target.classList.remove('active'), this.activeIndex = null) : this.activeIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/colors';

.container {
  padding: 1rem 4rem;
}

.dropdown-item {
  position: relative;
  cursor: pointer;
  padding: 0.625rem;
  border-radius: 4px;
  font-size: 1.3rem;

  &:hover {
    background-color: rgba($grey-darken-1, 0.1);
  }

  &.active {
    
    .dropdown-content {
      display: flex;
    }
  }

  .dropdown-content {
    display: none;
    flex-direction: column;
    background-color: $grey-lighten-5;
    border-radius: 4px;
    position: absolute;
    top: 3.5rem;
    white-space: nowrap;

    a {
      padding: 1rem 1.5rem;
      
      &:hover {
        color: $green;
        background-color: rgba($green, 0.2);
      }
    }

    .item-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5rem;
    }

    .item-title {
      padding: 1.5rem;
      border-bottom: 1px solid $grey-lighten-2;
    }

    .item-body {
      img {
        height: 3.5rem;
      }
    }
  }
}
</style>