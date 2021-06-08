import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContactPage from '../contact/ContactComponent';
import PortfolioPage from '../portfolio/PortfolioComponent';
import ProfilePage from '../profile/ProfileComponent';
import ResumePage from '../resume/ResumeComponent';
import Home from './HomeComponent';

export default function Menu() {
    return (
        <div className="menu">

            { /* Profile button */}
            <div className="profile-btn">
                <img alt="" src="assets/images/menu/profile_btn.jpg" />
                <div className="mask">
                </div>
                <div className="heading col-xs-11 col-xs-offset-1">
                    <div className="col-xs-2 hidden-xs">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="col-sm-10">
                        <h2>PR<span>O</span>FILE</h2>
                        <h3>Litt om meg.</h3>
                    </div>
                </div>
            </div>

            { /* Resume button */}
            <div className="resume-btn">
                <img alt="" src="assets/images/menu/resume_btn.jpg" />
                <div className="mask">
                </div>
                <div className="heading col-xs-11 col-xs-offset-1">
                    <div className="col-xs-2 hidden-xs">
                        <i className="fa fa-graduation-cap"></i>
                    </div>
                    <div className="col-sm-10">
                        <h2>RE<span>S</span>UME</h2>
                        <h3>Utdanning, Erfaring og Skills.</h3>
                    </div>
                </div>
            </div>

            { /* Portfolio button */}
            <div className="portfolio-btn">
                <img alt="" src="assets/images/menu/portfolio_btn.jpg" />
                <div className="mask">
                </div>
                <div className="heading col-xs-11 col-xs-offset-1">
                    <div className="col-xs-2 hidden-xs">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <div className="col-sm-10">
                        <h2>PORT<span>F</span>OLIO</h2>
                        <h3>Arbeidet mitt.</h3>
                    </div>
                </div>
            </div>

            { /* Contact button */}
            <div className="contact-btn">
                <img alt="" src="assets/images/menu/contact_btn.jpg" />
                <div className="mask">
                </div>
                <div className="heading col-xs-11 col-xs-offset-1">
                    <div className="col-xs-2 hidden-xs">
                        <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="col-sm-10">
                        <h2>CO<span>N</span>TACT</h2>
                        <h3>Hvor finner du meg.</h3>
                    </div>
                </div>
            </div>

        </div>
    );
}