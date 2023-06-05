import axios from 'axios'
const searchImages= async (term)=>{ 
    const response=  await axios.get('https://api.unsplash.com/search/photos',
    {headers:{
      Authorization:'Client-ID ukshN0y83rsb5yb9N-Ki4RKrAjgzqHRW6xP488zLLy0'
    },
  params:{
    query:term,
  },
});
  debugger;
  return response.data.results;
  };
  export default searchImages;