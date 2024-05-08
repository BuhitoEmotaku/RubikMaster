<template>
  <div class="routesContainer">
    <nav class="navbarRoutes">
      <RouterLink to="/">{{ webConfiguration.langData.components.routes.routesList[0] }}
      </RouterLink>
      <RouterLink to="/csTimer">{{ webConfiguration.langData.components.routes.routesList[1] }}</RouterLink>
      <RouterLink to="/learnRubiksCube">{{ webConfiguration.langData.components.routes.routesList[2] }}</RouterLink>

      <!--
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/timer">Timer</RouterLink>
        -->
    </nav>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useWebConfiguration } from '@/stores/webConfiguration';



export default defineComponent({
  name: 'Routes',

  setup() {

    const webConfiguration = useWebConfiguration();

    return {
      webConfiguration
    }
  }

});
</script>

<style scoped>
.routesContainer {
  justify-content: center;
  display: flex;
}

.navbarRoutes {
  display: flex;
  margin: 20px;
  gap: 20px;
  position: relative;
  z-index: 10;
  overflow: auto;
}

a {
  padding: 10px;
  background-color: var(--color-backgroundOverlapping);
  color: var(--color-specialText1);
  border-radius: 10px;
  text-decoration: none;
  white-space: nowrap;
}

a:hover {
  color: rgb(242, 70, 28);
}
</style>