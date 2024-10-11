export const getImagesFromFolder = async (folderName, amount) => {
  const imageCount = amount;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    const imageUrl = new URL(`/src/assets/imgs/${folderName}/image${i}.jpg`, import.meta.url).href;

    try {
      const response = await fetch(imageUrl);
      if (response.ok) {
        images.push(imageUrl);
      }
    } catch (error) {
      console.log(`Imagem ${imageUrl} não encontrada.`);
    }
  }

  return images.length > 0 ? images : undefined;
};

export const getMainImagesFromFolder = (folderName) => {
  const beforeImageUrl = new URL(`/src/assets/imgs/${folderName}/antes.jpg`, import.meta.url).href;
  const afterImageUrl = new URL(`/src/assets/imgs/${folderName}/depois.jpg`, import.meta.url).href;
  const thumbnail = new URL(`/src/assets/imgs/${folderName}/thumbnail.jpg`, import.meta.url).href;

  return {
    antes: beforeImageUrl,
    depois: afterImageUrl,
    thumbnail: thumbnail
  };
};

