<script setup>
import HeroContent from '../components/HeroContent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <HeroContent
    title="Te quitamos una carga de encima"
    subtitle="El mejor soporte. Los mejores equipos."
  />
  <div
    class="action-call container d-flex flex-column justify-content-center align-items-center my-5"
  >
    <p class="fs-5">¿Necesitas cotizar un equipo para tu proyecto?</p>
    <RouterLink :to="{ name: 'distribuidores' }">
      <button type="button" class="koda-button">Programa una llamada</button>
    </RouterLink>
  </div>
  <div class="container koda-assets">
    <div>
      <img src="../assets/luces-frontales.jpg" alt="" srcset="" />
      <h2>Luces Frontales</h2>
    </div>
    <div>
      <img src="../assets/luz-azul-trasera.jpg" alt="" srcset="" />
      <h2>Luz azul trasera</h2>
    </div>
    <div>
      <img src="../assets/torreta.jpg" alt="" srcset="" />
      <h2>Torreta</h2>
    </div>
  </div>
  <div class="container koda-mission">
    <p class="fs-4 lh-lg">
      El objetivo de <strong>Koda</strong> es proporcionar soluciones de manejo de materiales de
      alta calidad y confiables, al mismo tiempo que se logra un crecimiento y rentabilidad
      sostenibles con una amplia gama de productos.
    </p>
  </div>
</template>

<style scoped>
.koda-assets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
}

.koda-assets img {
  width: 100%;
  object-fit: cover;
}

.koda-assets h2 {
  text-align: center;
  margin-top: 1rem;
}

.koda-mission {
  margin-top: 8rem;
  margin-bottom: 8rem;
  border-left: solid 3px #1bcc30;
}

@media screen and (max-width: 768px) {
  .koda-assets {
    grid-template-columns: 1fr;
  }
}
</style>
