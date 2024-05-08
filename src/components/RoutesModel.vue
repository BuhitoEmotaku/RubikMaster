<template>
  <div class="routesContainer" style="justify-content: center; display: flex;">
    <nav class="navbarRoutes" style="display: flex; margin: 10px; gap: 15px; position: relative;
      z-index: 10;overflow: auto;">
      <a href="/" target="_top"
        style=" padding: 10px; background-color: var(--color-backgroundOverlapping); color: var(--color-specialText1); border-radius: 10px; text-decoration: none; text-wrap: nowrap;">{{
          webConfiguration.langData.components.routes.routesList[0] }}</a><a href="/csTimer" target="_top"
        style=" padding: 10px; background-color: var(--color-backgroundOverlapping); color: var(--color-specialText1); border-radius: 10px; text-decoration: none; text-wrap: nowrap;">{{
          webConfiguration.langData.components.routes.routesList[1] }}</a><a href="/learnRubiksCube" target="_top"
        style=" padding: 10px; background-color: var(--color-backgroundOverlapping); color: var(--color-specialText1); border-radius: 10px; text-decoration: none; text-wrap: nowrap;">{{
          webConfiguration.langData.components.routes.routesList[2] }}</a>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useWebConfiguration } from '@/stores/webConfiguration';



export default defineComponent({
  name: 'RoutesModel',

  setup() {

    const webConfiguration = useWebConfiguration();

    return {
      webConfiguration
    }
  }

});
</script>




<style scoped></style>