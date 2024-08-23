import axios from 'axios';

export const BASEURL = 'https://streaming-availability.p.rapidapi.com/shows/search';
export const BASEURL2 = 'https://moviedatabase8.p.rapidapi.com'

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
  }
};

const options2 = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
  }
};

 
export const fetchData = async(url)=>{

    const { data } = await axios.get(`${BASEURL}/${url}`, options)

    return data;
}