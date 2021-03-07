const API_KEY = process.env.REACT_APP_API_KEY

const BASE_URL = "https://api.themoviedb.org/3";

export const requests ={
    fetchTrending:`${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`${BASE_URL}/discover/tv?api_key=${API_KEY}&languager=en-us`,
    fetchActionMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99`,
}