import React, { useState, createContext } from 'react';

export const CapabilitiesContext = createContext();

export const CapabilitiesProvider = props => {

    const [capabilities, setCapabilities] = useState([
        {
            id: 0,
            title: 'GRAPHIC DESIGN',
            description: 'Takket til SAW-kurset tilegnet jeg meg grafiske ferdigheter gjennom Adobe-programvare som Photoshop, Illustrator og Indesign',
            icon: 'fa fa-eyedropper'
        },
        {
            id: 1,
            title: 'WEB DESIGN',
            description: 'I tillegg til å ha tilegnet meg gode ferdigheter med språk som HTML, CSS og JS, hadde jeg også muligheten til å bruke CMS og gi stor pris på design.',
            icon: 'fa fa-eye'
        },
        {
            id: 2,
            title: 'WEB DEVELOPMENT',
            description: 'Jeg har nylig gått på et kurs for å lære å bruke ReactJS og dermed forbedre min webutviklingsevne',
            icon: 'fa fa-code'
        },
        {
            id: 3,
            title: 'BRIGHT IDEAS',
            description: 'Når får jeg rom og handlefrihet liker jeg å skape, oppfinne og tenke på hvordan jeg kan forbedre prosjektene jeg jobber med.',
            icon: 'fa fa-lightbulb-o'
        },
        {
            id: 4,
            title: 'RESPONSIVE DESIGN',
            description: 'Jeg har lært å vurdere viktigheten av en flytende og dynamisk app. Jeg gir oppmerksomhet og fokus i å implementere en app som er kompatibel med alle enheter.',
            icon: 'fa fa-rocket'
        },
        {
            id: 5,
            title: 'PROBLEM SOLVING',
            description: 'Jeg støter ofte på problemer som bremser apputviklingen min på grunn av mangel på bransjeerfaring. Jeg lærte å bruke verktøyene og teknikkene som trengs for å løse dem.',
            icon: 'fa fa-wrench'
        },
    ]);

    return (
        <CapabilitiesContext.Provider value = {[capabilities, setCapabilities]}>
            {props.children}
        </CapabilitiesContext.Provider>        
    );
};