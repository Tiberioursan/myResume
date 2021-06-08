import React from 'react';

export default function () {
    return (
        <div className="introduction">
            <img alt="" src="assets/images/home_dp.jpg" />
            <div className="mask">
            </div>
            <div className="intro-content">
                <h1>HEI<br />
                JEG HETER <span>TIBERIU</span> URSAN</h1>
                <h2>WEB-UTVIKLER</h2>

                { /* Sociamedia icons */}
                <p className="social-media hidden-xs">
                    <a href="https://www.facebook.com/tiberio.ursan" className="fa fa-facebook" data-toggle="tooltip" title="Facebook"></a>
                    {/* <a href="#" className="fa fa-twitter" data-toggle="tooltip" title="Twitter"></a> */}
                    <a href="https://www.linkedin.com/in/tiberiu-ursan-18a3aa203/" className="fa fa-linkedin" data-toggle="tooltip" title="Linkedin"></a>
                    {/* <a href="#" className="fa fa-behance" data-toggle="tooltip" title="Behance"></a>
                        <a href="#" className="fa fa-flickr" data-toggle="tooltip" title="Flicker"></a> */}
                    <a href="https://www.instagram.com/tiberio91ur/" className="fa fa-instagram" data-toggle="tooltip" title="Instagram"></a>
                </p>

            </div>
        </div>
    );
}