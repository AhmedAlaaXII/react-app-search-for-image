import axios from "axios";
const searchImages = async (term, page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID V20iXFrrtgTIQ33TXkRmpq9pZEJ9HbxmCQk8zEV3T6Y",
    },
    params: {
      query: term,
      page: page,
      per_page: 30,
    },
  });
  return response.data.results;
};
export default searchImages;
