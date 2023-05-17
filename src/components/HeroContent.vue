<script setup>
import hero from '../assets/hero.jpg'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false,
    default: hero
  }
})
</script>

<template>
  <main class="koda-hero" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="hero-body">
      <h1 class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle text-center">{{ subtitle }}</p>
    </div>
  </main>
</template>

<style scoped>
.koda-hero {
  background-position: center center;
  background-size: cover;
  transform: translate3d(0px, 0px, 0px);
  height: 33rem;
  width: 100%;
}
.hero-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rgba(57, 57, 57, 0.5);
}
.hero-title {
  font-size: 5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  margin-left: 1em;
  margin-right: 1em;
  text-align: center;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1rem;
  margin-left: 1em;
  margin-right: 1em;
  font-weight: 500;
}



@media screen and (max-width: 769px) {
  .koda-hero {
    height: 50rem;
  }
  .hero-title {
    font-size: 4rem;
    font-weight: 700;
  }
}

</style>
