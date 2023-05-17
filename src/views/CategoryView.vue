<script setup>
import { useRoute } from 'vue-router'
import HeroContent from '../components/HeroContent.vue'
import { getCategory } from '../store/index.js'

const route = useRoute()
const category = getCategory(route.params.category)
</script>

<template>
  <HeroContent :title="category.title" />
  <div class="container">
    <p class="fs-3 fw-bold my-5">{{ category.text }}</p>
    <div class="d-flex justify-content-center flex-wrap">
      <div
        v-for="(item, index) in category.inventario"
        :key="route.params.category + '-' + index"
        class="m-2"
      >
        <div class="koda-item-image" :style="{ backgroundImage: 'url(' + item.image + ')' }"></div>
        <h2 class="text-center koda-item-name">{{ item.name }}</h2>
        <ul>
          <li v-for="(property, index) in item.properties" :key="item.name + '-' + index">
            {{ property }}
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="text-center">
      <button type="button" class="koda-button my-5">Descargar ficha técnica</button>
    </div> -->
  </div>
</template>

<style scoped>
.koda-item-name {
  font-size: 3rem;
  font-weight: bold;
  color: #1bcc30;
}

.koda-item-image {
  background-position: center center;
  background-size: cover;
  height: 200px;
  width: 100%;
}
</style>
