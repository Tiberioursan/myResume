import React, { useState, useContext } from 'react';

import { CapabilitiesProvider } from '../../shared/capabilitiesContext';
import { Footer } from '../FooterComponent';
import { ProfilePresentation } from './PresentationComponent';
import { ProfileCapabilities } from './CapabilitiesComponent';


const ProfilePage = () => {

    return (
        <div className="profile-page">

            { /* Profile page fixed image (left side) */}
            <div className="image-container col-md-5 col-sm-12">
                <div className="mask">
                </div>
                <div className="main-heading">
                    <h1>PR<span>O</span>FILE</h1>
                </div>
            </div>

            { /* Profile page content (right side) */}
            <div className="content-container col-md-7 col-sm-12">

                { /* PRESENTATION */}
                <ProfilePresentation />

                { /* SKILLS */}
                <CapabilitiesProvider>
                    <ProfileCapabilities />
                </CapabilitiesProvider>

                { /* Facts */}
                {/* <div className="facts clearfix">
                    <div className="col-xs-4">
                        <h3>Views</h3>
                        <h1>300+</h1>
                    </div>
                    <div className="col-xs-4">
                        <h3>CV downloaded</h3>
                        <h1>100+</h1>
                    </div>
                    <div className="col-xs-4">
                        <h3>Contacted</h3>
                        <h1>250+</h1>
                    </div>
                </div> */}

                { /* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default ProfilePage;