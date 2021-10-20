import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {

    const {name,img,specialist}=props.doctor
    return (
        <Col className='text-center'>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {specialist}
            </Card.Text>
                <Link to='/appointment'><button className="btn btn-warning">GeT Appointment</button></Link>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Doctor;