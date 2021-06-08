import React, { useContext } from 'react';

import { ExperienceContext } from '../../shared/experienceContext';

export const Experience = () => {

    const [experience, setExperience] = useContext(ExperienceContext);

    return (
        <div className="experience clearfix">
            <h2 className="small-heading">EXPERIENCE</h2>
            <div className="experience-container col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1">

                { /* Experience items */}
                {experience.map(exp => (
                    <div className="item" key={exp.id}>
                        <div className="bullet hidden-xs">
                        </div>
                        <div className="experience-content">
                            <h3>{exp.role}<span> / {exp.date}<br />
                                {exp.company}</span></h3>
                            <p>
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}