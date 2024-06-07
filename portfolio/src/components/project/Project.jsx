import React from 'react'
import { useState } from 'react';
import "./project.scss"
const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
        {
            id: 1,
            title: 'Style Stage',
            img: "/project1.jpg",
            description: 'Design webpage using pure modern CSS solutions.',
            demo: "https://github.com/Jayneyou/CSS-Project1"
        },

        {
            id: 2,
            title: 'Link Checker',
            img: "/project2.jpg",
            description: 'Python program designed for Georgian College OER team to automate URL checking within digital textbooks.',
            demo: "https://github.com/Jayneyou/LinkChecker"
        },
        {
            id: 3,
            title: 'Color Eliminating',
            img: "/project3.jpg",
            description: 'Tinkercad Arduino Game. C++',
            demo: "https://www.tinkercad.com/things/essOriVkbTS-final-project"
        },
        {
            id: 4,
            title: 'Product Website',
            img: "/project4.jpg",
            description: 'SEM1 HTML final project. Created using HTML, CSS, JavaScript',
            demo: "https://github.com/Jayneyou/productwebsite"
        },
    ];
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 >= projects.length ? prevIndex : prevIndex + 1));
    };
    return (
        <div className='project'>
            <div className="text">
                <h3>My Projects</h3>
            </div>
            <div className="gallery">
                <button onClick={handlePrevClick} className="arrow left-arrow">&lt;</button>
                <div className="project-container">
                    {projects.slice(currentIndex, currentIndex + 2).map((project) => (
                        <div
                            className='project-item'
                            key={project.id}
                        >
                            <h4>{project.title}</h4>
                            <img src={project.img} alt="" />
                            <p>{project.description}</p>
                            <button><a href={project.demo}>Demo</a></button>
                        </div>
                    ))}
                </div>
                <button onClick={handleNextClick} className="arrow right-arrow">&gt;</button>
            </div>
        </div>

    )
}

export default Project