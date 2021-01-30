import React from 'react';
import Modal from 'react-modal';
import MovieService from '../services/MovieService';

class UpdateMovie extends React.Component {
    constructor(props) {
        super(props)

        // Initaliizes state with props values
        this.state = {
            modalIsOpen: false,
            id: this.props.movie.id,
            title: this.props.movie.title,
            genre: this.props.movie.genre,
            year: this.props.movie.year
        }
    }

    // Opens the modal 
    openModal = e => {
        e.preventDefault();

        this.setState({ 
            modalIsOpen: true,
        })
    }

    // Text dynamically changes in the input field as the user is typing
    handleChange = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Sends a movie object to be potentially updated in the database. Then closes the modal.
    update = e => {
        e.preventDefault();

        let movie = {
            id: this.state.id,
            title: this.state.title,
            genre: this.state.genre,
            year: this.state.year
        }

        MovieService.putMovie(movie)

        this.setState({ modalIsOpen: false })
    }

    // Displays the modal
    render() {
        return(
            <>
            <button className="update-btn" onClick={this.openModal}>Update</button>
            {/* onReuqestClose and shouldCloseonOverlayClick enable the user to close the modal by clicking outside of it */}
            <Modal className="pop-up" isOpen={this.state.modalIsOpen} ariaHideApp={false} onRequestClose={() => this.setState({ modalIsOpen: false })} shouldCloseOnOverlayClick={true}>
                <div className="form">
                    <input
                        type="text"
                        required
                        name="title"
                        value= {this.state.title}
                        onChange={ this.handleChange }
                    />
                    <input
                        type="text"
                        required
                        name="genre"
                        value= {this.state.genre}
                        onChange={ this.handleChange }
                    />
                    <input 
                        type="number"
                        required
                        name="year"
                        value={this.state.year}
                        onChange={this.handleChange}
                    />
                    <button className="update-btn" onClick={this.update}>Update</button>
                </div>
            </Modal>
            </>
        )
    }
}

export default UpdateMovie;