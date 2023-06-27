export const getImages = async ({ paramSearch }) => {
  try {
    const API_KEY = import.meta.env.VITE_UNPLASH_ACCESSKEY;
    const RANDOM_PAGE = Math.floor(Math.random() * 1000);

    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&page=${RANDOM_PAGE}&query=${paramSearch}`;

    const res = await fetch(URL);
    const { results } = await res.json();
    return { imageUrl: results[0].urls.small };
  } catch (e) {
    console.log(e);
  }
};
