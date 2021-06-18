import React, { Component } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

const Services = () => {
    return (
        <div>
            <div className="container py-5">
                <h1 className="servive-heading text-center">Our Services For Startups, SME & Entrepreneurs</h1>
                <p className=" py-2 servive-para">Digitaloid is a full-service creative design, brand, web and digital agency that helps brands move forward. Over the years, our agency has helped brands and companies redefine their purpose and unleash their full potential. In addition, we provide our clients with customized marketing solutions according to their target market to expand their businesses.</p>
            </div>
            <div className="container ">
                <div className="row serives-off">
                    <div className="  col-md-2 col-6 service-1 ">
                        <div className="text-center mt-4 py-2 ">
                            <MDBIcon fab icon="twitter-square" size="3x" />
                        </div>
                        <h6 className="text-center pt-2">Custom Logo Design</h6>
                    </div>

                    <div className=" col-md-2 col-6  ser-all">
                        <div className="text-center mt-4 py-2 ">

                            <i class="fa fa-desktop fa-2x" aria-hidden="true"></i>
                        </div>
                        <h6 className="pt-2 text-center">Web Design </h6>
                    </div>

                    <div className="col-md-2 col-6  ser-all  ">
                        <div className="text-center mt-4 py-2 ">
                            <i class="fa fa-cogs fa-2x" aria-hidden="true"></i>
                        </div>
                        <h6 className="pt-2 text-center">Search Engine Optimazation</h6>
                    </div>

                    <div className="col-md-2 col-6  ser-all ">
                        <div className="text-center mt-4 py-2">
                            <i class="fa fa-file-video-o fa-2x" aria-hidden="true"></i>
                        </div>
                        <h6 className="pt-2 text-center">Video Animation</h6>
                    </div>

                    <div className="col-md-2 col-6  ser-all  ">
                        <div className="text-center mt-4 py-2">
                            <MDBIcon icon="pen-fancy" size="3x" />
                        </div>
                        <h6 className="pt-2 text-center ">Stationary Design</h6>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h1 className="service-head-2">CUSTOM LOGO DESIGN</h1>
                        <p className="service-para2">Our experienced designers help companies around the world to develop and become top figures in their competitive industries. We will provide you with a high-quality custom logo design and make your business stands out.</p>
                        <div className="row mt-3">
                            <div className="col-md-6 col-12">
                                <div class="service-icon">
                                    <i class="fa fa-check" aria-hidden="true"><span className="px-2">3D Animated Logo Design</span></i>
                                    <i class="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Animated Logo Design</span></i>
                                    <i class=" mt-2 fa fa-check" aria-hidden="true"><span className="px-2">2D Animated Logo Design</span></i>
                                    <i class="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Logo Re-Design</span></i>
                                    <i class="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Iconic Logo Design</span></i>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div class="service-icon">
                                    <i class="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">
                                        Typographic Logo Design</span></i>
                                    <i class="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Silhouette Logo design</span></i>
                                    <i class=" mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Illustrative Logo Design</span></i>
                                    <i class="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Symbolic Logo Design</span></i>
                                </div>
                            </div>
                        </div>
                        <MDBBtn className=" mt-3 btn-rounded deep-orange">Deep-orange</MDBBtn>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="service-img">
                            <img src="https://digitaloid.co/wp-content/uploads/2020/11/custom-logo-tab.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;