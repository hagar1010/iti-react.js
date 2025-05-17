import axios from "axios"
import MovieModel from "../Models/movieModel"
class MovieController {
    static async fetchMovies(currentPage) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
                params: {
                    include_adult: false,
                    include_video: false,
                    language: "en-US",
                    page: currentPage,
                    sort_by: "popularity.desc",
                    api_key: "353670bc930828081098aed28dbc529c"
                }
            });
            // console.log(response.data);
            // const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&api_key=353670bc930828081098aed28dbc529c`);
            const movies = response.data.results.map((movie) => {
                return new MovieModel(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.poster_path,
                    movie.release_date,
                    movie.vote_average
                )
            })
            return {
                movies:movies,
                totalPages: response.data.total_pages
            }
        } catch (error) {
            console.log(error);
            throw new Error("Failed to fetch movies.")
        }
    }
}
export default MovieController