import React from 'react';

const Footer = () => {
    return (
        <div className="bg p-5">
            <div className="container text-light ">
                <div className="row">
                    <div className="col-xl-4 col-sm-12 col-md-4">
                        <h1>Head Office</h1>
                        <ul>
                            <li>Bangladesh</li>
                            <li>Phone: 48449464464</li>
                            <li>Email: admin@gmail.com</li>
                            
                        </ul>
                    </div>
                    <div className="col-xl-4 col-sm-12 col-md-4">
                    <h1>Services</h1>
                        <ul>
                            <li>Surgical</li>
                            <li>Implants</li>
                            <li>Dental PRP</li>
                           
                        </ul>
                    </div>
                    <div className="col-xl-4 col-sm-12 col-md-4">
                    <h1>Patient Info</h1>
                        <ul>
                            <li>New Patient</li>
                            <li>Insurance</li>
                            <li>Appoinment</li>
                            
                        </ul>
                    </div>
                    <hr />
                </div>
                <p className="text-center"> All Copyright 2021 Reserved by DenttCare</p>
            </div>
        </div>
    );
};

export default Footer;