import React from "react";
import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";

export default function Home(){
    return(
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}