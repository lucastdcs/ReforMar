export const getImagesFromFolder = (folderName,) => {
  const imageCount = 5; // Atualize conforme o número de imagens em cada pasta
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push(new URL(`/src/assets/imgs/${folderName}/image${i}.jpg`, import.meta.url).href);
  }

  return images;
};



export const getBeforeAfterImagesFromFolder = (folderName) => {
  const beforeImageUrl = new URL(`/src/assets/imgs/${folderName}/antes.jpg`, import.meta.url).href;
  const afterImageUrl = new URL(`/src/assets/imgs/${folderName}/depois.jpg`, import.meta.url).href;

  return {
    antes: beforeImageUrl,
    depois: afterImageUrl,
  };
};



