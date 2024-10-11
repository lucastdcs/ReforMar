export const getImagesFromFolder = (folderName, amount) => {
  const imageCount = amount;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push(new URL(`/src/assets/imgs/${folderName}/image${i}.jpg`, import.meta.url).href);
  }

  return images;
};

export const getMainImagesFromFolder = (folderName) => {
  const beforeImageUrl = new URL(`/src/assets/imgs/${folderName}/antes.jpg`, import.meta.url).href;
  const afterImageUrl = new URL(`/src/assets/imgs/${folderName}/depois.jpg`, import.meta.url).href;
  const thumbnail = new URL(`/src/assets/imgs/${folderName}/thumbnail.jpg`, import.meta.url).href;

  console.log("🚀 ~ getMainImagesFromFolder ~ thumbnail:", thumbnail)

  if (thumbnail === 'localhost:5173/src/utils/undefined'){
    return
  }

  return {
    antes: beforeImageUrl,
    depois: afterImageUrl,
    thumbnail: thumbnail
  };
};

