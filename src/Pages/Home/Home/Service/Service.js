
import React from 'react';
import {  Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {name,img,description,keyId}=props.service
    return (
        
            <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description.slice(0,100)}
                </Card.Text>
                    <Link to={`/servicedetails/${keyId}`}><button className="btn btn-warning">More Details</button></Link>
                </Card.Body>
            </Card>
            </Col>
        
    
    );
};

export default Service;