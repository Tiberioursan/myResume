import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { addEducation } from '../../redux/actions/educationActions';
import { EducationItem } from './EducationItemComponent';
import { baseUrl } from '../../shared/baseUrl';

export const Education = () => {

    const education = useSelector((state) => state.education.education);

    const { id, school, date, description } = education ?? {};

    const dispatch = useDispatch();

    const fetchEducation = async (id, school, date, descr) => {
        const response = await axios
            .get(baseUrl + 'education')
            .catch((err) => {
                console.log('Err', err);
            });
        dispatch(addEducation(response.data));
    }

    useEffect(() => {
        fetchEducation();
    }, []);

    return (
        <div className="education clearfix">
            <h2 className="small-heading">EDUCATION</h2>
            <div className="education-container col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0 col-sm-10 col-sm-offset-1">

                { /* Education items */}
                {education.map(educ =>
                    <>
                        <EducationItem key={educ.id} id={educ.id} school={educ.school} descr={educ.description} date={educ.date} />
                    </>
                )}
            </div>
        </div>
    );
}

