import React from 'react';
import './ProjectTab.css';
import ProjectCard from './ProjectCard.js';

const ProjectTab = () => {
    const cards = [
        {
            image: 'prepmate-thumbnail.png',
            title: 'Prep Mate',
            desc: 'Prep Mate is a full-stack web application designed to help chess players analyze openings and prepare against specific opponents. One of the key challenges was handling the large sets of game data required for comprehensive analysis. To overcome this obstacle, I utilized Firebase/Firestore for session management and Google Cloud for storing the large datasets. I managed all aspects of the project lifecycle, including planning, development, deployment, and user feedback.',
            skills: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Firebase', 'Google Cloud Platform'],
            buttons: [
                { icon: 'rocket-icon.png', link: 'https://www.prepmatechess.com', label: 'Live Demo' },
                { icon: 'github-logo-white.png', link: 'https://github.com/djm0074/Prep-Mate', label: 'View Source' },
            ],
        },
        {
            image: 'tlo-thumbnail.png',
            title: 'Taylor Law Office Website',
            desc: 'I redesigned and enhanced the Taylor Law Office website, introducing significant improvements across all sections with a primary focus on the "Practice Areas" page. This project marked my first experience with Vue.js, a framework I now thoroughly enjoy using. These changes modernized the website\'s appearance and improved its functionality, better reflecting the firm\'s professionalism and expertise.',
            skills: ['HTML', 'CSS', 'Vue.js'],
            buttons: [
                { icon: 'rocket-icon.png', link: 'https://tlowv.com', label: 'Live Demo' },
                { icon: 'github-logo-white.png', link: 'https://github.com/tlowv/tlowv-site', label: 'View Source' },
            ],
        },
        {
            image: 'portfolio-img.png',
            title: 'My Portfolio (this site!)',
            desc: 'I developed my portfolio website to gain experience with JavaScript and React. I avoided using extra libraries or pre-built components to focus on my own front-end development skills. This approach allowed me to create a custom and optimized user experience from scratch.',
            skills: ['JavaScript', 'React', 'HTML', 'CSS'],
            buttons: [
                { icon: 'rocket-icon.png', link: 'https://djm0074.github.io/portfolio-site/', label: 'Live Demo' },
                { icon: 'github-logo-white.png', link: 'https://github.com/djm0074/portfolio-site', label: 'View Source' },
            ],
        },
        {
            image: 'cssp-thumbnail.png',
            title: 'Cyber Security Simulation Portal (CSSP)',
            desc: 'I contributed to the creation of CSSP, a cloud-based entitlement granting engine built on the Ruby on Rails framework. This project marked my first exposure to MVC architecture, cloud computing with AWS, and containerization with Docker. CSSP was a key milestone in my career, demonstrating my ability to quickly learn new technologies and work effectively within a development team. I also authored a paper on this project, which was published (see link below).',
            skills: ['Ruby on Rails', 'HTML', 'Docker', 'AWS (EC2)'],
            buttons: [
                { icon: 'publication-icon.png', link: 'https://link.springer.com/chapter/10.1007/978-3-030-31239-8_17', label: 'View Publication' },
                { icon: 'poster-icon.png', link: 'cssp-poster.pdf', label: 'View Poster' },
            ],
        }
    ];

    return (
        <div className="project-tab">
            {cards.map((card, index) => (
                <ProjectCard
                    key={index}
                    image={card.image}
                    title={card.title}
                    desc={card.desc}
                    skills={card.skills}
                    buttons={card.buttons}
                />
            ))}
        </div>
    );
};

export default ProjectTab;