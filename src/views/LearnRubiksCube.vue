<template>

  <div class="learnRubiksCubeContainer">
    <div class="learnIntroduction">
      <h1 class="solveRubikTitle">{{ webConfiguration.langData.views.learnRubiksCube.learnIntroduction.solveRubikTitle }}</h1>

      <div class="backgroundBannerRubikContainer">
        <img src="../assets/images/imgRubik/beardRubikWallpaper.png" class="backgroundBannerRubik" alt="backgroundBanner">
      </div>


      <b>{{ webConfiguration.langData.views.learnRubiksCube.learnIntroduction.introText }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.learnIntroduction.tutorialsLinkDescription }}</span>

      <div class="linkVideosYTContainer">
        <b class="linkVideosYT">
          <a href="https://www.youtube.com/watch?v=C-vvUglSqOQ&list=PLNT5NGgdFY4Vz5cQcK5FyPl7eP500WRcr"
            target="_blank">{{ webConfiguration.langData.views.learnRubiksCube.learnIntroduction.videosYTDescription }}
          </a>
        </b>
      </div>
      <b>- {{ webConfiguration.langData.views.learnRubiksCube.learnIntroduction.moveTwistVisual }} -</b>
      <b>- {{ webConfiguration.langData.views.learnRubiksCube.learnIntroduction.timeDuration }} -</b>
    </div>

    <div class="rubikpart rubikpart1 rubikOddPart">

      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part1.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part1.warning }}</h4>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.objective }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[0] }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[1] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[2] }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[3] }}</span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[4] }}</span>

      <div class="learnPlayerContainer">
        <twisty-player id="learnPlayer" :experimental-setup-alg="`R2 y' U R2 y U' R2`" background="none"
          alg="R2 U F2 U' R2" camera-longitude="0" back-view="top-right" experimental-stickering="Cross">
        </twisty-player>
      </div>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[5] }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[6] }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[7] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[8] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R2 U'`" background="none" alg="y U" camera-longitude="0"
        back-view="top-right" experimental-stickering="Cross">
      </twisty-player>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[9] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[10] }}</b>
      
      <twisty-player id="learnPlayer" :experimental-setup-alg="`y F2`" background="none" alg="F2" camera-longitude="0"
        back-view="top-right" experimental-stickering="Cross">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[11] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`y R' F' R U`" background="none" alg="U' R' F R" camera-longitude="0"
        back-view="top-right" experimental-stickering="Cross">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part1.content[12] }}</b>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/C-vvUglSqOQ?si=-PqNo1IQPILGMvD9"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>

    </div>
    <hr>

    <div class="rubikpart rubikpart2 rubikEvenPart">
      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part2.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part2.warning }}</h4>
      <b>
        {{ webConfiguration.langData.views.learnRubiksCube.part2.objective }}
      </b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part2.content[0] }}</span>
      <span>
        {{ webConfiguration.langData.views.learnRubiksCube.part2.content[1] }}
      </span>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`y2 U R U' R' y U'`" background="none" alg="y' U"
        camera-longitude="0" back-view="top-right" experimental-stickering="F2L">
      </twisty-player>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part2.content[2] }}</span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part2.content[3] }}</span>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`U R U' R'`" background="none" alg="R U R' U'"
        camera-longitude="0" back-view="top-right" experimental-stickering="F2L">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part2.content[4] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`U R U' R' U R U' R' U R U' R'`" background="none"
        alg="R U R' U' R U R' U' R U R' U'" camera-longitude="0" back-view="top-right" experimental-stickering="F2L">
      </twisty-player>

      <span>
        {{ webConfiguration.langData.views.learnRubiksCube.part2.content[5] }}
      </span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part2.content[6] }}</span>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hdxM46M0Lls?si=6RW6b3EDZSRfISJK"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
    <hr>

    <div class="rubikpart rubikpart3">
      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part3.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part3.warning }}</h4>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.objective }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[0] }} 
        <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[1] }}</b>
      </span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[2] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[3] }}</b>
      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U R' U' y L' U' L U U2`" background="none" alg=" U2 "
        camera-longitude="0" back-view="top-right" experimental-stickering="F2L">
      </twisty-player>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[4] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[5] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U R' U' y L' U' L U`" background="none"
        alg="U' L' U L y' U R U' R' " camera-longitude="0" back-view="top-right" experimental-stickering="F2L">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[6] }}</b>


      <twisty-player id="learnPlayer" :experimental-setup-alg="`L' U' L U y' R U R' U'`" background="none"
        alg="U R U' R' y U' L' U L" camera-longitude="0" back-view="top-right" experimental-stickering="F2L">
      </twisty-player>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[7] }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[8] }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part3.content[9] }}</b>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6WQ-yQs15xU?si=mw6qezEtUpxRPaX3"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>

    <hr>

    <div class="rubikpart rubikpart4">
      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part4.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part4.warning }}</h4>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.objective }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[0] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[1] }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[2] }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[3] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[4] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U R' U R U2 R' F R U R' U' F' U2`" background="none"
        alg="U2" camera-longitude="0" back-view="top-right" experimental-stickering="OLL">
      </twisty-player>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[5] }}</b>
      <twisty-player id="learnPlayer" :experimental-setup-alg="`F R U R' U' F'`" background="none" alg="F U R U' R' F'"
        camera-longitude="0" back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[6] }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[7] }}</span>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U`" background="none" alg="U' R" camera-longitude="0"
        back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[8] }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[9] }}</span>
      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U R' U R U2 R' F U R U' R' F' U'`" background="none"
        alg="U" camera-longitude="0" back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[10] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U R' U R U2 R' F U R U' R' F'`" background="none"
        alg="F R U R' U' F'" camera-longitude="0" back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[11] }}</span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part4.content[12] }}</span>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fGHJ2i0CIq0?si=W6fO2EAYr4gCTpkN"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>

    <hr>

    <div class="rubikpart rubikpart5">
      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part5.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part5.warning }}</h4>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part5.objective }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[0] }}</span>

      <twisty-player id="learnPlayer" :experimental-setup-alg="``" background="none" alg="z2" camera-longitude="0"
        back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[1] }}</span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[2] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[3] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U' L' U R' U' L U z2`" background="none" alg="D'"
        camera-longitude="0" back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[4] }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[5] }}</b>
      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U' L' U R' U' L U' z2`" background="none"
        alg="R U R' U' R U R' U' R U R' U' R U R' U'" camera-longitude="0" back-view="top-right"
        experimental-stickering="OLL">
      </twisty-player>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[6] }}</span>
      <span>
        {{ webConfiguration.langData.views.learnRubiksCube.part5.content[7] }}</span>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[8] }}</span>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part5.content[9] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R U' L' U R' U' L U' z2`" background="none"
        alg="R U R' U' R U R' U' R U R' U' R U R' U' D' R U R' U' R U R' U' R U R' U' R U R' U' D2 R U R' U' R U R' U' R U R' U' R U R' U' z2"
        camera-longitude="0" back-view="top-right" experimental-stickering="OLL">
      </twisty-player>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/XkdAo2PBpEY?si=lHqPWTD7hgwWu01p"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


    </div>

    <hr>

    <div class="rubikpart rubikpart6">
      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part6.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part6.warning }}</h4>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part6.objective }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part6.content[0] }}</span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part6.content[1] }} </span>
<b>{{ webConfiguration.langData.views.learnRubiksCube.part6.content[2] }}</b>
      <twisty-player id="learnPlayer"
        :experimental-setup-alg="` M2' U' M2' U2' M2' U' M2' F R U' R' U R U R2 F' R U R U' R' U'`" background="none"
        alg="U" camera-longitude="0" back-view="top-right"
        experimental-stickering="PLL">
      </twisty-player>

      <span>{{ webConfiguration.langData.views.learnRubiksCube.part6.content[3] }}</span>

      <twisty-player id="learnPlayer"
        :experimental-setup-alg="` M2' U' M2' U2' M2' U' M2' F R U' R' U R U R2 F' R U R U' R'`" background="none"
        alg="R U R' U' R' F R2 U' R' U' R U R' F'" camera-longitude="0" back-view="top-right"
        experimental-stickering="PLL">
      </twisty-player>
      
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part6.content[4] }}</b>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part6.content[5] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`F r' F' r U r U' r2' D' F r U r' F' D r`"
        background="none" alg="F R U' R' U R U R2 F' R U R U' R' U2" camera-longitude="0" back-view="top-right"
        experimental-stickering="PLL">
      </twisty-player>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/cRQzph68QJ4?si=bajesrFlsm5Rk6Ok"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>

    <hr>

    <div class="rubikpart rubikpart7">
      <h2>{{ webConfiguration.langData.views.learnRubiksCube.part7.title }}</h2>
      <h4>{{ webConfiguration.langData.views.learnRubiksCube.part7.warning }}</h4>
      <b>{{ webConfiguration.langData.views.learnRubiksCube.part7.objective }}</b>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part7.content[0] }}</span>
      <span>{{ webConfiguration.langData.views.learnRubiksCube.part7.content[1] }}</span>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`R' U R' U' R' U' R' U R U R2`" background="none"
        alg="R2 U' R' U' R U R U R U' R" camera-longitude="0" back-view="top-right" experimental-stickering="PLL">
      </twisty-player>

      <b>{{ webConfiguration.langData.views.learnRubiksCube.part7.content[2] }}</b>

      <twisty-player id="learnPlayer" :experimental-setup-alg="`M2' U' M2' U2' M2' U' M2'`" background="none"
        alg="R2 U' R' U' R U R U R U' R y" camera-longitude="0" back-view="top-right" experimental-stickering="PLL">
      </twisty-player>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VE1PG3mnoug?si=D4HDz2uILkY6_k4K"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <b>{{ webConfiguration.langData.views.learnRubiksCube.end }}</b>

    <div id="scrollTopLearn" @click="scrollUpLearnRubik">&#8593;</div>

    <div>
      <div class="menuContainer">
        <!-- Flecha que muestra/oculta el menú -->
        <div class="arrowContainer" @click="toggleMenuLearn" :class="{ rotatedArrow: isMenuOpenLearn }">
          <div class="arrow"></div>
        </div>
        <div v-for="number in 7" :key="number" v-show="isMenuOpenLearn" class="menuItem"
          @click="selectPartLearn(`rubikpart${number}`)">
          {{ number }}
        </div>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { useWebConfiguration } from '@/stores/webConfiguration';

export default defineComponent({
  name: 'learnRubiksCube',


  setup() {
    const webConfiguration = useWebConfiguration();

    const isMenuOpenLearn = ref(true);

    const toggleMenuLearn = () => {
      isMenuOpenLearn.value = !isMenuOpenLearn.value;
    };

    const selectedPart = ref(''); // Inicialmente no se selecciona ninguna parte

    const selectPartLearn = (className: any) => {
      selectedPart.value = className;
      const selectedDiv = document.querySelector(`.${selectedPart.value}`);
      if (selectedDiv) {
        selectedDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };


    const scrollUpLearnRubik = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


    return {
      webConfiguration, scrollUpLearnRubik, selectPartLearn, isMenuOpenLearn,
      toggleMenuLearn,
    }

  }
});
</script>

<style scoped>
.learnRubiksCubeContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 83vw;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  gap: 20px;
  animation: openCrossMenu 2s linear;
}

@keyframes openCrossMenu {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}

.learnIntroduction {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

h2 {
  color: #fffb00;
  margin: 10px;
}

h4 {
  color: #ff4e4e;
  margin: 30px;

}

.linkVideosYTContainer {
  margin: 30px 0 30px 0;
}

.solveRubikTitle {
  text-align: center;
  color: #df5e5e;
  margin: -10px 0 20px 0;
  text-transform: uppercase;
  background: linear-gradient(to right, red, orange, yellow, rgb(113, 212, 113), rgb(123, 123, 238), indigo, violet);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbowAnimation 1s linear infinite;
}

@keyframes rainbowAnimation {
  0% {
    background-position: 0 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.backgroundBannerRubikContainer {
  width: 30%;
  height: auto;
  margin: 0 auto;

}

.backgroundBannerRubik {
  width: 100%;
}

.rubikpart {
  display: flex;
  flex-direction: column;
  gap: 12px;
  scroll-margin: 20px;
}

.learnPlayerContainer {
  margin: 20px;
}

#learnPlayer {
  margin: 0 auto;

}


.linkVideosYT {
  padding: 15px;
  border: 2px solid white;
  border-radius: 20px;
}

a {
  text-decoration: none;
  color: #75ff75;
}

a:hover {
  color: rgb(132, 233, 241);
}

iframe {
  margin: 20px auto;
  border: 2px solid white;
}

#scrollTopLearn {
  color: #7eff7e;
  font-size: 40px;
  cursor: pointer;
  width: 20px;
  margin: 5px auto;
}


.menuContainer {
  position: fixed;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
}

.menuItem {
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.menuItem:hover {
  background-color: #aff1a5;
  color: rgb(0, 0, 0);
}

.arrowContainer {
  cursor: pointer;
  position: absolute;
  right: -20px;
  /* Distancia desde el borde del menú */
  top: 50%;
  transform: translateY(-50%);
}

.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 8px;
  border-color: transparent transparent transparent #00ff4c;
}


.rotatedArrow {
  transform: translateY(-50%) rotate(900deg);
  /* Rotación de la flecha */
}



@media (max-width: 1100px) {

  .backgroundBannerRubikContainer {
    width: 50%;
  }

}

@media (max-width: 630px) {
  #learnPlayer {
    width: 90%;
  }

  iframe {
    width: 95%;
    height: 270px;
  }

  .menuContainer {
    left: 15px;
    font-size: 13px;
  }

  .menuItem {
    padding: 3px;
  }

  .arrowContainer {
    left: 30%;
    top: -20px;
  }

  .arrow {
    margin-right: 4px;

  }

  .arrow {
    margin-right: 4px;


  }

  .rotatedArrow {
    transform: rotate(90deg);
    margin-right: 25px;
  }
}

@media (max-width: 430px) {

  iframe {
    height: 210px;
  }
}
</style>