const allowedExtensions = ['jpg', '.png', '.jfif', '.jpeg', '.webp'];

export const getImagesFromFolder = (folderName, amount) => {
  const imageCount = amount;
  const images = [];

  for (let i = 1; i <= imageCount; i++) {
    images.push(new URL(`/src/assets/imgs/${folderName}/image${i}.${allowedExtensions}`, import.meta.url).href);
  }

  return images;
};

export const getMainImagesFromFolder = (folderName) => {
  const beforeImageUrl = new URL(`/src/assets/imgs/${folderName}/antes.${allowedExtensions}`, import.meta.url).href;
  const afterImageUrl = new URL(`/src/assets/imgs/${folderName}/depois.${allowedExtensions}`, import.meta.url).href;
  const thumbnail = new URL(`/src/assets/imgs/${folderName}/thumbnail.${allowedExtensions}`, import.meta.url).href;

  return {
    antes: beforeImageUrl,
    depois: afterImageUrl,
    thumbnail: thumbnail
  };
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