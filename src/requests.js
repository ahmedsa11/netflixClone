export const Api_Key = "be6f049599290ba2f40c031ca94edc56";
const requests = {
    fetchTrending: `/trending/all/week?api_key=${Api_Key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${Api_Key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_Key}&language=en-US` ,
    fetchActionMovies: `/discover/movie?api_key=${Api_Key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_Key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_Key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_Key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_Key}&with_genres=99`,
}
export default requests;