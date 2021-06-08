import React, { useState, createContext } from 'react';

export const PresentationContext = createContext();

export const PresentationProvider = props => {

    const [presentation, setPresentation] = useState([
        {
            title: 'PRESENTATION',
            subtitle: 'An Awesome Web delevoper on planet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat enim arcu, eget tempor nibh congue a. Maecenas faucibus sagittis nibh, in bibendum ex. Donec eu ornare augue, nec cursus arcu. Vivamus accumsan mauris nec nulla bibendum, et eleifend nisl tristique. Pellentesque fringilla lorem id nibh auctor sagittis. Suspendisse non nisl at velit malesuada bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat enim arcu, eget tempor nibh congue a. Maecenas faucibus sagittis nibh, in bibendum ex. Donec eu ornare augue, nec cursus arcu. Vivamus accumsan mauris nec nulla bibendum, et eleifend nisl tristique. Pellentesque fringilla lorem id nibh auctor sagittis. Suspendisse non nisl at velit malesuada bibendum.',
            image: '../../public/assets/images/dp.jpg'
        }
    ]);

    return (
        <PresentationContext.Provider value = {[presentation, setPresentation]}>
            {props.children}
        </PresentationContext.Provider>        
    );
};