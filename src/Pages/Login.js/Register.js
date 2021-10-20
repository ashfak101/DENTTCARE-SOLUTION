
import { Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useLocation,useHistory} from 'react-router-dom';
import img from '../../images/login/undraw_secure_login_pdn4.svg'

const Register = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.form||'/login'
    const {registerWithEmailPass,handleName,
    
        handlePassword,
        handleEmail,
    }=useAuth()

    

const handleRegister=(e)=>{
    e.preventDefault();
    registerWithEmailPass()
    
    history.push(redirect_uri);
    
}
    return (
        <div className="container">
        <div className="row d-flex  p-top-bot ">
        <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
           <img className="img-fluid  " src={img} alt="banner" />
           
           </div>
           <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
           <Form >
           <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Name</Form.Label>
                   <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Email address</Form.Label>
                   <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                   
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