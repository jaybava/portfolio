import React from 'react';
import Header from '../components/Header';
import '../style.css';
import Contact from "../components/Contact";

const WorkExperience = () => {
    return (<div>
        <Header />

        <div
            className={"background-section"}
            style={{
                backgroundImage: "url('/images/Background.png')",
            }}>
            <p className={"about-me"}>Work Experience</p>

            <Contact/>
        </div>
    </div>)
}

export default WorkExperience;