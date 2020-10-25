import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms({limit = 10} = {}) {
  const apiURL = `${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}