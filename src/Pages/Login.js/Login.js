import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/login/undraw_secure_login_pdn4.svg'
import { useLocation,useHistory} from 'react-router-dom';

const Login = () => {
    const {signInWithGoogle,userLogin}=useAuth()
    const [email,setEmail]=useState('')
    const [password,setPass]=useState('')
    const location = useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.form||'/home'
            const handleEmail=e=>{
                setEmail(e.target.value)
            }
            const handlePassword=e=>{
                setPass(e.target.value)
            }
            const handleLogin=e=>{
                e.preventDefault();
                userLogin(email,password)
                history.push(redirect_uri);
            }
          
               
                
               
          
    const google=<FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
    return (
        <div className="container">
             <div className="row d-flex  p-top-bot ">
             <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
                <img className="img-fluid  " src={loginImg} alt="banner" />
                
                </div>
                <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6 ">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                       
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <button type='submit' onClick={handleLogin} className="btn btn-warning text-uppercase">Login</button>
                </Form>

                <div className="mt-4">
                    <h4 className="text-dark">Or LogIn With</h4>
                    <button  onClick={signInWithGoogle}  className="btn btn-warning text-uppercase mb-4">{google}  Google</button><br />

                    <Link to='/register'>Create an Account</Link>
                </div>

              

                </div>
               
            </div>
        </div>
    );
};

export default Login;