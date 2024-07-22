import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './InfoButton.css';

const InfoButton = ({ icon, link, label, className, imgClass }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`custom-button ${className}`}>
            <img src={icon} alt={`${label} icon`} className={`button-img ${imgClass}`} />
            {label}
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </a>
    );
};

export default InfoButton;
