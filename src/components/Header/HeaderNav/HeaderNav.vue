<template>
  <nav v-show="!mobile" class="grey__darken-1--text flex">
    <div class="dropdown-item" :class="{ active: activeIndex == 1 }" @click="toggleDropdown(1)">
      Продукт
      <ul class="dropdown-content">
        <router-link class="description grey__darken-4--text" :to="{name: 'how-it-works'}">Как это работает</router-link>
        <router-link class="description grey__darken-4--text" :to="{name: 'features'}">Функционал</router-link>
      </ul>
    </div>
    <div class="dropdown-item" :class="{ active: activeIndex == 2 }" @click="toggleDropdown(2)" >
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
    <div class="dropdown-item" :class="{ active: activeIndex == 3 }" @click="toggleDropdown(3)">
      Компания
      <ul class="dropdown-content">
        <router-link class="description grey__darken-4--text" :to="{name: 'about'}">О нас</router-link>
        <router-link class="description grey__darken-4--text" :to="{name: 'partnership'}">Партнерская программа</router-link>
      </ul>
    </div>
    <router-link class="dropdown-item link" :to="{name: 'pricing'}">Цены</router-link>     
  </nav>
</template>

<script>
export default {
  name: 'HeaderNav',
  props: {
    mobile: Boolean
  },
  data() {
    return {
      activeIndex: null,
    }
  },
  methods: {
    toggleDropdown: function(index) {
      this.activeIndex == index ? (event.target.classList.remove('active'), this.activeIndex = null) : this.activeIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped >
@import '@/assets/sass/colors';

.dropdown-item {
  position: relative;
  cursor: pointer;
  padding: 0.625rem;
  border-radius: 4px;
  font-size: 1.3rem;

  &:hover {
    background-color: rgba($grey-darken-1, 0.1);
  }

  &.link {
    background-color: transparent;
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

.wrapper {
  nav, a {
  color: $grey-darken-4;

  &.link {
    &:hover {
      color: $indigo;
    }
  }
}
}
</style>