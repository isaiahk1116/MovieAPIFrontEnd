import React from 'react';
import Modal from 'react-modal';
import MovieService from '../services/MovieService';

class UpdateMovie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false,
            id: this.props.movie.id,
            title: this.props.movie.title,
            genre: this.props.movie.genre,
            year: this.props.movie.year
        }
    }

    openModal = e => {
        this.setState({ 
            modalIsOpen: true,
            id: this.props.movie.id,
            title: this.props.movie.title,
            genre: this.props.movie.genre,
            year: this.props.movie.year 
        })
    }

    handleChange = e => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

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

    render() {
        return(
            <>
            <button className="update-btn" onClick={this.openModal}>Update</button>
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