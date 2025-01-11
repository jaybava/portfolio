import React,  { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Contact from "../components/Contact";
import {Link} from "react-router-dom";
import '../style.css'; // Ensure the correct path to your CSS file


const Home = () => {
    const [skillsVisible, setSkillsVisible] = useState(false);
    const [petGameVisible, setPetGameVisible] = useState(false);
    const [weatherAppVisible, setWeatherAppVisible] = useState(false);

    const skillsImageRef = useRef(null);
    const petGameRef = useRef(null);
    const weatherAppRef = useRef(null);

    useEffect(() => {
        const observerCallback = (entries, observer, setState) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setState(true);
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        };

        const skillsObserver = new IntersectionObserver((entries) => {
            observerCallback(entries, skillsObserver, setSkillsVisible);
        }, { threshold: 1.0 });

        const petGameObserver = new IntersectionObserver((entries) => {
            observerCallback(entries, petGameObserver, setPetGameVisible);
        }, { threshold: 0.5 });

        const weatherAppObserver = new IntersectionObserver((entries) => {
            observerCallback(entries, weatherAppObserver, setWeatherAppVisible);
        }, { threshold: 0.5 });

        // Observe each element
        if (skillsImageRef.current) skillsObserver.observe(skillsImageRef.current);
        if (petGameRef.current) petGameObserver.observe(petGameRef.current);
        if (weatherAppRef.current) weatherAppObserver.observe(weatherAppRef.current);

        // Cleanup
        return () => {
            if (skillsImageRef.current) skillsObserver.unobserve(skillsImageRef.current);
            if (petGameRef.current) petGameObserver.unobserve(petGameRef.current);
            if (weatherAppRef.current) weatherAppObserver.unobserve(weatherAppRef.current);
        };
    }, []);


    return (
        <div>
            <Header />

            <div
                className="background-section"
                style={{
                    backgroundImage: "url('/images/Background.png')",
                }}
            >
                <div className={"top-section"}>
                    <div className="image-container">
                        <img src='/images/Gradient.png' alt="Gradient" className="gradient-image"/>
                        <img src='/images/Me.png' alt="Profile" className="profile-image"/>
                    </div>

                    <div className="arrow-text-container">
                        <img src="/images/Arrow.png" alt="Arrow" className="arrow-image"/>
                        <p className="intro-text">Hello! I Am <span className="highlight-text">Jay Bava</span></p>
                    </div>

                    <div className="intro-text-container">
                        <p className="intro-text2">A Computer Scientist who</p>
                        <p className="intro-text3">
                            fixes code<br/>
                            and the&nbsp;
                            <span className="highlight-text-container">
                            <span className="highlight-text2"> coffee</span>
                            <img src="/images/Ellipse5.png" alt="Ellipse" className="ellipse-image"/>
                        </span>
                            <br/>
                            machine
                        </p>
                    </div>

                    <div className={"coffee-machine-container"}>
                        <img src="/images/CoffeeMachine.png" alt="Coffee Machine" className="coffee-image"/>
                    </div>
                </div>

                <p className="mini-paragraph">
                    I'm currently a dedicated student at Western University, located in London,
                    Ontario, pursuing my passion for technology and software development.
                </p>
                <p className="mini-paragraph2">
                    I enjoy developing games in Java and creating interactive websites. I'm passionate about both
                    front-end and back-end development and am eager to build engaging digital experiences that are
                    both functional and fun.
                </p>

                <img
                    src="/images/Skills.png"
                    alt="Skills"
                    className={`skills-image ${skillsVisible ? "visible" : ""}`}
                    ref={skillsImageRef}
                />

                <div className={"featured-project-wrapper"}>
                    <div className={`featured-project-container ${petGameVisible ? "visible" : ""}`}
                         ref={petGameRef}>
                        <p className="featured-project-text">Featured Project</p>
                        <p className="project-name-text">Pet Game</p>
                        <img src="/images/Card%20Background.png" alt="Card Background" className="card-background"/>
                        <Link to="/projects">
                            <img src="/images/PetGame.png" alt="Pet Game" className="pet-game-image"/>
                        </Link>
                        <img src="/images/CardLeft.png" alt="Card" className="card-image"/>
                        <p className="pet-game-text">An engaging virtual pet game for kids that combines <br/>
                            fun and learning. Care for your pet by feeding, grooming, <br/>
                            and exercising them while playing educational <br/>
                            mini-games in Math, Spelling, and Geography. Earn <br/>
                            coins and experience points to unlock new items and <br/>
                            upgrades. Featuring beloved DreamWorks characters, <br/>
                            the game makes learning interactive and rewarding.</p>
                    </div>

                    <div className={`featured-project-container second ${weatherAppVisible ? "visible" : ""}`}
                         ref={weatherAppRef}>
                        <p className="featured-project-text second">Featured Project</p>
                        <p className="project-name-text second">Weather App</p>
                        <img src="/images/Card%20Background.png" alt="Card Background" className="card-background second"/>
                        <Link to="/projects">
                        <img src="/images/WeatherApp.png" alt="Weather App" className="weather-app-image"/>
                        </Link>
                        <img src="/images/CardRight.png" alt="Card" className="card-image second"/>
                        <p className="weather-app-text">A Java-based desktop application for visualizing <br/>
                            real-time weather data. Search by city, state, or <br/>
                            country to view detailed weather conditions, <br/>
                            including temperature, humidity, and forecasts. <br/>
                            The app uses JavaFX for a responsive interface <br/>
                            and integrates geocoding and weather APIs to <br/>
                            fetch accurate location-based data. Get <br/>
                            personalized weather information and enhance <br/>
                            your experience with intuitive navigation and <br/>
                            seamless API interaction.</p>
                    </div>
                </div>

            <Contact/>
            </div>
        </div>
    );
};

export default Home;
