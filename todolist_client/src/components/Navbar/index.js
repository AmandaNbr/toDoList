import React from "react";
import './index.css'

export function Navbar(){
    return(
        <div>
            <nav className="navbar" id="navbar">
                <img src="assets/images/branch_left.png" className="branch-img-l" alt="branch-img-l"></img>
                <p className="title">To <b className="do-bold">Do</b> List</p>
                <img src="assets/images/branch_right.png" className="branch-img-r" alt="branch-img-r"></img>
            </nav>
        </div>
    )
} 