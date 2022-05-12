import React, { Component } from "react";
import image1 from "./dr1.png";
import image2 from "./dr2.png";
import image4 from "./dr4.png";
import './Doctor.css'
import { Link } from "react-router-dom";
import { color } from "@mui/system";
// import "./Card1.css";

export default class Doctor extends Component {
  render() {
    return (
      <div >
        <div className="doctorstart">
        <div className="container ">
        
          <form method="">
            <div className="row">
              <div className="col-md-6">
                
              </div>

              <div className="col-6" >
                <div className="head">
                  <h1 className="text-black "style={{padding:20}}>Skip the travel!</h1>
                  <h2 className="text-white ">
                    Book Hassle Free Appointment Easily.
                  </h2>
                  <p style={{color:'black'}}>
                    Booking a Doctor's appointment is super easy now. No more of waiting in long lines.
                    Book appointment as your availability from anywhere.
                  </p>
                  <h6 className="profile-rating mt-2 mb-2 "style={{color:'black'}}>
                    <i class="fa fa-commenting-o"></i> Free
                    Followup{" "}
                  </h6>
                  <h6 className="profile-rating mt-2 mb-2 "style={{color:'black'}}>
                    <i class="fa fa-file-text-o"></i>  Digital
                    Description
                  </h6>
                  <h6 className="profile-rating mt-2 mb-2 "style={{color:'black'}}>
                  <i class="fa fa-check-circle-o" ></i> Verified Doctors
                  </h6>
                  <button type="button" class="btn btn-outline-primary mt-3 mb-4"> <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> </button>
                </div>
              </div>
            </div>
          </form>
          </div>
        </div>
        <div className="container justify-content-center mt-5 ">
        <h2 className="mb-3" style={{padding: 0, textAlign:"center"}}>Our Doctors</h2>
          <div className="row">
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image1} alt="img1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Stephen Strange</h4>
                  <p className="card-text text-secondary">
                    General Physician
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img2" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Mindy Kalling</h4>
                  <p className="card-text text-secondary">
                   Gynaecology
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image2} alt="img3" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Derek Sepherd</h4>
                  <p className="card-text text-secondary">
                    Neurology
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>
            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img4" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Meredith Grey</h4>
                  <p className="card-text text-secondary">
                    Dermatology
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img2" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Christina Yang</h4>
                  <p className="card-text text-secondary">
                   Cardiology
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image4} alt="img2" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Bailey Torres</h4>
                  <p className="card-text text-secondary">
                   General Physician
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image2} alt="img3" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Alex karev</h4>
                  <p className="card-text text-secondary">
                    Pediatrics
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>

            <div className="col-6 my-2 col-lg-3">
              <div className="card text-center">
                <div className="overflow">
                  <img src={image2} alt="img3" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                  <h4 className="card-title">Dr. Owen Hunt</h4>
                  <p className="card-text text-secondary">
                    Opthamology
                  </p>
                  <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Book Now</span></Link> 
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
