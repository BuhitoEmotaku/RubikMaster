<template>
  <div class="topBannerContainer">
    <nav class="navTopBanner">
      <div class="logoContainer">
        <h1><RouterLink to="/"><b class="leftTitle">Rubik &nbsp;
            <img class="logoRubikMaster" src="@/assets/favicon.ico" alt="logo Rubik Master">aster</b></RouterLink></h1>
        
        <span class="config_Mobile" @click="showModal = true">
          ⚙️
        </span>
      </div>
      <marquee class="sloganRubikMaster"><b>{{ webConfiguration.langData.components.topBanner.sloganRubikMaster }}</b>
      </marquee>
      <span class="config_Pc" @click="showModal = true">
        ⚙️
      </span>
    </nav>

    <!-- Modal -->
    <div class="modal" :class="{ 'is-active': showModal }">
      <div class="modal-background" @click="showModal = false"></div>
      <div class="modal-content">
        <!-- Botón para cerrar el modal -->
        <button class="modal-close" @click="showModal = false"><b>&times;</b></button>

        <!-- Contenido del modal -->
        <div class="modal-body">
          <h2>{{ webConfiguration.theme.toLocaleUpperCase() }} Mode</h2>
          <b class="moon_color" @click="webConfiguration.toggleTheme()" v-if="webConfiguration.theme == 'dark'">🌙</b>
          <b class="moon_color" @click="webConfiguration.toggleTheme()" v-if="webConfiguration.theme == 'light'">☀️</b>
          <h2 class="languajeTitle">LANGUAJE</h2>
          <!-- Selector de idiomas -->
          <select v-model="webConfiguration.langSelected" @change="webConfiguration.loadLangData($event)">
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="zh">Chinese</option>
            <option value="ja">Japanese</option>
            <!-- Agrega más opciones según sea necesario -->
          </select>
          <div class="visitsContainer">
            <h2 class="titleVisits">Nº VISITS (1/d)</h2>
          <b class="countVisits">----</b>
            <b class="countVisitsTop">| {{ webConfiguration.visitsCount }} |</b>
            <b class="countVisitsBottom">----</b>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { useWebConfiguration } from '@/stores/webConfiguration';
export default defineComponent({
  name: 'TopBanner',
  setup() {
    const webConfiguration = useWebConfiguration();

    const showModal = ref(false);

    const openModalClose = () => {
      showModal.value = true;
    };

    return {
      webConfiguration, showModal, openModalClose
    };
  }
});
</script>

<style scoped>

h2 {
  margin: 5px;
}
.navTopBanner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 20px;
  background-color: #131313;
  background-color: var(--color-backgroundOverlapping);
  color: var(--color-colorMain);
}

.leftTitle {
  font-size: 23px;
  background-color: #ffffff03;
  padding: 7px;
  box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-content: center;
  color: var(--color-colorMain);
}

.leftTitle:hover {
  transition: 0.5s linear;
  color: #d697f2;
}

.moon_color {
  padding: 10px;
  cursor: pointer;
}

.config_Pc {
  padding: 10px;
  cursor: pointer;
}

.config_Mobile {
  display: none;
  padding: 2px;
  border-radius: 10px;
  cursor: pointer;

}

.sloganRubikMaster {
  max-width: 500px;
  font-size: 20px;
}

.logoRubikMaster {
  width: 34px;
  height: auto;
  margin: 1px;
}

a {
  text-decoration: none;
}

.configIcon {
  cursor: pointer;
}

select {
  text-align: center;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Fondo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  /* Z-index alto para estar por encima de otros elementos */
  opacity: 0;
  /* Inicialmente oculto */
  visibility: hidden;
  /* Inicialmente oculto */
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.is-active {
  opacity: 1;
  /* Visible */
  visibility: visible;
  /* Visible */
}

.modal-content {
  background-color: var(--color-backgroundOverlapping);
  color: var(--color-colorMain);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(80, 80, 80, 0.3);
  width: 80%;
  /* Ancho del contenido */
  max-width: 400px;
  /* Ancho máximo del modal */
}

.modal-close {
  position: relative;
  float: right;
  border: none;
  font-size: 24px;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-colorMain);

}

.modal-close:hover {
  color: red;
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
  gap: 5px;
}

.visitsContainer {
  display: flex;
  flex-direction: column;
}

.countVisitsTop {
  margin-top: -12px;
}


.countVisitsBottom {
  margin-top: -15px;
}


@media (max-width: 800px) {
  .navTopBanner {
    display: flex;
    flex-direction: column;
    justify-content: none;
    background-color: transparent;
  }

  .logoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .config_Mobile {
    display: block;
  }

  .config_Pc {
    display: none
  }
}
</style>
