import React from 'react';

import Menu from './MenuComponent.js';
import IntroductionComponent from './IntroductionComponent';

export default function Home () {
    return (
            <div className="home-page">
            
                { /* INTRODUCTION (left side) */ }        
                <IntroductionComponent />
                
                { /* NAVIGATION MENU (right side) */ }        
                <Menu />

            </div>
    );
}