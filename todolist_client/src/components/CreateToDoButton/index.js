import React, { useState } from "react";
import './index.css'
import { Modal } from "../Modal";

export function CreateToDoButton({handleCreateToDoList}){

    const [modal, setModal] = useState(false)

    return(
        <>
        <div className="crete-button-div">
            <button className="create-to-do-button" onClick={() => setModal(!modal)}>
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
        
        {modal && <Modal modal={modal} setModal={(bool) => setModal(bool)} handleCreateToDoList={handleCreateToDoList}/>}
        </>
    )
}