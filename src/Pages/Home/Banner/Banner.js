
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/undraw_doctors_hwty.svg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg">
            <div className="container   ">
            <div className="row d-flex align-items-center p-top-bot ">
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 text-light">
                    <h1 className="h-heading ">Pro <span>Dental </span> Care</h1>
                    <h3>Welcome to The DenttCare Solution</h3>
                    <p className="fw-lighter ">Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>

              <Link to='/appointment'><button className="btn btn-outline-warning mb-5 text-uppercase">Get Appointment</button></Link>

                </div>
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                <img className="img-fluid  " src={banner} alt="banner" />
                </div>
            </div>
        </div>
        </div>  
    );
};

export default Banner;