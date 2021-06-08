import React from 'react';
import { EducationProvider } from '../../shared/educationContext';
import { ExperienceProvider } from '../../shared/experienceContext';
import { SkillsProvider } from '../../shared/skillsContext';

import { Education } from './EducationComponent';
import { Experience } from './ExperienceComponent';
import { Footer } from '../FooterComponent';
import { Skills } from './SkillsComponent';

export default function ResumePage () {
    return (
        <div className="resume-page">
            
            { /* Resume page fixed image (left side) */ }        
            <div className="image-container col-md-5 col-sm-12">
                <div className="mask">
                </div>
                <div className="main-heading">
                    <h1>RE<span>S</span>UME</h1>
                </div>
            </div>
            
            { /* Resume page content (right side) */ }
            <div className="content-container col-md-7 col-sm-12">
                
                { /* Education */ }
                <EducationProvider>
                    <Education />
                </EducationProvider>
                
                { /* Experience */ }
                <ExperienceProvider>
                    <Experience />
                </ExperienceProvider>
                        
                { /* Skills */ }
                <SkillsProvider>
                    <Skills />
                </SkillsProvider>
                    
                { /* Footer */ }
                <Footer />
            </div>
        </div>
    );
}