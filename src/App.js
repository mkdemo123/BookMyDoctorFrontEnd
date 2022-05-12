import Doctor from "./components/Doctors";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/HomePage/SharedContent/Navbar';
import Home from './components/Home';
import HomePage from './components/HomePage/HomePage.jsx'
import About from './components/About.js';
import Login from './components/Login.js';
import { UserContext } from './components/UserContext.js';
import {useState} from 'react';
import PatientHome from './components/PatientHome.js';
import DoctorHome from './components/DoctorHome.js';
import RegistrationForm from './components/RegistrationForm';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/HomePage/SharedContent/Footer';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div className="App">
      <Router>
      <Switch>
        <UserContext.Provider value = {{user, setUser}}>
          <Navbar></Navbar>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/patient" component={PatientHome}></Route>
          <Route exact path="/doctor" component={DoctorHome}></Route>
          <Route exact path="/consult" component={ConsultationForm}></Route>
          <Route exact path="/ourdoctor" component={Doctor}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={RegistrationForm}></Route>
          <Route exact path="/" component={HomePage}></Route>
        </UserContext.Provider>
      </Switch>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
