<script setup>
import HeroContent from '../components/HeroContent.vue'
import heroImage from '../assets/dist.jpg'
</script>

<template>
  <div class="about">
    <HeroContent title="Distribuidores" :image="heroImage" />
    <div class="container d-flex flex-column align-items-center my-5">
      <div class="distribuidor">
        <img src="../assets/rd-logo.png" alt="" />
        <p class="fs-5 text-center fst-italic">Estamos en la Av. Central 230 Int. Bodega 127, Col. Los Lermas, Guadalupe; Nuevo León</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3595.7259430595736!2d-100.197858!3d25.680378!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bf84d3b29de3%3A0x720c6ce72666f188!2sRental%20Depot%20Mx!5e0!3m2!1ses!2sus!4v1684304528836!5m2!1ses!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
  }
}

.distribuidor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 20rem;
}
.distribuidor img {
  max-width: 100%;
}
</style>
