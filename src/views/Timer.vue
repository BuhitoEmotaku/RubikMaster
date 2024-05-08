<template>
  <div class="timerContainer">
    <iframe id="csTimerIframe" class="csTimer"
      src="https://rubikmaster.ddns.net/tools/cstimer-master/cstimer-master/src/index.php" frameborder="0"></iframe>
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, createApp, onBeforeUnmount } from 'vue';
import RoutesModel from '../components/RoutesModel.vue';
export default defineComponent({
  name: 'CSTimer',
  components: {
    RoutesModel
  },
  setup() {
    
    const propertiesData = {
      "sessionData": "{\"1\":{\"name\":1,\"opt\":{},\"rank\":1,\"stat\":[0,0,-1],\"date\":[null,null]},\"2\":{\"name\":2,\"opt\":{},\"rank\":2},\"3\":{\"name\":3,\"opt\":{},\"rank\":3},\"4\":{\"name\":4,\"opt\":{},\"rank\":4},\"5\":{\"name\":5,\"opt\":{},\"rank\":5},\"6\":{\"name\":6,\"opt\":{},\"rank\":6},\"7\":{\"name\":7,\"opt\":{},\"rank\":7},\"8\":{\"name\":8,\"opt\":{},\"rank\":8},\"9\":{\"name\":9,\"opt\":{},\"rank\":9},\"10\":{\"name\":10,\"opt\":{},\"rank\":10},\"11\":{\"name\":11,\"opt\":{},\"rank\":11},\"12\":{\"name\":12,\"opt\":{},\"rank\":12},\"13\":{\"name\":13,\"opt\":{},\"rank\":13},\"14\":{\"name\":14,\"opt\":{},\"rank\":14},\"15\":{\"name\":15,\"opt\":{},\"rank\":15}}",
      "col-font": "#ffffff",
      "col-back": "#000000",
      "col-board": "#444444",
      "col-button": "#ee3311",
      "col-link": "#ffee44",
      "col-logo": "#1188ff",
      "col-logoback": "#ffffff",
      "color": "u",
      "useMilli": true
    };


    const onIframeLoaded = () => {
      const frame = document.getElementById('csTimerIframe') as HTMLObjectElement;

      if (frame) {
        frame.onload = function () {
          const frameDoc = frame.contentDocument || frame.contentWindow?.document;

          if (frameDoc) {
            const scrambleDiv = frameDoc.getElementById('scrambleDiv');

            if (scrambleDiv) {
              // Crear un elemento contenedor dentro de scrambleDiv
              const container = frameDoc.createElement('div');

              // Montar el componente RoutesModel en el elemento contenedor
              const app = createApp(RoutesModel);
              const vm = app.mount(container);

              // Insertar el contenedor al principio de scrambleDiv
              scrambleDiv.insertBefore(container, scrambleDiv.firstChild);
            }
          }
        };
      }
    };

    onMounted(() => {

      if (localStorage.getItem('properties') == null) localStorage.setItem('properties', JSON.stringify(propertiesData));
      onIframeLoaded();
    })

    return {
    };
  },
});
</script>

<style scoped>
.timerContainer {
  text-align: center;
  box-shadow: 0px -5px 10px rgba(255, 255, 255, 0.4);
}

.csTimer {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: timerAppearEffect 3s linear;
  animation-fill-mode: forwards;
}

@keyframes timerAppearEffect {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}

.routesContainer {
  max-width: 10px;
}

.menu-icon {
  position: fixed;
  bottom: 20px;
  /* Ajusta según sea necesario */
  left: 50%;
  transform: translateX(-50%);
  animation: timerAppearEffect 3s linear;
  animation-fill-mode: forwards;
  cursor: pointer;

  z-index: 1;
}

.menu-icon b {
  padding: 5px;
  background-color: #3e3e3e;
  border: 2px solid #00d52b;
  border-radius: 5px;
}

.menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #3e3e3e;
  border: 2px solid;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: none;
  /* Ocultar el menú inicialmente */
}

.menu-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.menu-header span {
  cursor: pointer;
  padding: 10px
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
  display: none;
  /* Ocultar el overlay inicialmente */
}


.routes_csTimer {
  max-width: 100%;
}

@media (max-width: 1024px) {
  .menu-icon {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    cursor: pointer;
    z-index: 1;


  }

}


@media (max-width: 700px) {
  .menu-icon {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    cursor: pointer;



  }

}

@media (max-width: 470px) {
  .menu-icon {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    cursor: pointer;

  }

}
</style>
