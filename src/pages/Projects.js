import React from 'react';
import Header from '../components/Header';
import '../style.css';
import Contact from "../components/Contact";

const Projects = () => {
    const projects = [
        {
            title: "Pet Game",
            description: "An engaging virtual pet game combining fun and learning. Features include feeding, exercising, and educational mini-games.",
            image: "/images/PetGame.png",
            githubLink: "https://github.com/jaybava/PetGame",
        },
        {
            title: "Weather App",
            description: "A Java-based desktop application for real-time weather visualization, showing temperature, humidity, and more.",
            image: "/images/WeatherApp.png",
            githubLink: "https://github.com/jaybava/WeatherApp",
        },
        {
            title: "Maze Solver",
            description: "A Java-based console/UI application that takes a map in the form of a text file and coverts it into a real maze. The maze is solved and displayed through a graph algorithm.",
            image: "/images/MazeSolver.png",
            githubLink: "https://github.com/jaybava/MazeSolver",
        },
        {
            title: "Tic Tac Toe",
            description: "A JavaScript-based web application to play tic tac toe. Choose from two options single player and multiplayer.",
            image: "/images/TicTacToe.png",
            githubLink: "https://github.com/jaybava/TicTacToe",
        },
        {
            title: "HashTable C",
            description: "A C-based console application to play implement a hashtable. This taught me how a hashtable works at a low language level.",
            image: "/images/HashTableC.png",
            githubLink: "https://github.com/jaybava/HashTableC",
        },


        // Add more projects as needed
    ];
    return (<div>
        <Header />

        <div
            className={"background-section"}
            style={{
                backgroundImage: "url('/images/Background.png')",
            }}>
            <p className={"projects-title"}>Projects</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        <div key={index} className="project-card">
                            <div className="card-image-wrapper">
                                <img
                                    src="/images/Card Background.png"
                                    alt="Card Background"
                                    className="project-background"
                                />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </a>
                        ))}
                    </div>

                    <Contact/>
                    </div>
                    </div>)
                }

                export default Projects;