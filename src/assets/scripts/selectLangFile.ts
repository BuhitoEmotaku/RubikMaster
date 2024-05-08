export default async function selectLangFile(langCode: string): Promise<string | null> {
  try {
    // Importar todos los archivos de idioma de manera dinámica
    const modules = import.meta.glob(`../static/lang/*.json`);

    // Buscar el archivo de idioma correspondiente al código dado
    for (const path in modules) {
      const match = path.match(/([a-z]{2})\.json$/);
      if (match && match[1] === langCode) {
        // Devolver el contenido del archivo
        const langModule: any = await modules[path]();
        return langModule.default;
      }
    }
    
    localStorage.setItem('langCode_RBKMT', 'en');
    // Si no se encuentra un archivo específico, devuelve el contenido del archivo en inglés por defecto
    const defaultModule: any = await modules['../static/lang/en.json']();
    return defaultModule.default;
  } catch (error) {
    console.error('Error loading language data:', error);
    return null;
  }
}
