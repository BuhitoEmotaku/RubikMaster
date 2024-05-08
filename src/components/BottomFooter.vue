<template>
  <div class="footerContainer" v-if="svMthPetitionStore.checkAlgListStore">
    <a href="https://www.instagram.com/ladivinaespadachina/" target="_blank"><b>Made by Buhito</b></a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { svMthPetition } from '@/stores/SvMthPetition';
export default defineComponent({
  name: 'BottomFooter',
  setup() {
    const svMthPetitionStore = svMthPetition();

    return { svMthPetitionStore };
  }
});
</script>

<style scoped>

.footerContainer {
  padding: 4px;
  
  background-color: var(--color-backgroundOverlapping);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:calc(5% + -20px);
}

a {
  text-decoration: none;
  color: var(--color-colorMain);
}

a:hover {
  color: rgb(244, 93, 239);
}

</style>