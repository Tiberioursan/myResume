import React, { useState, useContext } from 'react';

import { ProjectsContext } from '../../shared/projectsContext';

export const Project = () => {

    const [projects, setProjects] = useContext(ProjectsContext);

    return (

        <div className="portfolio">
            <h2 className="small-heading">PORTFOLIO</h2>
            <div className="project-container">

                { /* Projects filter */}
                {/* <div className="project-controls">
                    <button className="filter" data-filter="all">All</button>
                    <button className="filter" data-filter="1">Wordpress</button>
                    <button className="filter" data-filter="2">React</button>
                </div>

                <div className="projet-items clearfix" id="projects"> */}

                    { /* Projects items */}
                    {/* {projects.map(project => (
                        <> */}
                            { /* Portfolio image */}
                            {/* <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 filtr-item" data-category={project.category} key={project.id}>
                                <div className="project">
                                    <img src={project.thumbimage} alt="" />
                                    <div className="ovrly">
                                    </div>
                                    <div className="buttons">
                                        <a href={project.link} className="fa fa-link"></a>
                                        <a href={project.tagname} className="fa fa-search show-popup"></a>
                                    </div>
                                </div>
                            </div> */}

                            { /* Popup content */}
                            {/* <div className="pop-up-box" id={project.name}>
                                <img alt="" src={project.popupimage} className=" hidden-xs" />
                                <div className="popup-content">
                                    <h3>{project.name}</h3>
                                    <p>
                                        {project.description}
                                    </p>
                                    <a href={project.link}>PREVIEW</a>
                                </div>
                            </div>
                        </>
                    ))}

                </div> */}
            </div>
        </div>
    );
}