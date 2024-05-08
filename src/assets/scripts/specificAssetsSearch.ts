export default function specificAssetsSearch(assetChosen: any) {
  let assets: Record<string, { default: string }> = {};
  switch (assetChosen) {
    case "lang":
      assets = import.meta.glob(`@/assets/static/lang/**`, { eager: true });
      break;
  }

  const allFilePaths: string[] = Object.values(assets).reduce<string[]>((acc, module) => {
    if (module.default) {
      acc.push(module.default);
    }
    return acc;
  }, []);

  return allFilePaths;
}