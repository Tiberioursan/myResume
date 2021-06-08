import React, { useState, useContext } from 'react';
import { SkillsContext } from '../../shared/skillsContext';

export const Skills = () => {

    const [skills, setSkills] = useContext(SkillsContext);

    return (
        <div className="skills clearfix">
            <h2 className="small-heading">SKILLS</h2>
            <div className="clearfix">

                { /* Skill items */}
                {skills.map(skill => (
                    <div className="skill-container col-sm-4" key={skill.id}>
                        <h3>{skill.name}</h3>
                        <div className="skill" data-percent={skill.percentage}>
                            <span>{skill.percentage}%</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}