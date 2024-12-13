const extensions = ['jpeg', 'jfif'];

export const getImagesFromFolder = (folderName, amount) => {
  const images = [];

  for (let i = 1; i <= amount; i++) {
    let imageFound = false;

    for (const ext of extensions) {
      try {
        const imageUrl = new URL(`/src/assets/imgs/${folderName}/image${i}.${ext}`, import.meta.url).href;
        images.push(imageUrl);
        imageFound = true;
        break; // Sai do loop assim que encontra uma extensão válida
      } catch (error) {
        // Ignora erros ao carregar imagens com a extensão atual
      }
    }

    if (!imageFound) {
      console.warn(`Image not found: image${i} in folder ${folderName}`);
    }
  }

  return images;
};

export const getMainImagesFromFolder = (folderName) => {
  try {
    const beforeImageUrl = new URL(`/src/assets/imgs/${folderName}/antes.jpg`, import.meta.url).href;
    const afterImageUrl = new URL(`/src/assets/imgs/${folderName}/depois.jpg`, import.meta.url).href;
    const thumbnail = new URL(`/src/assets/imgs/${folderName}/thumbnail.jpg`, import.meta.url).href;

    return {
      antes: beforeImageUrl,
      depois: afterImageUrl,
      thumbnail: thumbnail
    };
  } catch (error) {
    console.error("Error loading main images:", error);
    return {
      antes: null,
      depois: null,
      thumbnail: null
    };
  }
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
