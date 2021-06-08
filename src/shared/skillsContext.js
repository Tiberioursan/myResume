import React, { useState, createContext } from 'react';

export const SkillsContext = createContext();

export const SkillsProvider = props => {

    const [skills, setSkills] = useState([
        {
            id: 0,
            name: 'HTML',
            percentage: 85
        },
        {
            id: 1,
            name: 'CSS',
            percentage: 85
        },
        {
            id: 2,
            name: 'JavaScript',
            percentage: 60
        },
        {
            id: 3,
            name: 'ReactJS',
            percentage: 55
        },
        {
            id: 4,
            name: 'NodeJS',
            percentage: 40
        },
        {
            id: 5,
            name: 'Adobe Package',
            percentage: 80
        },
    ]);

    return (
        <SkillsContext.Provider value = {[skills, setSkills]}>
            {props.children}
        </SkillsContext.Provider>
    );
}