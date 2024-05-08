import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

import { svMthPetition } from '@/stores/SvMthPetition';

import { TwistyAlgViewer } from "cubing/twisty";

import selectLangFile from '@/assets/scripts/selectLangFile';

import rubikMasterService from "@/services/rubikMasterService";

import { typeIndexMap, categories, algorithmParams } from '@/assets/static/rubikData/categories';

export const useWebConfiguration = defineStore('WebConfiguration', () => {
  const langData = ref();

  const router = useRouter();
  const route = useRoute();

  const svMthPetitionStore = svMthPetition();
  const webConfiguration = useWebConfiguration();

  const langSelected = ref();
  const visitsCount = ref();

  const twistyPlayer = <any>document.querySelector("#main-player");

  const loadAfterEach = async () => {
    router.afterEach(async (to, from) => {
      const regexAlgsUrl = /^\/algs\/\w+\/\w+\/[^/]+/;
      try {
        if (regexAlgsUrl.test(to.path)) {

          svMthPetitionStore.typeIndex = typeIndexMap[`${to.params.algorithmType}`] || 0;
          svMthPetitionStore.subTypeIndex = 0;
          svMthPetitionStore.typeAlgSelected = to.params.algorithmType || 'f2l';
          svMthPetitionStore.subTypeAlgSelected =  to.params.algorithmSubType || categories[typeIndexMap[`${to.params.algorithmType}`]].subtypes ;
          // Llamar a algsList después de que se haya actualizado typeAlgSelected
          await svMthPetitionStore.algsList(svMthPetitionStore.typeAlgSelected, svMthPetitionStore.subTypeAlgSelected);
          svMthPetitionStore.selectedAlgorithmIndex = 0;
          svMthPetitionStore.selectedSecondaryAlgorithmIndex = 0;
          svMthPetitionStore.createAlgView(0);
          svMthPetitionStore.genNumMovesAlg(svMthPetitionStore.algListStore[svMthPetitionStore.selectedAlgorithmIndex].alg);
        } else {
          svMthPetitionStore.checkAlgListStore = false;
          svMthPetitionStore.typeAlgSelected = -1;
          svMthPetitionStore.subTypeAlgSelected = -1;
        }
      } catch (e) {
        await router.push('/');
      }

    });
  }


  const loadLangData = async (langChangeCode: any) => {
    try {
      let langFile;
      let languageCode;

      if (langChangeCode && langChangeCode.target) {
        languageCode = langChangeCode.target.value;
      } else {
        languageCode = localStorage.getItem('langCode_RBKMT') || navigator.language.split('-')[0];
      }

      //else languageCode = navigator.language.split('-')[0] || langChangeCode;
      localStorage.setItem('langCode_RBKMT', languageCode);
      langFile = await selectLangFile(languageCode);
      langData.value = langFile;
      langSelected.value = localStorage.getItem('langCode_RBKMT');
      //change cross color
      svMthPetitionStore.selectedColor = webConfiguration.langData.config.crossColors[Number(localStorage.getItem('crossColorIndex_RBKMT'))];
    } catch (error) {
      console.error('Error loading language data:', error);
      return null;
    }
  };

  const theme = ref('light');
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  const updateTheme = async (newTheme: any) => {
    theme.value = newTheme;
    localStorage.setItem('theme_RBKMT', newTheme);
    document.body.setAttribute('theme', newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme.value === 'light' ? 'dark' : 'light';
    updateTheme(newTheme);
  };

  watch(theme, (newTheme) => {
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
  });

  prefersDarkTheme.addEventListener('change', (e) => {
    updateTheme(e.matches ? 'dark' : 'light');
  });

  // Verificar y asignar valor predeterminado para el modo nocturno
  const themeStorage = localStorage.getItem('theme_RBKMT');
  const initialTheme = themeStorage || (prefersDarkTheme.matches ? 'dark' : 'light');

  const registVisit = async () => {
    const visitCookie = document.cookie.includes('_visit=true');

    if (!visitCookie) {
      // Si no existe la cookie, hacemos la llamada a la API y creamos la cookie
      const response = await rubikMasterService.createVisit();

      // Obtener la fecha actual en UTC
      const currentDate = new Date();
      const currentUTCDate = new Date(Date.UTC(
        currentDate.getUTCFullYear(),
        currentDate.getUTCMonth(),
        currentDate.getUTCDate(),
        23, // Hora UTC
        59, // Minuto UTC
        59, // Segundo UTC
        0   // Milisegundo UTC
      ));

      document.cookie = `_visit=true; expires=${currentUTCDate.toUTCString()}; path=/`;
    }
  };

  const loadVisitsCount = async () => {
    const response = await rubikMasterService.getVisitsCount();
    visitsCount.value = response.data.numVisits;
  }

  const loadWebSettings = () => {
    loadLangData('');
    registVisit();
    loadVisitsCount();
    loadAfterEach();
    updateTheme(initialTheme);
    // Example of creating a new element and adding it to the page.
    const twistyAlgViewer = document.body.appendChild(
      new TwistyAlgViewer({ twistyPlayer })
    );

  }

  return { loadWebSettings, loadLangData, toggleTheme, langData, langSelected, theme, visitsCount };
});
