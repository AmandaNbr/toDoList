import React from "react";
import './index.css'
import { CreateToDoButton } from "../CreateToDoButton";
import { WelcomeText } from "../WelcomeText";

export function Content(){
    return(
        <div className="content">
            <CreateToDoButton />
            {/* if listas criadas == 0*/}
            <WelcomeText />
            {/* if listas criadas > 0*/}
        </div>
    )
}