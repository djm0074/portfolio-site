import React from 'react';
import './Header.css'; // Import your CSS file
import InfoButton from './InfoButton';

const Header = () => {
    return (
        <div>
            <div className="header-container">
                <div className="name-container">
                    <div className="my-name">Daniel Mancini</div>
                    <div className="subtext">Passionate developer. Eager learner.</div>
                </div>
                <div className="info-container">
                    <div><strong>Email:</strong> dannyjmancini@gmail.com</div>
                    <div><strong>Phone:</strong> (302) 757-4521</div>
                </div>
            </div>
            <div className="button-row">
                <InfoButton className="header-button" icon="resume-logo.png" link="Daniel-Mancini-Resume.pdf" label="Resume" />
                <InfoButton className="header-button" icon="linkedin-logo.png" link="https://www.linkedin.com/in/daniel-mancini-856402169/" label="LinkedIn" />
                <InfoButton className="header-button" icon="github-logo-white.png" link="https://github.com/djm0074" label="GitHub" />
            </div>
        </div>
    )
}

export default Header;
