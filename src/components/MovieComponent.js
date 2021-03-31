import React, { useEffect, useState } from 'react';
import { getMovies, deleteMovie } from '../services/MovieService';
import UpdateMovie from './UpdateMovie';
import AddMovie from './AddMovie';

const MovieComponent = () => {
    // Initializes movie array as empty
    const [movies, setMovies] = useState([]);

    // Makes sure the app retrieves all of the data before doing anything else 
    useEffect(() => {
        getMovies().then((response) => {
            setMovies(response.data)
        }); 
    });

    // Sends movie to be potentially deleted from database
    const clickHandler = movie => e => {
        e.preventDefault();
        
        deleteMovie(movie);
    }

    // Displays the list of movies 
    return (
        <div className="container">
            <h1>Movies to Watch Later</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Release Year</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map(
                            movie =>
                                <tr key = {movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.year}</td>
                                    <td><UpdateMovie movie={movie} /></td>
                                    <td><button className="delete-btn" onClick={clickHandler(movie)}>x</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <AddMovie />
        </div>
    );
};

export default MovieComponent;