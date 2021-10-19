import React from 'react';
import { Link } from 'react-router-dom';
import notimg from '../../images/undraw_injured_9757.svg'
const NotFound = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center p-top-bot ">
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 ">
                    <h1 className="h-heading "> <span>Opps </span> 404</h1>
                    <h1 className="h-heading ">Page <span>NOT </span> Found</h1>
                   
                   

              <Link to='/home'><button className="btn btn-warning mb-5 text-uppercase">Got Home</button></Link>

                </div>
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                <img className="img-fluid  " src={notimg} alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;