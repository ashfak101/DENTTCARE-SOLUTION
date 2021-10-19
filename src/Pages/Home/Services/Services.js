import { faAffiliatetheme } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';

import useData from '../../../hooks/useData';
import Service from '../Home/Service/Service';

const Services = () => {

    const {data}=useData();
    console.log(data);
    const element=<FontAwesomeIcon icon={faAffiliatetheme} ></FontAwesomeIcon>
    return (
        <div className="container my-4">
            <div className="text-center my-5">
                <h1 className="title">Dental Treatments</h1>
                <p className="title">{element}</p>

            </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                {
                data.map((service)=><Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
                </Row>


            
            
          
        </div>
    );
};

export default Services;