import React from 'react';
import MovieService from '../services/MovieService';

class AddMovie extends React.Component {
    constructor(props) {
        super(props)

        // Initialize attributes of a new movie entry
        this.state = {
            title: '',
            genre: '',
            year: ''
        }
    }

    // Text dynamically changes in the input field as the user is typing
    handleChange = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Sends the current state to potentially be added to the database. Then resets state.
    clickHandler = e => {
        e.preventDefault();

        MovieService.addMovie(this.state);

        this.setState({
            title: '',
            genre: '',
            year: ''
        })
    }

    // Displays the form to submit a new movie
    render() {
        return (
            <div className="form">
                <input 
                    type="text"
                    required
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    required
                    placeholder="Genre"
                    name="genre"
                    value={this.state.genre}
                    onChange={this.handleChange}
                />
                <input 
                    type="number"
                    required
                    placeholder="Release Year"
                    name="year"
                    value={this.state.year}
                    onChange={this.handleChange}
                />
                <button className="btn" onClick={this.clickHandler}>Add</button>
            </div>
        )
    }
}

export default AddMovie;