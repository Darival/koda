<script setup>
import HeroContent from '../components/HeroContent.vue'
import heroImage from '../assets/categorias/gas-lp.jpg'
import leftImg from '../assets/dist.jpg'
import rightImg from '../assets/hero.jpg'
</script>

<template>
  <div class="about">
    <HeroContent title="Quiénes somos" :image="heroImage" />
    <h2 class="text-center my-5">KODA: un servicio inconfundible</h2>
    <div class="about-galery container">
      <div :style="{ backgroundImage: 'url(' + leftImg + ')' }"></div>
      <div :style="{ backgroundImage: 'url(' + rightImg + ')' }"></div>
    </div>
    <div class="container my-5">
      <h3>Misión:</h3>
      <p>
        Nuestra misión es proporcionar soluciones de manejo de materiales de alta calidad y
        confiables a nuestros clientes, a través de una amplia gama de productos y servicios de
        montacargas. Nos comprometemos a ofrecer un excelente servicio al cliente y a mantener una
        relación de confianza y colaboración con nuestros clientes, proveedores y empleados.
      </p>
      <h3 class="mt-5">Visión:</h3>
      <p>
        Nuestra visión es convertirnos en líderes en la industria de manejo de materiales,
        ofreciendo productos y servicios innovadores y de alta calidad que satisfagan las
        necesidades de nuestros clientes. Nos esforzamos por ser reconocidos como una empresa de
        clase mundial en términos de calidad, innovación y servicio al cliente, y por tener una
        cultura empresarial sostenible y responsable.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-galery {
  display: grid;
  grid-template: 400px / 1fr 1fr;
  gap: 3em;
}
.about-galery > div {
  background-position: center center;
  background-size: cover;
}
</style>
