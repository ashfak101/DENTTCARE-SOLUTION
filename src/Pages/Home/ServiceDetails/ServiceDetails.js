import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    let {serviceId}=useParams();
    

    const [items,setItems]=useState([])
    const[singleItem,setSingleItem]=useState({})
    
    
    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
        
    },[])

    // it will work when all data are loaded
    useEffect(()=>{
        // for finding specefic service details
    const newItem =  items.find(item=>item.keyId===serviceId)
        setSingleItem(newItem);
    },[items])
   
    
        
    return (
        <div className="container text-center">
           
           <div></div>
           <Image src={singleItem?.img} fluid />
           <h1>{singleItem?.name}</h1>
           <p>{singleItem?.description}</p>
        </div>
    );
};

export default ServiceDetails;