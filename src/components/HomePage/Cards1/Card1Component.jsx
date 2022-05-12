import React, { Component } from "react";
import image1 from "./one.png";
import image2 from "./two.png";
import image3 from "./three.png";
import image4 from "./four.png";
import './Card1.css'

import { Link } from "react-router-dom";
import "./Card1.css";

export default class Card1component extends Component {
  render() {
    return (
      <div style={{background:'#f8f9fa'}}>
        <div className="container justify-content-center mt-5,  justifyContent: 'space-around' ">
        <h2 align='center' style={{color:'#272b41'}}>Discover the Online Appointment!</h2>
      <h5 align='center' style={{color:'#757575'}} >A step-by-step guide to build an on-demand appointment for patients</h5>
          <div className="row">
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image1} alt="img1" className="card-img-top" />
                </div>
                <div className="card-body  text-dark">
                  <h4 className="card-title"style={{color:'blue'}}>Find A Doctor</h4>
                  <p className="card-text "style={{color:'black'}}>
                  With more than 1000+ doctors and on mission to provide best care Health Care Service
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image2} alt="img2" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title"style={{color:'blue'}}>View Doctor</h4>
                  <p className="card-text"style={{color:'black'}}>
                  Share your health concern here and we shall assign you a top doctor
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image3} alt="img3" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title"style={{color:'blue'}}>Select Date And Time</h4>
                  <p className="card-text"style={{color:'black'}}>
                  Select Date and Time as per your availability
                  </p>
                  
                </div>
              </div>
            </div>
          
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img4" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title"style={{color:'blue'}}>Book Your Visit</h4>
                  <p className="card-text"style={{color:'black'}}>
                  Finally book your visit with doctor right on the schedule you selected!!!
                  </p>
                  
                </div>
              </div>
            </div>
            <p className="lead">
                                <Link to="/ourdoctor" className="btn btn-lg btn-primary text-white fw-bold border-blue bg-blue position-center"button style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>Find A Doctor</Link>
                            </p>
          </div>
        </div>
      </div>
    );
  }
}
