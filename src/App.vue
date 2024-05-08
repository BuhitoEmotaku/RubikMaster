<script lang="ts">

import { defineComponent, onBeforeUnmount, onMounted } from 'vue';
import TopBanner from '@/components/TopBanner.vue';
import Routes from '@/components/Routes.vue';
import BottomFooter from '@/components/BottomFooter.vue';
import { useWebConfiguration } from '@/stores/webConfiguration';

export default defineComponent({

  components: {
    TopBanner,
    BottomFooter,
    Routes
  },
  setup() {

    const webConfiguration = useWebConfiguration();

    onMounted(async () => {
      webConfiguration.loadWebSettings();
    })

  }

});
</script>

<template>
  <header>
    <router-view name="TopBanner" />
    <router-view class="view right-sidebar" name="Routes" />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <router-view class="view right-sidebar" name="BottomFooter" />
  </footer>

</template>

<style scoped></style>
