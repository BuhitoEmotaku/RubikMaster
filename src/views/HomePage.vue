<template>
  <AlgsTypes></AlgsTypes>
  <b class="ojectiveWeb" loading="eager">{{ webConfiguration.langData.views.homePage.ojectiveWeb }}</b>
  <div class="welcomeContainer">

    <div class="whoAmI">

      <h1 class="welcomeTitle">{{ webConfiguration.langData.views.homePage.welcomeTitle }}</h1>
      <b>{{ webConfiguration.langData.views.homePage.whoAmI.content[0] }} <a href="https://www.worldcubeassociation.org/persons/2015SARD02" target="_blank"><b>Buhito</b></a>
      {{ webConfiguration.langData.views.homePage.whoAmI.content[1] }}</b>
      <b>{{ webConfiguration.langData.views.homePage.whoAmI.content[2] }}</b>
    </div>
    <br>
    <div class="whyRubikMasterContainer">
      <h3 class="whyRubikMaster">{{ webConfiguration.langData.views.homePage.whyRubikMaster.title }}</h3>
      <b>{{ webConfiguration.langData.views.homePage.whyRubikMaster.content[0] }}</b><br>
      <b>{{ webConfiguration.langData.views.homePage.whyRubikMaster.content[1] }}</b>

    </div>

    <br>
    <div class="thanksToContainer">
      <h4 class="thnksToTitle">{{ webConfiguration.langData.views.homePage.thanksTo.title }}</h4>
      <a href="https://js.cubing.net/cubing/" target="_blank"><b>~ CubingJS ~</b></a>
      <a href="https://speedcubedb.com/" target="_blank"><b>~ SpeedCubeDB ~</b></a>
      <a href="http://cube.rider.biz/visualcube.php" target="_blank"><b>~ VisualCube ~</b></a>
      <a href="https://cstimer.net/" target="_blank"><b>~ csTimer ~</b></a>
    </div>
    <br>
    <b class="enjoyBuhito">{{  webConfiguration.langData.views.homePage.enjoyBuhito }}, <a href="https://www.instagram.com/ladivinaespadachina/"
        target="_blank"><b>Buhito</b></a> &lt;3 </b>



  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AlgsTypes from '@/components/AlgsTypes.vue';

import { useWebConfiguration } from '@/stores/webConfiguration';
export default defineComponent({
  name: 'homePage',

  components: {
    AlgsTypes,

  },

  setup() {
    const webConfiguration = useWebConfiguration();
    onMounted(() => {
    })
    return {
      webConfiguration
    }
  }
});
</script>

<style scoped>

h1, h2, h3, h4 {
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
}

.welcomeContainer {
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
}


.whoAmI {
  display: flex;
  flex-direction: column;
  animation: appearEffect 1.5s linear;
  animation-fill-mode: forwards;

}

.welcomeTitle {
  color: #5da8a8;
  margin: 6px;
}

.ojectiveWeb {
  border: 2px solid;
  max-width: 65%;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0);
  background-color: var(--color-backgroundOverlapping); 
}

@media (max-width:1000px) {

  .ojectiveWeb {
    max-width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

}

.whyRubikMasterContainer {
  animation: appearEffect 2.5s linear;
  animation-fill-mode: forwards;
}

.whyRubikMaster {
  display: flex;
  flex-direction: column;
  color: #ff6161;
  margin: 10px;

}


.thanksToContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  animation: appearEffect 3.5s linear;
  animation-fill-mode: forwards;
}



.thnksToTitle {
  color: yellow;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: rgb(244, 93, 239);
}

.enjoyBuhito {
  animation: appearEffect 3.5s linear;
  animation-fill-mode: forwards;
  padding-bottom: 40px;
}

@keyframes appearEffect {
  from {
    opacity: 0%;

  }

  to {
    opacity: 100%;

  }
}
</style>