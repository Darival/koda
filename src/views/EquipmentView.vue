<script setup>
import HeroContent from '../components/HeroContent.vue';
import heroImage from '../assets/equip.png';

import imgGasLp from '../assets/categorias/gas-lp.jpg';
import diesel from '../assets/categorias/diesel.png';
import sentado from '../assets/categorias/sentado.png';
import parado from '../assets/categorias/parado.png';
import patin from '../assets/categorias/patin.png';
import apilador from '../assets/categorias/apilador.png';
import angosto from '../assets/categorias/angosto.png';

const categorias = [
  {
    name: 'Montacargas Combustión GAS LPG',
    image: imgGasLp
  },
  {
    name: 'Montacargas Combustión Diésel',
    image: diesel
  },
  {
    name: 'Montacargas Eléctrico Hombre Sentado',
    image: sentado
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
];
</script>

<template>
  <main>
    <HeroContent title="Equipos" :image="heroImage" />
    <h1 class="text-center my-5">Categorías</h1>
    <div class="d-flex container flex-wrap align-items-center justify-content-center">
      <div v-for="(categoria, index) in categorias" :key="index" class="category my-4 mx-2">
        <h2 class="fs-5 fw-bold fst-italic text-center">{{ categoria.name }}</h2>
        <div class="category-image" :style="{ backgroundImage: 'url(' + categoria.image + ')' }"></div>
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
