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

    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleDirectorChange = event => {
        this.setState({
            director: event.target.value
        })
    }

    handleDurationChange = event => {
        this.setState({
            duration: event.target.value
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
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                ></input>
                <input 
                    type="text"
                    required
                    placeholder="Director"
                    value={this.state.director}
                    onChange={this.handleDirectorChange}
                ></input>
                <input 
                    type="number"
                    required
                    placeholder="Duration"
                    value={this.state.duration}
                    onChange={this.handleDurationChange}
                ></input>
                <button onClick={this.clickHandler}>Add Movie</button>
            </div>
        )
    }
}

export default AddMovie;