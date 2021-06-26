import React, { useState, Component } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";
// import Web from "./Portfolio-sections/Web"



const Portfolio = () => {
    return (
        <div>
            <h1 className="mt-4 text-center portfolio-main-heading">Have a Look at What We Do</h1>
            <h5 className="container text-center  portfolio-main-heading2">Have a Look at What We Do
                Our team consists of individuals of multidisciplinary talents. We were born to build inspiring and influential brands that deliver memorable and transformative digital experiences.</h5>

            <div className="container mt-5 d-flex portfolio">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <span type="button" className="  badge badge-pill badge-primary portfolio-btn1">Web</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Food</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Real State</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Fitness</span>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Technology</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Sports</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Automotive</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Appeal</span>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12">
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Social</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">Music</span>
                        <span type="button" className="badge badge-pill badge-primary portfolio-btns">game</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;