export const getImagesFromFolder = (folderName, amount) => {
  const imageCount = amount;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push(new URL(`/src/assets/imgs/${folderName}/image${i}.jpg`, import.meta.url).href);
  }

  return images;
};

export const getBeforeAfterImagesFromFolder = (folderName) => {
  const beforeImageUrl = new URL(`/src/assets/imgs/${folderName}/antes.jpg`, import.meta.url).href;
  const afterImageUrl = new URL(`/src/assets/imgs/${folderName}/depois.jpg`, import.meta.url).href;
  const thumbnail = new URL(`/src/assets/imgs/${folderName}/thum`)

  return {
    antes: beforeImageUrl,
    depois: afterImageUrl,
  };
};

export const getThumbnailFromFolder = (folderName) => {
  const thumbnail = new URL(
    `/src/assets/imgs/projeto${folderName}/thumbnail.jpg`,
    import.meta.url
  ).href;

  return thumbnail;
}



