<template>
  <twisty-player id="main-player" :experimental-setup-alg="`${svMthPetitionStore.rotationCrossColor[svMthPetitionStore.colorCrossSelected]}
   ${svMthPetitionStore.setupSelected}`" background="none" :alg="svMthPetitionStore.algSelected" camera-longitude="0"
    back-view="top-right">
  </twisty-player>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { TwistyPlayer } from "cubing/twisty";
import { randomScrambleForEvent } from "cubing/scramble";
import { Alg } from "cubing/alg";

import { svMthPetition } from '@/stores/SvMthPetition';
export default defineComponent({
  name: 'TwistyView',
  setup() {

    const svMthPetitionStore = svMthPetition();
    

    const createSetupAlg = () => {
      const alg = new Alg(svMthPetitionStore.algSelected);
      return alg.invert().toString();
    }

   
    const twistyPlayer = <any>document.querySelector("#main-player");


    // Function to update the scramble.
    const updateScramble = async () => {
      if (twistyPlayer) {
        twistyPlayer.alg = await randomScrambleForEvent("333");
      }
    };

    // Call the function to update the scramble.
    updateScramble();

    const checkCrossColor = async () => {

      if (localStorage.getItem("crossColorIndex_RBKMT") == undefined) localStorage.setItem('crossColorIndex_RBKMT', '0');
      else {
        svMthPetitionStore.colorCrossSelected = Number(localStorage.getItem("crossColorIndex_RBKMT"));
      }
    }

    onMounted(async () => {
      await checkCrossColor();
      try {
        svMthPetitionStore.stickerAlgType = svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].typeAlg;
      } catch (error) {
        console.error("Error al generar o mostrar la mezcla aleatoria:", error);
      }
    });

    return { svMthPetitionStore, createSetupAlg };
  }
});
</script>

<style scoped>
#main-player {
  width: 400px;
  margin: 0 auto;
}

button {
  background-color: #111111;
}

@media (max-width: 1000px) {
  #main-player {
    width: 100%;
  }
}
</style>