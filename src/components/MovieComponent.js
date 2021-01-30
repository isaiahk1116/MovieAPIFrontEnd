import React from 'react';
import MovieService from '../services/MovieService';
import UpdateMovie from './UpdateMovie';
import AddMovie from './AddMovie';

class MovieComponent extends React.Component {
    constructor(props) {
        super(props)

        // Initializes movie array as empty
        this.state = {
            movies:[],
        }
    }

    // Makes sure the app retrieves all of the data before doing anything else 
    componentDidMount() {
        MovieService.getMovies().then((response) => {
            this.setState({ movies: response.data })
        });  
    }

    // When this component update, retrieve all of the data once more (keeps everything up to date with database)
    componentDidUpdate() {
        MovieService.getMovies().then((response) => {
            this.setState({ movies: response.data })
        }); 
    }

    // Sends movie to be potentially deleted from database
    clickHandler = movie => e => {
        e.preventDefault();
        
        MovieService.deleteMovie(movie);
    }

    // Displays the list of movies 
    render() {
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
                            this.state.movies.map(
                                movie =>
                                <tr key = {movie.id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.year}</td>
                                    <td><UpdateMovie movie={movie} /></td>
                                    <td><button className="delete-btn" onClick={this.clickHandler(movie)}>x</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <AddMovie />
            </div>
        )
    }
}

export default MovieComponent;