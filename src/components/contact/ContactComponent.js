import React from 'react';
import { Footer } from '../FooterComponent';
import emailjs from 'emailjs-com';

const ContactPage = () => {

    function handleSubmit(e) {
        e.preventDefault();

        emailjs.sendForm('service_qh9bdzh', 'template_7ws0hpn', e.target, 'user_4q2KucvihIBYpXmrKRyhs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div className="contact-page">

            { /* Contact page fixed image (left side) */}
            <div className="image-container col-md-5 col-sm-12">
                <div className="mask">
                </div>
                <div className="main-heading">
                    <h1>CO<span>N</span>TACT</h1>
                </div>
            </div>

            { /* Contact page content (right side) */}
            <div className="content-container col-md-7 col-sm-12">

                { /* Contact form */}
                <div>
                    <h2 className="small-heading">SAY HELLO!</h2>

                    <div className="contact-form col-sm-11 clearfix">

                        <form onSubmit={handleSubmit} id="contactByEmail" name="contactByEmail">
                            {/* action="../../contactPHP/contact.php" */}
                            <fieldset>

                                { /* Name field */}
                                <div className="col-sm-12">
                                    <input id="name" name="name" placeholder="Your Name*" type="text" />
                                </div>

                                { /* Email field */}
                                <div className="col-sm-12">
                                    <input id="email" name="email" placeholder="Your Email*" type="email" />
                                </div>

                                { /* Message field */}
                                <div className="col-xs-12">
                                    <textarea cols="5" id="message" name="message" placeholder="Your Message....*"></textarea>
                                </div>

                                { /* Submit botton */}
                                <div className="col-xs-12">
                                    <button className="submit active">SEND</button>
                                </div>

                                { /* Error message */}
                                <div className="error col-xs-12">
                                    <h3></h3>
                                </div>

                                { /* Success message */}
                                <div className="success col-xs-12">
                                    <h3>Success! Your message was sent.</h3>
                                </div>

                            </fieldset>
                        </form>

                    </div>
                </div>

                { /* Google Map */}
                {/* <div className="google-map" id="google-map"></div> */}

                { /* Contact details */}
                <div className="contact-details clearfix">
                    <h2 className="small-heading">CONTACT DETAILS</h2>
                    {/* <div className="contact col-sm-4">
                        <p>
                            <i className="fa fa-map-marker"></i><br/>
                            121 King St, Melbourne VIC
                        </p>
                    </div> */}

                    <div className="contact col-sm-4">
                        <p>
                            <i className="fa fa-phone"></i><br />
                            4661 4438
                        </p>
                    </div>

                    {/* <div className="contact col-sm-4">
                        <p>
                            <i className="fa fa-fax"></i><br/>
                            +00 000 0000 000
                        </p>
                    </div> */}

                    {/* <div className="contact col-sm-4">
                        <p>
                            <i className="fa fa-phone"></i><br/>
                            +00 000 0000 000
                        </p>
                    </div> */}

                    <div className="contact col-sm-4">
                        <p>
                            <i className="fa fa-envelope"></i><br />
                            tiberioursan@gmail.com
                        </p>
                    </div>

                    <div className="contact col-sm-4">
                        <p>
                            <i className="fa fa-globe"></i><br />
                            <span href="https://tiberioursan.github.io/myresume/">Tiberiu Ursan</span>
                        </p>
                    </div>

                    { /* Social Media Icons */}
                    <div className="col-xs-12 social-media">
                        <a href="https://www.facebook.com/tiberio.ursan" className="fa fa-facebook" data-toggle="tooltip" title="Facebook"></a>
                        {/* <a href="#" className="fa fa-twitter" data-toggle="tooltip" title="Twitter"></a> */}
                        <a href="https://www.linkedin.com/in/tiberiu-ursan-18a3aa203/" className="fa fa-linkedin" data-toggle="tooltip" title="Linkedin"></a>
                        {/* <a href="#" className="fa fa-behance" data-toggle="tooltip" title="Behance"></a>
                        <a href="#" className="fa fa-flickr" data-toggle="tooltip" title="Flicker"></a> */}
                        <a href="https://www.instagram.com/tiberio91ur/" className="fa fa-instagram" data-toggle="tooltip" title="Instagram"></a>
                    </div>

                </div>

                { /* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default ContactPage;