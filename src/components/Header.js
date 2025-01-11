import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../style.css'; // Ensure the correct path to your CSS file
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            style={{
                backgroundImage: `url(portfolio/images/Header.png)`,
                padding: "20px",
                display: "flex",
        }}
        >
            <div className="header-title">
                <h1 className="plus-jakarta-sans-bold">JB</h1>
                <img src="portfolio/images/HeaderUnderline.png" alt="Header Underline" className="header-underline" />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <img src="portfolio/images/menuIcon.png" alt="Menu" />
            </div>
            <nav className={`plus-jakarta-sans-bold ${isOpen ? 'nav-open' : ''}`}>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About</Link></li>
                    <li><Link to="/projects" className="nav-item">Projects</Link></li>
                    <li><Link to="/work" className="nav-item">Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
