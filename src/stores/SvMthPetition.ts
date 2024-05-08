import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import rubikMasterService from "@/services/rubikMasterService";
import { Alg } from "cubing/alg";
export const svMthPetition = defineStore('SvMthPetition', () => {

  
  const algListStore = ref<any>(reactive({
    alg: "",
    numberAlg: 0,
    typeAlg: "",
    subTypeAlg: "",
    setupAlg: "",
    movesCountAlg: 0,
    levelAlg: "",
    secondaryAlgs: []
  }));


  const typeAlgSelected = ref();
  const subTypeAlgSelected = ref();

  const typeIndex = ref(1);
  const subTypeIndex = ref(0);

  const selectedAlgorithmIndex = ref(-1);
  const selectedSecondaryAlgorithmIndex = ref(-1);

  const stickerAlgType = ref('');

  const algSelected = ref(' ');
  const setupSelected = ref(' ');

  const rotationCrossColor = ['x2', "z'", 'x', "z", "x'", ""];
  const colorCrossSelected = ref(0);
  const selectedColor = ref();
  const checkAlgListStore = ref(false);
  const numMovesAlg = ref(0);

  const algsList = async (algorithmType: any, algorithmSubType: string) => { // Asegurarse de que id sea de tipo any o definir un tipo específico
    try {
      const response: any = await rubikMasterService.getAlgsList(algorithmType, algorithmSubType);
      algListStore.value = response.data.algList;
    } catch (error) {
      console.error('Error getAlgsList RubikMaster');
    }
  }

  const createAlgView = async (index: any) => { // Asegurarse de que id sea de tipo any o definir un tipo específico

    try {

      if (index >= 0) {
        algSelected.value = algListStore.value[selectedAlgorithmIndex.value].alg;
        const algSel = new Alg(algSelected.value);
        setupSelected.value = String(algSel.invert());
      } else {
        algSelected.value = algListStore.value[selectedAlgorithmIndex.value].secondaryAlgs
        [(Math.abs(selectedSecondaryAlgorithmIndex.value + 1))];
        const algSel = new Alg(algSelected.value);
        setupSelected.value = String(algSel.invert().toString());
      }
    } catch (error) {
      console.error('Error getAlgsList RubikMaster');
    }
  }

  const genNumMovesAlg = (algSol: any) => {
    const numMoves = algSol.toString().replace(/'|2|3/g, '').split(' ').filter(Boolean).length;
    numMovesAlg.value = numMoves;
  };

  return {
    algListStore, typeAlgSelected, subTypeAlgSelected, typeIndex, subTypeIndex,
    selectedAlgorithmIndex, selectedSecondaryAlgorithmIndex, algSelected, setupSelected,
    stickerAlgType, rotationCrossColor, selectedColor, colorCrossSelected, numMovesAlg, checkAlgListStore,
    algsList, createAlgView, genNumMovesAlg
  }
})
