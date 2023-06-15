import React, { useState } from "react";
import './index.css'
import { Modal } from "../Modal";

export function CreateToDoButton(){

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <>
        <div className="crete-button-div">
            <button className="create-to-do-button" onClick={toggleModal}>
                <div className="create-to-do-div">
                    <span className="create-to-do-image">
                        <img src="assets/images/plus.png" alt="plus"></img>
                    </span>
                    <span className="create-to-do-text">
                        Create To <b>Do</b> List
                    </span>
                </div>
            </button>
        </div>
        
        {modal && <Modal modal={modal} setModal={(bool) => setModal(bool)} />}
        
        </>
    )
}