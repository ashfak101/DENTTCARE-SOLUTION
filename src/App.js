
import { BrowserRouter as  Router,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';

import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Blog from './Pages/Blog/Blog';
import Faq from './Pages/Faq/Faq';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Pages/Login.js/Login';
import Register from './Pages/Login.js/Register';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <>
    
    <AuthProvider>
        <Router>
          <Header/>
          <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/about'>
                <About></About>
            </Route>
            <PrivateRoute path='/servicedetails/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/appointment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path='/blog'>
             <Blog></Blog>
            </Route>
            <Route path='/faq'>
              <Faq></Faq>
            </Route>
            
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    </AuthProvider>
    
    </>
  );
}

export default App;
