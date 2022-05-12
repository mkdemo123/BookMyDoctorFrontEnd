import React, { Component } from "react";
import doctor from './doctor.png';
import './Card2Component.css';
import { Link } from "react-router-dom";
import Doctor from '../../Doctors';


const Card2Component = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
            <div className="row ">
                <div className="col-md-5 d-none d-md-block">
                    <img src={doctor} alt="" />
                </div>
                <div className="col-md-7 text-white py-5">
                    <h2 className="brand-color text-uppercase">Book Our Doctor</h2>
                    <h5 className="">Quick appointment with doctors </h5>
                    <p>Book My Doctor is an online portal for all your healthcare needs.
                        <br/>
                        <br/>Our team of medical experts is there for you, from finding the right doctors 
                        and hospitals to booking appointments and giving any kind of medical help in between. </p>
                        <p className="lead">
                                <Link to="/ourdoctor" className="btn btn-lg btn-primary text-white fw-bold border-blue bg-blue position-center"button style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>View All</Link>
                            </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card2Component;