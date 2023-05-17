<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { Collapse } from 'bootstrap'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  const collapse = new Collapse(document.getElementById('kodaNavBar'), {
    toggle: false
  })
  collapse.hide()
  router.afterEach(() => {
    collapse.hide()
  })
})
</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <RouterLink :to="{ name: 'home' }">
          <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" alt="Koda Lift" class="koda-lift-logo" />
          </a>
        </RouterLink>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#kodaNavBar"
          aria-controls="kodaNavBar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="kodaNavBar" style="">
          <ul class="navbar-nav me-auto mb-2">
            <RouterLink class="nav-link fs-5" :to="{ name: 'home' }" v-slot="{ isActive }">
              <li class="nav-item" :class="[isActive && 'active']">Inicio</li>
            </RouterLink>
            <RouterLink class="nav-link fs-5" :to="{ name: 'equipment' }" v-slot="{ isActive }">
              <li class="nav-item" :class="[isActive && 'active']">Equipos</li>
            </RouterLink>
            <RouterLink class="nav-link fs-5" :to="{ name: 'about' }" v-slot="{ isActive }">
              <li class="nav-item" :class="[isActive && 'active']">Quiénes somos</li>
            </RouterLink>

            <RouterLink
              class="nav-link fs-5"
              :to="{ name: 'distribuidores' }"
              v-slot="{ isActive }"
            >
              <li class="nav-item" :class="[isActive && 'active']">Distribuidores</li>
            </RouterLink>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.koda-lift-logo {
  height: 2.5rem;
}

.nav-link {
  text-decoration: none;
}

.active {
  color: #1bcc30 !important;
}
</style>
