import React from 'react';
import Header from '../components/Header';
import '../style.css';
import Contact from "../components/Contact";

const Projects = () => {
    return (<div>
        <Header />

        <div
            className={"background-section"}
            style={{
                backgroundImage: "url('/images/Background.png')",
            }}>
            <p className={"about-me"}>Projects</p>

            <Contact/>
        </div>
    </div>)
}

export default Projects;