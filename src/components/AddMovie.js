import React from 'react';
import MovieService from '../services/MovieService';

class AddMovie extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            director: '',
            duration: ''
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
            director: '',
            duration: ''
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
                    placeholder="Director"
                    name="director"
                    value={this.state.director}
                    onChange={this.handleChange}
                ></input>
                <input 
                    type="number"
                    required
                    placeholder="Duration"
                    name="duration"
                    value={this.state.duration}
                    onChange={this.handleChange}
                ></input>
                <button onClick={this.clickHandler}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie;