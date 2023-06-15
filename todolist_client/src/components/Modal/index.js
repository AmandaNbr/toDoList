import React from "react";
import './index.css'

export function Modal({modal, setModal}){

    const toggleModal = () => {
        setModal(!modal)
    }

    return(  
    <div className="modal">
        <div className="overlay" onClick={toggleModal} ></div>
        <div className="modal-content">
            <div className="modal-header">
                <span className="modal-title">
                    What's the title of your <br/> 
                    To Do List?
                </span>
                <button className="close-button" onClick={toggleModal}>
                    <span>
                        <img src="assets/images/close.png" alt="close"/>
                    </span>
                </button>
            </div>
            <div className="modal-input">
                <input className="to-do-list-title-input" type="text" id="to-do-list-title" name="to-do-list-title"  placeholder="To Do List Title" /><br></br>
            </div>
            <div className="modal-buttons">
                <button className="cancel-button" onClick={toggleModal}>
                    <div className="cancel-button-div">
                        <span className="cancel-to-do-modal-span-image">
                            <img className="cancel-to-do-modal-image" src="assets/images/small-close.png" alt="close"></img>
                        </span>
                        <span className="cancel-to-do-modal-text">
                            Cancel
                        </span>
                    </div>
                </button>
                <button className="create-button">
                    <div className="cancel-button-div">
                        <span className="create-to-do-modal-span-image">
                            <img className="create-to-do-modal-image" src="assets/images/small-plus.png" alt="plus"></img>
                        </span>
                        <span className="create-to-do-modal-text">
                            Create
                        </span>
                    </div>
                </button>
            </div>
        </div>
    </div> 
    )
}