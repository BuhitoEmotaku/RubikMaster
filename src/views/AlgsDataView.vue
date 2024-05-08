<template>
  <AlgsTypes></AlgsTypes>
  <div class="algsViewContainer" v-if="svMthPetitionStore.checkAlgListStore">
    <!-- Bucle para mostrar los algoritmos -->
    <div class="algsStatContainer">
      <div :class="isGeneralAlgsCtnr" id="generalAlgsCtnr" @wheel.prevent="handleWheel">
        <div class="individualAlgsCtnrOut" v-for="(algSimul, index) in svMthPetitionStore.algListStore" :key="index"
          @click="selectAlgorithm(index, 0)">
          <div class="individualAlgsCtnrIns"
            :class="{ 'selectedAlgorithm': svMthPetitionStore.selectedAlgorithmIndex === index }">
            <h1 class="numberAlg">#{{ index + 1 }} {{
    svMthPetitionStore.typeAlgSelected.toUpperCase() }}</h1>
            <b>{{ reduceAlgLength(algSimul.alg) }}</b>
            <img class="imgCube" :src="svgUrls[index]" alt="SVG visualization cube">
          </div>
        </div>
      </div>
    </div>

    <div :class="isalgStats">
      <div class="statsTitle">{{ webConfiguration.langData.views.algsDataView.statsTitle }} - {{
    svMthPetitionStore.typeAlgSelected.toUpperCase() }} {{
    svMthPetitionStore.selectedAlgorithmIndex + 1 }} -> <b>{{
    svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].subTypeAlg }}</b></div>
      <div id="scrollAlgStatsPin"></div>
      <div class="statsAlgContainer">
        <div class="statsAlgContainerIns">
          <div class="twistyView">
            <span class="setupAlg">Setup: <br>{{
    svMthPetitionStore.setupSelected }}</span>
            <TwistyView></TwistyView>
          </div>
          <div class="statsAlgInfo">
            <div class="statsAlgInfoColumn">
              <div>
                <div class="bestSolutionTitle">{{ webConfiguration.langData.views.algsDataView.bestSolutionTitle }} <br>
                </div>
                <div class="bestSolutionAlg" @click="selectAlgorithm(svMthPetitionStore.selectedAlgorithmIndex, 0)">
                  <b>
                    {{
    svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].alg }}
                  </b>

                </div>
              </div>


              <div class="statsAlgInfoColumn secondaryAlgsContainer">
                <b class="secondaryAlgsTitle">{{ webConfiguration.langData.views.algsDataView.secondaryAlgsTitle }}</b>
                <div class="secondaryAlgsContainerBF"
                  v-if="svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].secondaryAlgs.length > 0">
                  <div class="secondaryAlgsContainer"
                    v-for="(secAlgs, index) in svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].secondaryAlgs"
                    :key="index">
                    <div
                      :class="['secondaryAlgsData', { 'selectedAlgorithm': svMthPetitionStore.selectedSecondaryAlgorithmIndex === (-1 + -index) }]">
                      <b @click="selectAlgorithm(-1 + -index, index)">{{ secAlgs }}</b>
                    </div>
                  </div>
                </div>
                <div v-else>
                  <p>{{ webConfiguration.langData.views.algsDataView.notSecondaryAlgs }}</p>
                </div>
              </div>
              <b class="numMoves">{{ webConfiguration.langData.views.algsDataView.numMovesTitle }}
                {{ svMthPetitionStore.numMovesAlg }}
              </b>
            </div>

            <div class="crossMenu">

              <div class="color-menu">
                <div class="selected-color" @click="toggleMenu">
                  <span>{{ svMthPetitionStore.selectedColor }}</span>
                  <i :class="['arrow-icon', isMenuOpen ? 'up' : 'down']"></i>
                </div>

                <h3 class="crossColorTitle">{{ webConfiguration.langData.views.algsDataView.crossColorTitle }}</h3>
                <transition name="slide">
                  <div class="color-options"
                    :class="{ openCrossMenuEffect: isMenuOpen, closeCrossMenuEffect: !isMenuOpen }">
                    <div v-for="(color, index) in webConfiguration.langData.config.crossColors" :key="color"
                      @click="selectColor(color, index)" :style="{ backgroundColor: colorsStyle[index].toLowerCase() }">
                      {{ color }}
                    </div>
                  </div>
                </transition>
              </div>


            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

  <div v-else class="loadingRubikContainer">
    <!-- Contenido que se muestra si la condición es falsa -->
    <img class="loadingRubik" src="../assets/images/imgRubik/loadingRubik.gif" alt="loadingRubik">
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

import TwistyView from '@/components/TwistyView.vue';
import AlgsTypes from '@/components/AlgsTypes.vue';

import { svMthPetition } from '@/stores/SvMthPetition';
import { useWebConfiguration } from '@/stores/webConfiguration';
import { gnVisMth } from '@/stores/GnVisMth';

import hoverAlgsSoundFile from '@/assets/music/musicSounds/hoverAlgsSound.mp3';
import { typeIndexMap } from '@/assets/static/rubikData/categories';

export default defineComponent({
  name: 'AlgsDataView',

  components: {
    TwistyView,
    AlgsTypes
  },

  setup() {

    const route = useRoute();

    const svMthPetitionStore = svMthPetition();
    const webConfiguration = useWebConfiguration();
    const gnVisMthStore = gnVisMth();

    const svgContent = ref<any>();
    const isGeneralAlgsCtnr = ref();
    const isalgStats = ref('nonAlgStats');

    const algorithmType = ref('f2l'); // Valor por defecto: F2L


    const selectAlgorithm = (index: any, indexNumAlgs: number) => {
      if (index >= 0) {
        svMthPetitionStore.selectedAlgorithmIndex = index;
        svMthPetitionStore.selectedSecondaryAlgorithmIndex = 0;
        svMthPetitionStore.genNumMovesAlg(svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].alg)
      }
      else {
        svMthPetitionStore.selectedSecondaryAlgorithmIndex = index;
        svMthPetitionStore.genNumMovesAlg(svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].secondaryAlgs[indexNumAlgs])
      }
      svMthPetitionStore.createAlgView(index);
      hoverAlgsSound();
    };

    //AUDIO HOVER ALGS
    const audioHover = new Audio(hoverAlgsSoundFile) as HTMLAudioElement;
    audioHover.volume = 0.10;
    const hoverAlgsSound = () => {
      audioHover.play();
      scrollToAlgStats();
    }

    const scrollToAlgStats = () => {
      const scrollAlgStatsPin = document.getElementById('scrollAlgStatsPin');
      if (scrollAlgStatsPin) {
        scrollAlgStatsPin.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const windowWidth = ref(window.innerWidth);

    const reduceAlgLength = (alg: string): string => {
      // Check if the window width is greater than 450 pixels
      try {
        if (windowWidth.value > 450) {
          // Check if the length of the algorithm string is greater than 14
          if (alg.length > 14) {
            // Extract the first 14 characters and append "..."
            return alg.substring(0, 14) + "...";
          } else {
            // If the length is 14 or less, return the original string
            return alg;
          }
        } else {
          // If the window width is 450 pixels or less, truncate to 4 characters and append "..."
          return alg.substring(0, 4) + "...";
        }
      } catch (e) {

      }
      return '';
    };

    const isMenuOpen = ref(false);
    const colorsName = ['White', 'Orange', 'Blue', 'Red', 'Green', 'Yellow'];
    const colorsStyle = ['white', '#f07d29', '#2e2eb5', '#f23131', '#2d8a2d', 'Yellow'];
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const selectColor = (color: any, colorIndex: number) => {
      svMthPetitionStore.selectedColor = color;
      isMenuOpen.value = !isMenuOpen.value;
      svMthPetitionStore.colorCrossSelected = colorIndex;
      localStorage.setItem('crossColorIndex_RBKMT', colorIndex.toString());
    };

    // Manejar redimensionamiento de la ventana
    const handleResize = () => {
      windowWidth.value = window.innerWidth;
    };


    onMounted(async () => {
      svMthPetitionStore.selectedColor = webConfiguration.langData.config.crossColors[Number(localStorage.getItem('crossColorIndex_RBKMT'))] || webConfiguration.langData.config.crossColors[0];
      window.addEventListener("resize", handleResize);

    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });


// Método para manejar el evento de desplazamiento (wheel)
const handleWheel = (event:any) => {
  const scrollContainer = document.getElementById('generalAlgsCtnr');
  if (scrollContainer !== null) {
    const nextPos = scrollContainer.scrollTop + (267 * Math.sign(event.deltaY)); //Scroll negative
    scrollContainer.scrollTop = nextPos;
  }
};

    const svgUrls = ref<any>([]);
    watch(async () => await svMthPetitionStore.algListStore, async (newAlgList, oldAlgList) => {
      svMthPetitionStore.checkAlgListStore = false;
      isGeneralAlgsCtnr.value = 'nonGeneralAlgsCtnr';
      isalgStats.value = 'nonAlgStats';

      svgUrls.value = [];

      let arrBlobsSelected = gnVisMthStore.arrBlobs[typeIndexMap[svMthPetitionStore.typeAlgSelected]];

      if (arrBlobsSelected.length > 0) {
        svgUrls.value = arrBlobsSelected;
        await wait(100);

      } else {
        svgUrls.value = await gnVisMthStore.gnCubeAlgVis(svMthPetitionStore.algListStore, svMthPetitionStore.typeAlgSelected);
        await wait(100);
      }

      // Wait for all promises to resolve
      isGeneralAlgsCtnr.value = 'generalAlgsCtnr';
      isalgStats.value = 'algStats';
      svMthPetitionStore.checkAlgListStore = true;

    }, { deep: true });

    function wait(ms: any) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


    return {
      webConfiguration, svMthPetitionStore, gnVisMthStore, svgContent, svgUrls, isGeneralAlgsCtnr,
      isalgStats, isMenuOpen, colorsName, colorsStyle,
      reduceAlgLength, selectAlgorithm, toggleMenu, selectColor, handleWheel
    };
  }
});
</script>

<style scoped>
.loadingRubikContainer {
  display: flex;

}

.loadingRubik {
  margin: 0 auto;
  width: 400px;
}

b,
h3 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

.algsViewContainer {}

.algsViewTitleContainer {
  display: flex;
  justify-content: center;
  width: 80%;
}

.algsViewTitle {
  width: 100%;
  text-align: center;
  margin: 30px 0 30px 0;
  font-size: 35px;
  padding: 5px 0 5px 0;
  background: linear-gradient(to right, rgb(28, 28, 28), #111111, rgb(28, 28, 28));
  /* Cambia los colores según tu preferencia */
  color: rgb(226, 226, 226);
  text-shadow: 5px 5px rgb(76, 34, 85);
  border-top: 2px solid #8ef1b7;
  border-bottom: 2px solid #17deff;
  box-shadow: 0 0 15px rgba(128, 128, 128, 0.5);

}

.algsStatContainer {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  font-size: 11px;
}

.nonGeneralAlgsCtnr {
  display: none;
}

.generalAlgsCtnr {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 340px;
  overflow: auto;
  animation: generalAlgsCtnrApparition 0.7s linear;
  animation-fill-mode: forwards;
  /* Mantiene el último estado de la animación */
  max-width: 0%;
  /* Empieza con ancho cero */
  z-index: 10;
}

@keyframes generalAlgsCtnrApparition {
  from {
    opacity: 0%;
    max-width: 0%;
    /* Empieza con ancho cero */
  }

  to {
    opacity: 100%;
    max-width: 80%;
    /* Termina con ancho 80% */
  }
}

.individualAlgsCtnrOut {
  position: relative;
  margin: 10px;
  padding: 10px;
}

.selectedAlgorithm {
  background-color: rgb(23, 222, 255) !important;
  color: black;
}

.individualAlgsCtnrIns {
  display: flex;
  flex-direction: column;
  background-color: var(--color-backgroundOverlapping);
  border: 2px solid white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
  cursor: pointer;
}


.individualAlgsCtnrIns:hover {
  transition: 0.15s linear;
  border: 2px solid black;
  background-color: rgb(239, 235, 120);
  color: black;
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
  /* Sombreado blanco */
  margin-top: -15px;
}

.imgCube {
  max-width: 150px;
}



.nonAlgStats {
  display: none;
}

.algStats {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  animation: AlgsStatsApparition 2s linear;
  animation-fill-mode: forwards;

}

.statsTitle {
  margin-top: 30px;
  font-size: 33px;
  padding: 5px 0 5px 0;
  background: var(--color-backgroundGradient1);
  /* Cambia los colores según tu preferencia */
  color: rgb(226, 226, 226);
  text-shadow: 5px 5px rgb(76, 34, 85);
  border-top: 2px solid #8ef1b7;
  border-bottom: 2px solid #17deff;
  box-shadow: 0 0 15px rgba(128, 128, 128, 0.5);
  font-weight: bold;
  text-align: center
}

@keyframes AlgsStatsApparition {
  from {
    opacity: 0%;
    height: 0%;
    /* Empieza con ancho cero */
  }

  to {
    opacity: 100%;
    height: 100%;
    /* Termina con ancho 80% */
  }
}

.statsAlgContainer {
  margin: 30px;
}

.statsAlgContainerIns {
  display: flex;
  justify-content: center;
  gap: 40px;
  font-size: 17px;

}

.statsAlgInfo {
  display: flex;
  justify-content: center;
  align-items: space-around;
  gap: 30px;

}

.twistyView {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  max-width: 400px;
}

.statsAlgInfoColumn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 270px;
  gap: 20px;
}

.secondaryAlgsData {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.secondaryAlgsData b {
  cursor: pointer;
  padding: 2px;
}

.secondaryAlgsData b:hover {
  background-color: rgb(253, 29, 29);
}

.setupAlg {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.bestSolutionTitle {
  font-size: 22px;
  color: #970404;

}

.bestSolutionAlg {
  color: white;
  word-break: normal;
  font-size: 18px;
}

.bestSolutionAlg:hover {
  cursor: pointer;
  color: rgb(249, 141, 255);
}

.numMoves {
  font-size: 20px;
  color: rgba(78, 236, 102, 0.91);
}

.secondaryAlgsTitle {
  font-size: 20px;
  color: #938d3c;
}

.secondaryAlgsContainerBF {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.secondaryAlgsContainer {
  display: flex;
  gap: 10px;
}

#scrollAlgStatsPin {}


.color-menu {
  position: relative;
  display: inline-block;
}



/************************************************************************************************/

.crossMenu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.crossColorTitle {
  margin-top: 4px;
  text-align: center;
  color: #c258df;
}

.selected-color {
  cursor: pointer;
  padding: 10px 30px 10px 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--color-backgroundOverlapping);
  color: var(--color-colorMain);
}

.arrow-icon {
  position: absolute;
  top: 20px;
  right: 10px;
  transform: translateY(-50%);
}

.arrow-icon.down {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
}

.arrow-icon.up {
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
}

.color-options {
  position: absolute;
  width: 100%;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  gap: 3px;
  top: 55px;
  z-index: 10;
}

.color-options>div {
  padding: 8px;
  text-align: center;
  cursor: pointer;
  color: black;
}

.color-options>div:hover {
  background-color: #fefefe;
}

.openCrossMenuEffect {
  animation: openCrossMenu 1s linear;
  animation-fill-mode: forwards;
}

@keyframes openCrossMenu {
  from {
    opacity: 0%;
    /* Empieza con ancho cero */
  }

  to {
    opacity: 100%;
    /* Termina con ancho 80% */
  }
}

.closeCrossMenuEffect {
  display: none;
}


@media (max-width: 1250px) {
  .algStats {
    max-width: 100%;
  }

  .statsAlgContainerIns {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .generalAlgsCtnr {

    animation: generalAlgsCtnrApparitionMobile 0.5s linear;
    animation-fill-mode: forwards;
  }

  @keyframes generalAlgsCtnrApparitionMobile {
    from {
      opacity: 0%;
      max-width: 0%;
      /* Empieza con ancho cero */
    }

    to {
      opacity: 100%;
      max-width: 100%;
      /* Termina con ancho 80% */
    }
  }

}

@media (max-width: 550px) {

  .loadingRubik {
    margin: 0 auto;
    width: 100%;
  }

  .twistyView {
    width: 100%;
  }

  .algStats {
    max-width: 100%;
  }

  .statsAlgContainerIns {
    display: flex;
    flex-direction: column;
  }

  .statsTitle {
    font-size: 25px;
  }

}


@media (max-width: 450px) {

  .generalAlgsCtnr {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    width: 100%;
  }

  .numberAlg {
    font-size: 17px;
  }

  .imgCube {
    max-width: 60px;
  }

  .individualAlgsCtnrOut {
    margin: 8px;
    padding: 0;
  }

  .individualAlgsCtnrIns:hover {
    margin-top: 0;
  }

  @keyframes generalAlgsCtnrApparition {
    from {
      opacity: 0%;
      max-width: 0%;
      /* Empieza con ancho cero */
    }

    to {
      opacity: 100%;
      max-width: 100%;
      /* Termina con ancho 80% */
    }
  }

  .statsAlgInfo {
    flex-direction: column;
  }

  .statsAlgInfoColumn {
    max-width: 100%;
    gap: 20px;
  }

  .crossMenu {
    max-width: 40%;
    margin: 0 auto;
  }

  .color-options {
    top: -267px;
    border: 2px solid white;
    padding: 2px;
    background-color: #1e1e1e;
    border-radius: 5px;
  }

  .numMoves {
    text-align: right;
  }


  .individualAlgsCtnrIns {
    border-radius: 5px;
    height: 100%;
  }


}
</style>