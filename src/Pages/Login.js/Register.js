import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useLocation,useHistory} from 'react-router-dom';
import img from '../../images/login/undraw_secure_login_pdn4.svg'

const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.form||'/home'
const {registerWithEmailPass,}=useAuth()

const [email,setEmail]=useState('')
const [password,setPass]=useState('')

const handleEmail=e=>{
    setEmail(e.target.value)
}
const handlePassword=e=>{
    setPass(e.target.value)
}

const handleRegister=(e)=>{
    e.preventDefault();
    registerWithEmailPass(email,password)
    history.push(redirect_uri);
    
}
    return (
        <div className="container">
        <div className="row d-flex align-items-center p-top-bot ">
        <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
           <img className="img-fluid  " src={img} alt="banner" />
           
           </div>
           <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 text-light">
           <Form>
           
               <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                   <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                   </Form.Text>
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
               </Form.Group>
               <button onClick={handleRegister} className="btn btn-warning text-uppercase">Register</button>
           </Form>

           

         

           </div>
          
       </div>
   </div>
    );
};

export default Register;