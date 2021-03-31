import React, { useState } from 'react';
import { addMovie } from '../services/MovieService';

const AddMovie = () => {
    const [movie, setMovie] = useState({ title: '', genre: '', year: '' });

    // Sends the current state to potentially be added to the database. Then resets state.
    const clickHandler = e => {
        e.preventDefault();

        addMovie(movie);

        setMovie({
            title: '',
            genre: '',
            year: ''
        })
    }

    // Displays the form to submit a new movie
    return (
        <div className="form">
            <input 
                type="text"
                required
                placeholder="Title"
                name="title"
                value={movie.title}
                onChange={(e) => setMovie({ ...movie, title: e.target.value})}
            />
            <input 
                type="text"
                required
                placeholder="Genre"
                name="genre"
                value={movie.genre}
                onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
            />
            <input 
                type="number"
                required
                placeholder="Release Year"
                name="year"
                value={movie.year}
                onChange={(e) => setMovie({ ...movie, year: e.target.value })}
            />
            <button className="btn" onClick={clickHandler}>Add</button>
        </div>
    );
};

export default AddMovie;