import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID KrYl_j9pbHWdhXqFA-RgvRVrmwShk_5-amwipZ0i3ec",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
