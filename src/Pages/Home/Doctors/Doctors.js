import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState([])
    console.log(doctors);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])

    return (
        <div className="container my-4">
        <div className="text-center my-5">
            <h1 className="title">MeeT Our Doctors</h1>
            

        </div>
            <Row xs={1} md={2} lg={4} className="g-4">
            {
            doctors.map(doctor=><Doctor
            key={doctor.name}
            doctor={doctor}
            ></Doctor>)
        }
            </Row>


        
        
      
    </div>
    );
};

export default Doctors;