import axios from 'axios';

export const axiosPicture = async (query) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '29876171-467d2b4c1ee85715865faf87a';

  const filtersImages = '&per_page=12&image_type=photo&orientation=horizontal&safesearch=true';

  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}${filtersImages}`
  );

  return response.data.hits;


  // function searchImages(e) {
  //   e.preventDefault();
  //   inputValue = e.currentTarget.elements.searchQuery.value.trim();
  
  //   if (inputValue) {
  //     page = 1;
  //     fetchImages(inputValue, page)
  //       .then(setMarkup)
  //       .catch(err => {
  //         Notify.failure(
  //           'Sorry, there are no images matching your search query. Please try again.'
  //         );
  //         console.log(err);
  //       });
  //   }
  //   imageList.innerHTML = '';
  // }

  // function handlerLoadMore(e) {
  //   e.preventDefault();
  //   page += 1;
  //   fetchImages(inputValue, page).then(setMarkup);
  // }






  // const axiosQuery = async () => {
  //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  //     return response;
    
  //   };
    
  //   export const axiosPicture = axiosQuery().then(res => consoleres.data.results)
    
    
    
  // return await fetch(`https://pokeapi.co/api/v2/pokemon/${image}`).then(response => {
  //   if (response.ok) {
  //     return response.json();
  //   }
  
  //   return Promise.reject(new Error(`Нет покемона с именем ${image}`));
  // });
}
  