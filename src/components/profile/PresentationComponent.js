import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { addPresentation } from '../../redux/actions/presentationActions';
import { baseUrl } from '../../shared/baseUrl';

export const ProfilePresentation = () => {

    const pres = useSelector((state) => state.presentation.presentation);

    const { title, subtitle, image, description } = pres[0] ?? {};

    const dispatch = useDispatch();

    const fetchPresentation = async () => {
        const response = await axios
            .get(baseUrl + 'presentation')
            .catch((err) => {
                console.log('Err', err);
            });
        dispatch(addPresentation(response.data));
    }

    useEffect(() => {
        fetchPresentation();
        // fetchCV();
    }, []);

    return (
        <>
            { /* Presentation */}
            <div className="story clearfix">
                <h2 className="small-heading">{title}</h2>
                <div className="col-lg-11 col-lg-offset-1">
                    <div className="story-content clearfix">
                        <img alt="" src="assets/images/foto2.jpg" className="col-xs-offset-1 col-sm-offset-0 col-sm-4 col-xs-10" />
                        <div className="col-sm-8 col-xs-12">
                            <h3>{subtitle}</h3>
                            <p>
                                {description}
                            </p>
                            {/* <a href="#" className="hire-me">Hire Me</a> */}
                            {/* <a href="" onClick={download}>Download Resume</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}