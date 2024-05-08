<template>
  <div class="">
    <nav>
      <div class="algsTypes">
        <div class="typesCube">
          <!-- Agrega la clase 'active' si el tipo está seleccionado -->
          <button v-for="typeSel, index in categories" :key="typeSel.type.name" @click="changeAlgorithmType(typeSel.type.name, index)"
            :class="[getClass(typeSel.type.name), { active: typeSel.type.name === svMthPetitionStore.typeAlgSelected }]">
            <div class="informationType" @click.stop="openCloseTypeInfo(typeSel.type.name)">i</div>
            <div class="imgAlgsTypesContainer">
              <img class="imgAlgsTypes" :src="typeSel.type.img" alt="imgAlgsTypes">
              <b class="typeTitle">{{ typeSel.type.name }}</b>
              </img>
            </div>

          </button>
        </div>
        <div class="subTypesCube" v-if="svMthPetitionStore.checkAlgListStore">
          <!-- Agrega la clase 'active' si el subtipo está seleccionado -->
          <button v-for="subType in subTypeSelected" :key="subType" @click="changeAlgorithmSubType(subType)"
            :class="[getClass(subType), { active: subType === svMthPetitionStore.subTypeAlgSelected }]">
            <b>{{ subType }}</b>
          </button>
        </div>
      </div>
    </nav>
  </div>

  <div>
    <!-- Modal -->
    <div class="modalTypesInfo" v-if="showModalTypesInfo">
      <div class="modal-content">
        <!-- Botón para cerrar el modal -->
        <span class="close" @click="openCloseTypeInfo('')">&times;</span>
        <!-- Contenido del modal (puedes personalizarlo según tus necesidades) -->
        <h2>{{ infoTypeSelected.toUpperCase() }}</h2><br>
        <p>{{ webConfiguration.langData.components.algsTypes.infoTypesList[infoTypeSelected].description }}</p><br>
        <p>{{ webConfiguration.langData.components.algsTypes.numCases }} - {{
            webConfiguration.langData.components.algsTypes.infoTypesList[infoTypeSelected].cases }}</p>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

import { svMthPetition } from '@/stores/SvMthPetition';
import { useWebConfiguration } from '@/stores/webConfiguration';

import { categories, typeIndexMap } from '@/assets/static/rubikData/categories';

export default defineComponent({
  name: 'AlgsTypes',
  setup() {

    const router = useRouter();
    const route = useRoute();

    const svMthPetitionStore = svMthPetition();
    const webConfiguration = useWebConfiguration();


    const changeAlgorithmType = async (type: string, indexType: number) => {

      if (!window.location.href.includes(`/algs/3x3/${type}/${categories[typeIndexMap[`${type}`]].subtypes[0]}`)) {
        subTypesButtons(indexType);
        router.push({ path: `/algs/3x3/${type}/${categories[typeIndexMap[`${type}`]].subtypes[0]}` });
      }

    };

    const changeAlgorithmSubType = async (subType: string) => {
      router.push({ path: `/algs/3x3/${route.params.algorithmType}/${subType}` });
    };

    const subTypeSelected = ref<any>([
      "All",
      "Free Pair",
      "Oriented Pair",
      "Disoriented pair"
    ]);

    const subTypesButtons = (indexType:number) => {
      subTypeSelected.value = categories[indexType].subtypes;
    }

    const showModalTypesInfo = ref(false);

    const infoTypeSelected = ref();
    const openCloseTypeInfo = (type: string) => {
      showModalTypesInfo.value = !showModalTypesInfo.value;
      infoTypeSelected.value = type;
    };

    const getClass = (subType: any) => {
      return subType.replace(/\s+/g, '');
    }

    const scrollAlgsType = (algTypeParent: any, algTypeChild: any) => {
      let scrollSubTypesCube = document.querySelector(`.${algTypeParent}`);
      if (scrollSubTypesCube instanceof HTMLElement) {
        let algorithmSubType = getClass(algTypeChild);
        let scrollActiveButton = document.querySelector(`.${algorithmSubType}`) as HTMLButtonElement;
        if (scrollActiveButton) {
          const remainingSpace = scrollSubTypesCube.clientWidth - scrollActiveButton.offsetWidth;
          const spaceLeftAndRight = remainingSpace / 2;
          scrollSubTypesCube.scrollLeft = scrollActiveButton.offsetLeft - spaceLeftAndRight;
        }
      }
    }

    onMounted(async () => {

      subTypesButtons(svMthPetitionStore.typeIndex);
      // Otras operaciones necesarias al cargar el componente

      // Watch para svMthPetitionStore.checkAlgListStore
      watch(() => svMthPetitionStore.checkAlgListStore, async (newValue, oldValue) => {
        // Usamos nextTick para esperar a que se complete la actualización del DOM
        await nextTick();
        // Luego ejecutamos la lógica que queremos
        scrollAlgsType("typesCube", route.params.algorithmType);
        scrollAlgsType("subTypesCube", route.params.algorithmSubType);
      });
    });

    return {
      svMthPetitionStore, webConfiguration, subTypeSelected, showModalTypesInfo, infoTypeSelected, categories,
      changeAlgorithmType, changeAlgorithmSubType, openCloseTypeInfo, getClass
    };
  }
});
</script>

<style scoped>
.algsTypes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 10px;
  animation: appearEffect 1s linear;
  animation-fill-mode: forwards;
}

.imgAlgsTypesContainer {

  display: flex;
  flex-direction: column;
  gap: 5px;
}

.informationType {
  position: absolute;
  top: 77%;
  left: 10px;
  padding: 2px;
  width: 21px;
  color: white;
  background-color: #3d3e3d;
  border-radius: 20px;
  border: 1px solid white;
  z-index: 200;
  cursor: pointer;
}

.informationType:hover {
  background-color: #888282;
}

.typesCube {
  position: relative;
  display: flex;
  gap: 10px;
  max-width: 100%;
  overflow: auto;
}

.imgAlgsTypes {
  width: 100px;

}

.typeTitle {
  width: 70%;
  margin: 0 auto;
  word-break: break-word;
}

.subTypesCube {
  position: relative;
  display: flex;
  animation: appearEffect 1s linear;
  animation-fill-mode: forwards;
  gap: 10px;
  max-width: 60%;
  overflow: auto;
}

button {
  /* Estilos comunes para los botones */
  position: relative;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid white;
  background-color: var(--color-backgroundOverlapping);
  color: var(--color-colorMain);
  margin: 10px 0 10px 0;

}

button.active {
  /* Estilos para el botón seleccionado */
  background-color: #8ef1b7;
  border: 2px solid blue;
  /* Cambia al color deseado */
  color: rgb(0, 0, 0);
  border-color: #4CAF50;
}

button:hover {
  /* Estilos al pasar el ratón por encima */
  background-color: #4f52d8;
  border-color: #ddd;
}


/* Estilos del modal */
.modalTypesInfo {

  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Fondo semi-transparente */
}

.modal-content {
  background-color: #5b0b0b;
  margin: 15% auto;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@keyframes appearEffect {
  from {
    opacity: 0%;

  }

  to {
    opacity: 100%;

  }
}



@media (max-width: 1080px) {
  .subTypesCube {
    max-width: 100%;
  }

}

@media (max-width: 450px) {
  .imgAlgsTypesContainer img {
    width: 50px;
  }

  .informationType {
    position: absolute;
    top: 77%;
    left: 4px;
    padding: 1px;
    width: 19px;
    color: white;
    background-color: #3d3e3d;
    border-radius: 20px;
    border: 1px solid white;
    z-index: 200;
    cursor: pointer;

  }
}
</style>