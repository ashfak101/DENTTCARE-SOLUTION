import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import InfoArea from '../InfoArea/InfoArea';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoArea></InfoArea>
            <Doctors></Doctors>
            <Services></Services>
            
        </div>
    );
};

export default Home;