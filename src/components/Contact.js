import React, { useEffect, useState, useRef } from 'react';
import '../style.css';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Make contact section visible
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div  className={`contact-section ${isVisible ? 'visible' : ''}`}
              ref={contactRef}>
            <p className="contact">Contact</p>
            <p className="contact-text">
                I'm currently looking to join a creative team that values building innovative software and immersive gaming experiences. <br/>
                If you have a project in mind or need a passionate developer for game development or interactive applications, let's connect!
            </p>

            {/* Contact Images */}
            <div className="contact-links">
                <a href="https://www.instagram.com/_.jay_.21" target="_blank" rel="noopener noreferrer">
                    <img src="images/Instagram.png" alt="Instagram" className="instagram-image" />
                </a>
                <a href="https://www.linkedin.com/in/jay-bava" target="_blank" rel="noopener noreferrer">
                    <img src="images/Linkdin.png" alt="LinkedIn" className="linkedin-image" />
                </a>
                <a href="https://github.com/jaybava" target="_blank" rel="noopener noreferrer">
                    <img src="images/Github.png" alt="GitHub" className="github-image" />
                </a>
            </div>
        </div>
    );
};

export default Contact;
