import React from 'react';
import MovieService from '../services/MovieService';

class AddMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            genre: '',
            year: ''
        }
    }

    handleChange = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickHandler = e => {
        e.preventDefault();

        MovieService.addMovie(this.state);

        this.setState({
            title: '',
            genre: '',
            year: ''
        })
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    required
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="text"
                    required
                    placeholder="Genre"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="number"
                    required
                    placeholder="Release Year"
                    name="year"
                    value={this.state.year}
                    onChange={this.handleChange}
                ></input>
                <button onClick={this.clickHandler}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie;