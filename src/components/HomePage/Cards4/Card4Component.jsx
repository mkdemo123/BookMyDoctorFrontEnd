import React, { Component } from "react";
import { Link } from "react-router-dom";
import image1 from "./img-cardio.png";
import image2 from "./img-dentist.png";
import image3 from "./img-neuro.png";
import image4 from "./img-physician.png";
import image5 from "./img-uro.png";
import image6 from "./ortho.png";
import './Card4.css';

export default class Card4Component extends Component {
  render() {
    return (
      <div >
        <div className="container mt-5"  >
        <h2 align='center' style={{color:'#272b41', }}>Clinics And Specialities</h2>
      <h5 align='center' style={{color:'#757575'}} >Find experienced doctors across all specialties</h5>
          <div class="card-deck row">
            <div className="col-6 my-2 col-lg-2">
            <img src={image1} className="card-img-top border  rounded" alt="neuro" />
              <div className="card-body text-center">
              <h5>Cardiologist</h5>
              </div>
            </div>    

            <div className="col-6 my-2 col-lg-2">
            <img src={image2} className="card-img-top border rounded" alt="hema" />
              <div className="card-body text-center">
              <h5>Dentist</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-2">
              <img src={image3} className="card-img-top border rounded" alt="cardio" />
              <div className="card-body text-center">
                <h5>Neurology</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-2">
            <img src={image4} className="card-img-top border rounded" alt="ortho" />
              <div className="card-body text-center">
              <h5>General Physician</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-2">
              <img src={image5} className="card-img-top border rounded" alt="gastro" />
              <div className="card-body text-center">
                <h5>Urology</h5>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-2">
              <img src={image6} className="card-img-top border rounded" alt="cardio" />
              <div className="card-body text-center">
                <h5>Orthopedic</h5>
              </div>
            </div>
            
            

          </div>
        </div>
      </div>
    );
  }
}
