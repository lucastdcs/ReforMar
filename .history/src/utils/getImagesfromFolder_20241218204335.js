export const getImagesFromFolder = (folderName, amount) => {
  const imageCount = amount;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push(new URL(`/src/assets/imgs/${folderName}/image${i}.jpg`, import.meta.url).href);
  }

  return images;
};

export const getMainImagesFromFolder = (folderName) => {
  // const thumbnail = new URL(`/src/assets/imgs/${folderName}/thumbnail.jpg`, import.meta.url).href;

  let thumbnail;

  try {
    // Tenta acessar o thumbnail
    thumbnail = new URL(`/src/assets/imgs/${folderName}/thumbnail.jpg`, import.meta.url).href;
  } catch {
    // Se não existir, usa image1
    thumbnail = new URL(`/src/assets/imgs/${folderName}/image1.jpg`, import.meta.url).href;
  }

  return
    thumbnail: thumbnail
  ;
};

export const getDetails = async (folderName) => {
  const detailsUrl = new URL(`/src/assets/imgs/${folderName}/details.json`, import.meta.url).href;
  
  try {
    const response = await fetch(detailsUrl); 
    if (!response.ok) {
      throw new Error(`Failed to fetch details for ${folderName}`);
    }
    const details = await response.json();
    return details;
  } catch (error) {
    console.error("Error fetching details:", error);
    return null;
  }
};