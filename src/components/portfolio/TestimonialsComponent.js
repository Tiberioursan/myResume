import React, { useState, useContext } from 'react';

import { TestimonialsContext } from '../../shared/testimonialsContext';

export const Testimonials = () => {

    const [testimonials, setTestimonials] = useContext(TestimonialsContext);

    return (
        <div className="testimonials clearfix">
            <h2 className="small-heading"></h2>
            <div className="testimonials-container col-sm-10 col-sm-offset-1">
                {/* <div className="owl-carousel">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id}>
                        <p>
                            <i className="fa fa-quote-left"></i>{testimonial.comment}<i className="fa fa-quote-right"></i>
                        </p>
                        <h3>{testimonial.name}</h3>
                    </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}