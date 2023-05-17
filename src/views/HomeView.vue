<script setup>
import HeroContent from '../components/HeroContent.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <HeroContent
    title="Te quitamos una carga de encima"
    subtitle="El mejor servicio. Los mejores equipos."
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
  <div class="container fs-5 koda-mission">
    <p>
      El objetivo de <strong>Koda</strong> es proporcionar soluciones de manejo de materiales de
      alta calidad y confiables, al mismo tiempo que se logra un crecimiento y rentabilidad
      sostenibles.
    </p>

    <p>Además, algunos otros objetivos específicos que la empresa podría establecer son:</p>

    <ul>
      <li>
        Ofrecer una amplia gama de productos y servicios de montacargas para satisfacer las
        necesidades específicas de cada cliente.
      </li>
      <li>
        Proporcionar un excelente servicio al cliente, incluyendo asesoramiento técnico,
        mantenimiento y reparación de montacargas.
      </li>
      <li>
        Mantener una relación de confianza y colaboración con clientes, proveedores y empleados para
        construir una cultura empresarial sostenible y responsable.
      </li>
      <li>
        Implementar prácticas de seguridad y salud en el trabajo que garanticen la protección de los
        empleados, los clientes y las instalaciones de la empresa.
      </li>
      <li>
        Fomentar la innovación y el desarrollo de nuevas soluciones de manejo de materiales que
        mejoren la eficiencia y reduzcan el impacto ambiental.
      </li>
      <li>
        Expandir la presencia de la empresa en nuevos mercados y aumentar la participación de
        mercado en los mercados existentes.
      </li>
    </ul>
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

.koda-mission li {
  margin-bottom: 1rem;
}
</style>
