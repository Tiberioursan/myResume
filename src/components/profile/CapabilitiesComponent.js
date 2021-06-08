import React, { useState, useContext } from 'react';

import { CapabilitiesContext } from '../../shared/capabilitiesContext';

export const ProfileCapabilities = () => {

    const [capabilities, setCapabilities] = useContext(CapabilitiesContext);

    return (
            <div className="services-container clearfix">
                <h2 className="small-heading">HVA KAN JEG GJØRE?</h2>

                { /* Skills */}
                {capabilities.map(capability => (
                    <div className="services col-lg-4 col-md-6 col-sm-4" key={capability.id}>
                    <i className={capability.icon}></i>
                    <h3>{capability.title}</h3>
                    <p>
                        {capability.description}
                    </p>
                </div>
                ))}
            </div>
    );
}