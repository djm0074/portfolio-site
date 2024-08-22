import React from 'react';
import './AboutTab.css';

const AboutTab = () => {

    return (
        <div className="about-container">
            <div className="about-img-container">
                <img src='grand-canyon.png' alt='beach photo' className="about-img"/>
                As a recent Computer Science graduate from West Virginia University, I bring a fresh and enthusiastic perspective to the tech world. I'm very passionate about technology and always eager to learn new things. Currently, I’m a Sales Enablement Engineer at Wander, where I focus on optimizing systems, integrating innovative tools, and supporting our team’s success in a dynamic environment.
                <br /><br />
                Outside of my professional life, I have a deep passion for chess and I'm an avid sports enthusiast who enjoys exercising regularly. I have an amazing girlfriend named Laria and we share our home with the cutest dog in the world, Harper.
            </div>
            <div className="about-sidebar">
                <div className="sidebar-text">
                    <div className="sidebar-title">Education</div>
                    <ul>
                        <li>West Virginia University</li>
                        <li>B.S. in Computer Science</li>
                    </ul>
                </div>
                <div className="sidebar-text">
                    <div className="sidebar-title">Computer Skills</div>
                    <ul>
                        <li><strong>Programming Languages: </strong><br />Java, Python, C/C++, Ruby</li>
                        <li><strong>Web Development: </strong><br />HTML, CSS, JavaScript, React, Flask, Ruby on Rails, Bootstrap, Vue.js</li>
                        <li><strong>DevOps & Cloud: </strong><br />Docker, AWS (EC2), Firebase (Firestore), Google Cloud Platform, Heroku</li>
                        <li><strong>Dev Tools & Operating Systems: </strong><br />Git/Github, Linux, Windows</li>
                    </ul>
                </div>
                <div className="sidebar-text">
                    <div className="sidebar-title">Fun Facts</div>
                    <ul>
                        <li>Published author of a conference paper on CSSP</li>
                        <li>Vice President of the WVU Chess Club</li>
                        <li>Rated over 1800 ELO on chess.com</li>
                        <li>Played football & tennis in highschool</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutTab;