import React from 'react';

import { ProjectsProvider } from '../../shared/projectsContext';
import { TestimonialsProvider } from '../../shared/testimonialsContext';
import { Footer } from '../FooterComponent';
import { Project } from './ProjectsComponent';
import { Testimonials } from './TestimonialsComponent';

export default function PortfolioPage() {
    return (
        <div className="portfolio-page">

            { /* Portfolio page fixed image (left side) */}
            <div className="image-container col-md-5 col-sm-12">
                <div className="mask">
                </div>
                <div className="main-heading">
                    <h1>POR<span>T</span>FOLIO</h1>
                </div>
            </div>

            { /* Portfolio page content (right side) */}
            <div className="content-container col-md-7 col-sm-12">

                { /* Portfolio */}
                <ProjectsProvider>
                    <Project />
                </ProjectsProvider>

                <img alt="" src="assets/images/coming_soon.jpg" style={{height:'auto',width:'100%'}} />

                { /* Testimonials */}
                {/* <TestimonialsProvider>
                    <Testimonials />
                </TestimonialsProvider> */}

                { /* Facts */}
                {/* <div className="facts clearfix">
                    <div className="col-xs-4">
                        <h3>PROJECTS DONE</h3>
                        <h1>300+</h1>
                    </div>
                    <div className="col-xs-4">
                        <h3>HAPPY CLIENTS</h3>
                        <h1>100+</h1>
                    </div>
                    <div className="col-xs-4">
                        <h3>COFFEE CUPS</h3>
                        <h1>250+</h1>
                    </div>
                </div> */}

                { /* Footer */}
                <Footer />
            </div>
        </div>
    );
}