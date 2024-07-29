const getImagesFromFolder = (folderName) => {
    const imageCount = 5; // Atualize conforme o número de imagens em cada pasta
    const images = [];
  
    for (let i = 1; i <= imageCount; i++) {
      images.push(new URL(`/src/assets/imgs/${folderName}/image${i}.jpg`, import.meta.url).href);
    }
  
    return images;
  };
  
  export default getImagesFromFolder;