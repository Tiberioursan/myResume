import React, { useState, createContext } from 'react';

export const EducationContext = createContext();

export const EducationProvider = props => {

    const [education, setEducation] = useState([
        {
            id: 0,
            school: 'University of Graphics',
            date: 'October 2013 - March 2015',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et pulvinar ligula. Praesent maximus ornare quam, id consectetur dui eleifend nec. Nam consectetur orci id nulla varius, quis facilisis dui vulputate. Sed ultrices eu erat non mollis. Phasellus ut libero.'
        },
        {
            id: 1,
            school: 'University of Graphics',
            date: 'October 2011 - March 2013',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et pulvinar ligula. Praesent maximus ornare quam, id consectetur dui eleifend nec. Nam consectetur orci id nulla varius, quis facilisis dui vulputate. Sed ultrices eu erat non mollis. Phasellus ut libero.'
        },
        {
            id: 2,
            school: 'University of Graphics',
            date: 'October 2009 - March 2011',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et pulvinar ligula. Praesent maximus ornare quam, id consectetur dui eleifend nec. Nam consectetur orci id nulla varius, quis facilisis dui vulputate. Sed ultrices eu erat non mollis. Phasellus ut libero.'
        }
    ]);

    return (
        <EducationContext.Provider value = {[education, setEducation]}>
            {props.children}
        </EducationContext.Provider>        
    );
};