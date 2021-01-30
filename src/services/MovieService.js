import axios from 'axios';

const MOVIES_REST_API_URL = "http://localhost:8080/movie-api/";

class MovieService {
    getMovies() {
        return axios.get(MOVIES_REST_API_URL);
    }

    getMovie(title) {   
        console.log(title);
    }

    addMovie(movie) {
        axios.post(MOVIES_REST_API_URL, {
            'title': movie.title,
            'genre': movie.genre,
            'year': movie.year
        }).then(function (response) {
            console.log(response);
        })
    }

    putMovie(movie) {
        axios.put(MOVIES_REST_API_URL + movie.id, {
            'id': movie.id,
            'title': movie.title,
            'genre': movie.genre,
            'year': movie.year
        }).then(function (response) {
            console.log(response);
        })
    }

    deleteMovie(movie) {
        axios.delete(MOVIES_REST_API_URL + movie.id, { 
            movie
        }).then(function (response) {
            console.log(response);
        })
    }
}

export default new MovieService();