// services/unsplash/unsplash.service.js
export class UnsplashService {
    constructor() {
      this.accessKey = "BIu0gepubBSxWWbpV8DZar7DBZuWraeL9LQ1mrGZDOI"; // Clave de acceso a la API
      this.endPoint = "https://api.unsplash.com/search/photos";
    }
  
    async getImages(query, width = 200, height = 200, fit = "clip", limit = 10) {
      try {
        const response = await fetch(
        `${this.endPoint}?query=${query}&client_id=${this.accessKey}&per_page=${limit}`
        );
        const jsonResponse = await response.json();
        const imagesList = jsonResponse.results;

        return imagesList.map((image) => ({
          id: image.id,
          description: image.description || "Sin descripción",
          url: `${image.urls.raw}&w=${width}&h=${height}&fit=${fit}`,
          full_url: image.urls.full,
        }));
      } catch (error) {
        console.error("Error al obtener las imágenes:", error.message);
        return [];
      }
    }
  }

const newUnsplashService = new UnsplashService();
export { newUnsplashService };