import React from 'react';
import Header from '../components/Header';
import '../style.css';
import Contact from "../components/Contact";

const About = () => {
    return (<div>
        <Header />

        <div
            className={"background-section"}
            style={{
                backgroundImage: "url('/images/Background.png')",
            }}>
            <p className={"about-me"}>About Me</p>


            <div className={"about-content"}>

                <div className="about-text-left">
                    <div className="about-text">
                        <p>
                            My passion for science and technology began in middle school, where I joined the LEGO
                            Robotics
                            Club
                            and discovered the excitement of creating and programming robots. This early experience
                            ignited
                            my
                            interest in STEM,
                            which I continued to pursue in high school by actively participating in both the LEGO
                            Robotics
                            Club and
                            the Computer Science Club.
                        </p>
                        <p>
                            In grades 11 and 12, I deepened my knowledge by enrolling in robotics and computer science
                            courses.
                            During my grade 11 robotics course,
                            I designed and built an automated water-dispensing robot using Arduino, showcasing my
                            ability to
                            solve practical challenges through innovative design.
                        </p>
                        <p>
                            In grade 12, I focused on addressing a real-world issue: assisting elderly patients with
                            dementia. I
                            developed a robotic solution using VEX robotic components,
                            an external battery, and Arduino technology. The device was designed to remind patients to
                            take
                            their medication by emitting a loud buzzer at scheduled intervals,
                            which could only be silenced by pressing a button. This project highlighted my dedication to
                            using
                            technology to improve lives and tackle meaningful problems.
                        </p>
                        <p>
                            These experiences have shaped my enthusiasm for leveraging science and technology to create
                            innovative solutions, and they continue to inspire my journey in the field.
                        </p>
                    </div>
                </div>

                <div className={"image-stack"}>
                    <img src="images/Card%20Background.png" alt="Card Background" className="card-background third"/>
                    <img src="images/PictureJay.jpg" alt="Me" className="jay-picture"/>
                </div>

                <div className="about-text-right">
                    <div className="about-text">
                        <p>
                            My journey through university was one of exploration and self-discovery. I initially
                            enrolled in
                            the Engineering program at Western University, which offered a general first year before
                            assigning
                            students to specific disciplines. While I appreciated the breadth of knowledge, I soon
                            realized that
                            my true passion lay not in engineering but in the art of programming—adding functionality
                            and
                            intelligence to physical systems like robots.
                        </p>
                        <p>
                            Driven by this realization, I transitioned to Computer Science, a decision that has
                            profoundly
                            shaped my academic and professional pursuits. I’ve developed a deep appreciation for
                            understanding
                            how computers work, the intricacies of code design, and the overall process of software
                            development.
                            This field has fueled my creativity and continues to inspire me as I build and refine
                            projects.
                        </p>
                        <p>
                            While pursuing my degree, I’ve applied this passion practically by working to repair and
                            maintain
                            arcade games at The Rec Room. This role has allowed me to stay connected to the world of
                            mechanical
                            systems while honing my problem-solving skills in a real-world context.
                        </p>
                        <p>
                            Switching to Computer Science has been a defining moment in my academic career, and
                            I’m excited to continue exploring the intersection of software and hardware as I progress
                            toward my goals.
                        </p>
                    </div>
                </div>

            </div>

            <div className="about-contact">
                <Contact/>
            </div>
        </div>
    </div>)
}

export default About;