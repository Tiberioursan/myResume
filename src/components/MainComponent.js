import React from 'react';

import Home from './home/HomeComponent';
import ProfilePage from './profile/ProfileComponent';
import ResumePage from './resume/ResumeComponent';
import PortfolioPage from './portfolio//PortfolioComponent';
import ContactPage from './contact/ContactComponent';
import Loader from './LoaderComponent';

export default function Main () {

    return (
        <>

            { /* LOADER */ }    
            <Loader />

            { /* HOMEPAGE */ }
            <Home />

            { /* Close button (X) */ }
            <div className="close-btn"></div>
           
            { /* PROFILE PAGE */ }
            <ProfilePage />

            { /* RESUME PAGE */ }
            <ResumePage />

            { /* PORTFOLIO PAGE */ }
            <PortfolioPage />

            { /* CONTACT PAGE */ }
            <ContactPage />
            
            {/* <Router>
                <Switch>
                    <Route exact path="/" component={homePage}/>
                    <Route path='/profile' component={ProfilePage} />
                    <Route path='/resume' component={ResumePage} />
                    <Route path='/portfolio' component={PortfolioPage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </Router> */}

        </>

    );
}