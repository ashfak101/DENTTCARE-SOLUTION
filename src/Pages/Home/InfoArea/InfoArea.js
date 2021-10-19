import { faClock, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoArea.css'

const InfoArea = () => {



    const element=<FontAwesomeIcon icon={faPhone}/>
    const element2=<FontAwesomeIcon icon={faClock}/>
    const element3=<FontAwesomeIcon icon={faMailBulk}/>
    return (
        <div className="container">
            <div className="row d-flex mt-5 p-1">
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 ">
                    
                <div className="row  align-items-center">
                   <div className="col-sm-6">
                   <div className="info-box">
                       <div>
                       <p className="fs-1">{element}</p>
                        <h2>Call Us</h2>
                        <p>+8800159845984</p>
                        <p>+88001598459565</p>
                       </div>
                    </div>
                   </div>
                  <div className="col-sm-6">
                  <div className="info-box">
                       <div>
                       <p className="fs-1">{element2}</p>
                        <h2>Opening Hours</h2>
                        <p>Mon-Sat : 8 am-5am</p>
                        <p>Sunday Closed</p>
                       </div>
                    </div>
                    <div className="info-box">
                       <div>
                       <p className="fs-1">{element3}</p>
                        <h2>Email Us</h2>
                        <p>denttcare@gmail.com</p>
                        <p>info@gmail.com</p>
                       </div>
                    </div>
                  </div>
                </div>
              

                </div>
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 info-head my-auto">
                   <h1>Welcome to The <br /> <span>DenttCare Solution</span></h1>
                   <h5>We Create Beautiful Smiles</h5>
                   <p className="mt-4 ">The DenttCare is a modern dental clinic, specialized in advanced diagnostics and treatment of dental and oral disorders. We offer comprehensive services from all fields of dentistry. In addition to high-end dental equipment, all services are provided in a comfortable, luxury environment.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoArea;