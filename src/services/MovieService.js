import axios from 'axios';

const MOVIES_REST_API_URL = "http://localhost:8080/movie-api/";

export const getMovies = () => {
        return axios.get(MOVIES_REST_API_URL);
    }

export const getMovie = (title) => {   
        console.log(title);
    }

export const addMovie = (movie) => {
        axios.post(MOVIES_REST_API_URL, {
            'title': movie.title,
            'genre': movie.genre,
            'year': movie.year
        }).then(function (response) {
            console.log(response);
        })
    }

export const putMovie = (movie) => {
        axios.put(MOVIES_REST_API_URL + movie.id, {
            'id': movie.id,
            'title': movie.title,
            'genre': movie.genre,
            'year': movie.year
        }).then(function (response) {
            console.log(response);
        })
    }

export const deleteMovie = (movie) => {
        axios.delete(MOVIES_REST_API_URL + movie.id, { 
            movie
        }).then(function (response) {
            console.log(response);
        })
    }
