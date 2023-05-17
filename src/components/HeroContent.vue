<script setup>

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <main class="koda-hero">
    <div class="hero-body">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
    </div>
  </main>
</template>


<style scoped>
.koda-hero {
  background-position: center center;
  background-image: url("../assets/hero.jpg");
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
  background: rgba(0, 0, 0, 0.2);
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
  font-weight: 500;
}
</style>