import React from 'react';

const About = () => {
    return (
        <div className="container py-2 my-5">
            <div className="text-center mb-5">
                <h2>Welcome to the DentCare</h2>
                <p >Since 1980, The Dentt Care has been proud to combine modern techniques and high-tech equipment. Dr. x and his team deliver a personalized and comfortable dental care experience unlike any other Mason dentist.</p>
            </div>
            <div className="row">
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 border border-warning rounded-3 p-5 ">
                    <h3>Everything You Need Under One Roof</h3>
                    <p>Our comprehensive services allow you to receive all needed dental care right here in our state-of-art office – from dental cleanings, fillings to esthetic restoration, extractions and prosthetic managements to dental implants.</p>

                </div>
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 border border-warning rounded-3 p-5">
                        <h3>Our Patient-Focused Approach</h3>
                        <p>Our treatment plan will perfectly match your needs, lifestyle, and goals. Even if it’s been years since you last visited the dentist, we can help. Our comfortable office, compassionate team, and minimally-invasive treatments will help you feel completely at ease.</p>
                </div>
            </div>
             <h2 className="text-warning text-center p-5"> We Have Treated 15k+ Patients</h2>
        </div>
    );
};

export default About;