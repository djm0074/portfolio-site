import React from 'react';
import './ProjectCard.css';
import InfoButton from './InfoButton';

const ProjectCard = ({ image, title, desc, skills, buttons }) => {
    return (
        <div className="project-card">
            <div className="img-container">
                <img src={image} alt={`${title} image`} className="card-img" />
            </div>
            <div className="card-details">
                <div className="card-title">{title}</div>
                <div className="card-desc">{desc}</div>
                <div className="card-skills">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">{skill}</div>
                    ))}
                </div>
                <div className="card-buttons">
                    {buttons.map((button, index) => (
                        <InfoButton className="card-button" imgClass="card-btn-img" key={index} {...button} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
