import React, { useState, createContext } from 'react';

export const TestimonialsContext = createContext();

export const TestimonialsProvider = props => {

    const [testimonials, setTestimonials] = useState([
        {
            id: 0,
            name: 'Justin Peterson',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper aliquet nulla, eget feugiat mi pellentesque sed. In neque erat, vulputate eu justo et, posuere scelerisque nulla.'
        },
        {
            id: 1,
            name: 'Cristina Devis',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper aliquet nulla, eget feugiat mi pellentesque sed. In neque erat, vulputate eu justo et, posuere scelerisque nulla.'
        },
        {
            id: 2,
            name: 'Jonny Watts',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper aliquet nulla, eget feugiat mi pellentesque sed. In neque erat, vulputate eu justo et, posuere scelerisque nulla.'
        },
        {
            id: 3,
            name: 'John Doe',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper aliquet nulla, eget feugiat mi pellentesque sed. In neque erat, vulputate eu justo et, posuere scelerisque nulla.'
        }
    ])

    return (
        <TestimonialsContext.Provider value={[testimonials, setTestimonials]}>
            {props.children}
        </TestimonialsContext.Provider>
    )
}