import axios from 'axios';
export const axiosPicture = (name)=> {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    console.dir(response);
    return response.data.hits;
  };
    
    
    
    
    // return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   }
  
    //   return Promise.reject(new Error(`Нет покемона с именем ${name}`));
    // });
  