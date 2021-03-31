import React, { useState } from 'react';
import Modal from 'react-modal';
import { putMovie } from '../services/MovieService';

const UpdateMovie = ({ movie }) => {
    const [modal, setModal] = useState({modalIsOpen: false});
    const [movieState, setMovieState] = useState({ id: movie.id, title: movie.title, genre: movie.genre, year: movie.year });

    // Opens the modal 
    const openModal = e => {
        e.preventDefault();

        setModal({ 
            modalIsOpen: true,
        })
    }

    // Sends a movie object to be potentially updated in the database. Then closes the modal.
    const update = e => {
        e.preventDefault();

        let updatedMovie = {
            id: movieState.id,
            title: movieState.title,
            genre: movieState.genre,
            year: movieState.year
        }

        putMovie(updatedMovie)

        setModal({ modalIsOpen: false })
    }

    // Displays the modal
    return(
        <>
            <button className="update-btn" onClick={openModal}>Update</button>
            {/* onRequestClose and shouldCloseonOverlayClick enable the user to close the modal by clicking outside of it */}
            <Modal className="pop-up" isOpen={modal.modalIsOpen} ariaHideApp={false} onRequestClose={() => setModal({ modalIsOpen: false })} shouldCloseOnOverlayClick={true}>
                <div className="form">
                    <input
                        type="text"
                        required
                        name="title"
                        value= {movieState.title}
                        onChange={(e) => setMovieState({ ...movieState, title: e.target.value })}
                    />
                    <input
                        type="text"
                        required
                        name="genre"
                        value= {movieState.genre}
                        onChange={(e) => setMovieState({ ...movieState, genre: e.target.value })}
                    />
                    <input 
                        type="number"
                        required
                        name="year"
                        value={movieState.year}
                        onChange={(e) => setMovieState({ ...movieState, year: e.target.value })}
                    />
                    <button className="update-btn" onClick={update}>Update</button>
                </div>
            </Modal>
        </>
    );
};

export default UpdateMovie;