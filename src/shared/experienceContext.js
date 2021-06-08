import React, { useState, createContext } from 'react';

export const ExperienceContext = createContext();

export const ExperienceProvider = props => {

    const [experience, setExperience] = useState([
        {
            id: 0,
            role: 'Assisterende Butikksjef',
            date: 'Juli 2012 - Februar 2013',
            company: 'Motosconto SRL',
            description: 'Salg og kundestyring, Oppsett av butikken, Lagerstyring.'
        },
        {
            id: 1,
            role: 'Lagersjef',
            date: 'Februar 2013 - Desember 2015',
            company: 'Motosconto SRL',
            description: 'Akjeledelse og lagerstyring, Logistiske forhold, Arbeidskoordinering.'
        },
        {
            id: 2,
            role: 'Web-utvikler',
            date: 'Januar 2016 - Oktober 2016',
            company: 'Gruppo Insieme SRL',
            description: 'Oppdatering og redigering av nettsider, Lage nye nettsider layout og grensesnitt, Hold meg oppdatert på bransjens nyheter'
        },
        {
            id: 3,
            role: 'Lagersjef',
            date: 'November 2016 - Februar 2018',
            company: 'Brørboksen TWD A/S',
            description: 'Arbeidsplanlegger, Ansvar på utstyr, lager og varer, Prosess forbedring og raportering.'
        },
        {
            id: 4,
            role: 'Lastebil sjåfør',
            date: 'August 2018 - Februar 2020',
            company: 'OP Transport A/S',
            description: 'Kundebehandling, Kjøring av mange forskjellige tunge biler, henting og levering av varer'
        },
        {
            id: 5,
            role: 'Lastebil sjåfør',
            date: 'Mars 2020 - Juli 2020',
            company: 'A. Furulund Entreprenør',
            description: 'Kundebehandling, Kjøring forskjellige typer av tunge biler, henting og levering av geologiske ressurser'
        }
    ]);

    return (
        <ExperienceContext.Provider value={[experience, setExperience]}>
            {props.children}
        </ExperienceContext.Provider>
    );
}
