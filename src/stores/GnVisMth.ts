import http from "@/http-common"; // Importar la configuración de Axios

import { ref } from 'vue';
import { defineStore } from 'pinia';
// import axios from 'axios'; // Ya no necesitas importar Axios aquí
import { algorithmParams, typeIndexMap } from '@/assets/static/rubikData/categories';

export const gnVisMth = defineStore('GnVisMth', () => {

    const arrBlobs = ref<any>(Array.from({ length: Object.keys(algorithmParams).length }, () => []));
    const urlSetupConfig = 'https://rubikmaster.ddns.net/visualcube?'; // URL base
    const gnCubeAlgVis = async (algListStore: any, typeAlgSelected: any) => {
        let results = []; // Array para almacenar las URLs construidas

        // Iterar sobre cada algoritmo en la lista
        for (const algSimul of algListStore) {
            try {
                // Construir la URL para la solicitud POST
                const apiUrl = `${urlSetupConfig}${algorithmParams[typeAlgSelected]}${algSimul.alg}`;
                // Agregar la URL al array de resultados
                results.push(apiUrl);
            } catch (error: any) {
                console.error(`Error al obtener la URL para ${algSimul.nameAlg}: ${error.message}`);
            }
        }

        try {
            // Enviar las URLs al servidor PHP usando await para esperar la respuesta
            const imgsCubes = await http.post(urlSetupConfig, { urlsImgsCubes: JSON.stringify(results) });
            const blobUrls: string[] = [];
            for (const svgString of imgsCubes.data) {
                // Crear un blob a partir del contenido SVG
                const blob = new Blob([svgString], { type: 'image/svg+xml' });

                // Crear una URL para el blob
                const url = URL.createObjectURL(blob);

                // Agregar la URL del blob al array
                blobUrls.push(url);
            }

            arrBlobs.value[typeIndexMap[typeAlgSelected]] = blobUrls;
            
            return blobUrls; // Devolver datos si es necesario
        } catch (error) {
            console.error('Error al enviar las URLs al servidor:', error);
            throw error; // Propagar el error para que pueda ser manejado fuera de esta función
        }
    };

    return { arrBlobs, gnCubeAlgVis };
});
