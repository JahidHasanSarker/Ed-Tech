import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServiceHome = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
        .then(res=> res.json())
        .then(data => {
            setServices(data.slice(0,6))
        })
    }, [])
    return (
        <div id='services'>
            <div id="cards_landscape_wrap-2">
            <h2 className="pt-5 consult fw-bold">Our Services</h2>
            
            <div className="container">
                <div className="row">
                {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceHome;