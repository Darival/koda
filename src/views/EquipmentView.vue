<script setup>
import { RouterLink } from 'vue-router'
import HeroContent from '../components/HeroContent.vue'
import heroImage from '../assets/equip.png'
import imgGasLp from '../assets/categorias/gas-lp.jpg'
import diesel from '../assets/categorias/diesel.png'
import sentado from '../assets/categorias/sentado.png'
import parado from '../assets/categorias/parado.png'
import patin from '../assets/categorias/patin.png'
import apilador from '../assets/categorias/apilador.png'
import angosto from '../assets/categorias/angosto.png'

const categorias = [
  {
    name: 'Montacargas Combustión GAS LPG',
    image: imgGasLp,
    url: 'montacargas-combustion-gas-lpg'
  },
  {
    name: 'Montacargas Combustión Diésel',
    image: diesel,
    url: 'montacargas-combustion-diesel'
  },
  {
    name: 'Montacargas Eléctrico Hombre Sentado',
    image: sentado,
    url: 'montacargas-electrico'
  },
  {
    name: 'Montacargas Eléctrico Hombre Parado',
    image: parado
  },
  {
    name: 'Apilador',
    image: apilador
  },
  {
    name: 'Pasillo Angosto',
    image: angosto
  },
  {
    name: 'Patín Eléctrico',
    image: patin
  }
]

const categoriesWithUrl = categorias.filter((categoria) => categoria.url)
const categoriesWithNoUrl = categorias.filter((categoria) => !categoria.url)
</script>

<template>
  <main>
    <HeroContent title="Equipos" :image="heroImage" />
    <h1 class="text-center my-5">Categorías</h1>
    <div class="d-flex container flex-wrap align-items-center justify-content-center">
      <RouterLink
        :to="{ name: 'category', params: { category: categoria.url } }"
        v-for="(categoria, index) in categoriesWithUrl"
        :key="index"
        class="category my-4 mx-2 text-decoration-none text-dark"
      >
        <h2 class="fs-5 fw-bold fst-italic text-center">{{ categoria.name }}</h2>
        <div
          class="category-image"
          :style="{ backgroundImage: 'url(' + categoria.image + ')' }"
        ></div>
      </RouterLink>

      <div
        v-for="(categoria, index) in categoriesWithNoUrl"
        :key="index"
        class="category my-4 mx-2 text-decoration-none text-dark"
      >
        <h2 class="fs-5 fw-bold fst-italic text-center">{{ categoria.name }}</h2>
        <div
          class="category-image"
          :style="{ backgroundImage: 'url(' + categoria.image + ')' }"
        ></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.category {
  width: 220px;
}

.category-image {
  background-position: center center;
  background-size: cover;
  height: 200px;
  width: 100%;
}
</style>
