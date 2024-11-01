import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-key': 'c25d3dbfedmshef28610689bd310p144d7ajsn79e33514cb4d',
      'x-rapidapi-host': 'bayut.p.rapidapi.com'
    }
  });
    
  return data;
}