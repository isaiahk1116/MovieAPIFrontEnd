import React from 'react';
import MovieService from '../services/MovieService';

class MovieComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies:[]
        }
    }

    componentDidMount() {
        MovieService.getMovies().then((response) => {
            this.setState({ movies: response.data })
        });  
    }

    componentDidUpdate() {
        MovieService.getMovies().then((response) => {
            this.setState({ movies: response.data })
        }); 
    }

    render() {
        return (
            <div>
                <h1>List of Movies</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Director</td>
                            <td>Duration</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.movies.map(
                                movie =>
                                <tr key = {movie.id}>
                                    <td>{movie.id}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.duration}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default MovieComponent;