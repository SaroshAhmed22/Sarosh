import React, { Component } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

const Services = () => {
    return (
        <div>
            <div className="container py-5">
                <h1 className="servive-heading text-center">Our Services For Startups, SME & Entrepreneurs</h1>
                <p className=" py-2 servive-para">Digitaloid is a full-service creative design, brand, web and digital agency that helps brands move forward. Over the years, our agency has helped brands and companies redefine their purpose and unleash their full potential. In addition, we provide our clients with customized marketing solutions according to their target market to expand their businesses.</p>
            </div>
            <div className="text-center container ">
                <div className="row  text-center serives-off">
                    <div className="  col-md-2 col-5 service-1 ">
                        <div className="text-center mt-4 py-2 ">
                            <MDBIcon fab icon="twitter-square" size="3x" />
                        </div>
                        <h6 className="text-center pt-2">Custom Logo Design</h6>
                    </div>

                    <div className=" col-md-2 col-5 ser-all">
                        <div className=" text-center mt-4 py-2 ">

                            <i className="fa fa-desktop fa-2x" aria-hidden="true"></i>
                        </div>
                        <h6 className="pt-2 text-center">Web Design </h6>
                    </div>

                    <div className="ser-all-media col-md-2 col-5  ser-all  ">
                        <div className="text-center mt-4 py-2 ">
                            <i className="fa fa-cogs fa-2x" aria-hidden="true"></i>
                        </div>
                        <h6 className="pt-2 text-center">Search Engine Optimazation</h6>
                    </div>

                    <div className="ser-all-media col-md-2 col-5  ser-all ">
                        <div className="text-center mt-4 py-2">
                            <i className="fa fa-file-video-o fa-2x" aria-hidden="true"></i>
                        </div>
                        <h6 className="pt-2 text-center">Video Animation</h6>
                    </div>

                    <div className="ser-all-media col-md-2 col-5  ser-all  ">
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
                                <div class="service-icon ">
                                    <i className="fa fa-check" aria-hidden="true"><span className="px-2 ">3D Animated Logo Design</span></i>
                                    <i className="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Animated Logo Design</span></i>
                                    <i className=" mt-2 fa fa-check" aria-hidden="true"><span className="px-2">2D Animated Logo Design</span></i>
                                    <i className="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Logo Re-Design</span></i>
                                    <i className="mt-2 fa fa-check" aria-hidden="true"><span className="px-2">Iconic Logo Design</span></i>
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
                        <MDBBtn className=" px-5 text-white mt-3 btn-rounded ">learn More</MDBBtn>
                    </div>
                    <div className="mt-3 col-md-6 col-12">
                        <div className="service-img">
                            <img src="https://digitaloid.co/wp-content/uploads/2020/11/custom-logo-tab.png" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="  container-fluid service-sec3">
                <div className="">
                    <div className="row">
                        <div className=" col-md-6 service-sec3a col-12 mt-5">
                            <div className="service-sec3ah4 ml-5 px-5">
                                <h4 className=" text-center text-white mt-5">Make Your First Move</h4>
                                <h1 className="font-weight-bold text-center text-white ">Share Your Idea With Us</h1>
                                <h5 className="text-center  text-white mb-5">Contact our experts NOW to begin crafting your project.</h5>
                            </div>
                        </div>

                        <div className="mt-5 col-md-6 service-sec3b  col-12 d-flex text-center">
                            <div>
                                <MDBBtn className=" px-5 text-white mt-5 btn-rounded2 deep-orange"><MDBIcon className="" icon="boxes" size="lg" /><span className="px-4">Select Package</span></MDBBtn>
                                <div className="mt-3 px-3">
                                    <MDBIcon className="text-white" icon="phone" size="lg" />
                                    <span className="px-4 text-white">Contact Number : +1 702 805 0826
                                    </span>
                                </div>
                            </div>
                            <div>
                                <MDBBtn className="btn service-last-btn px-5  text-white mt-5 btn-rounded2 deep-orange2">
                                    <MDBIcon far icon="edit" className="text-white edit" size="lg"></MDBIcon>
                                    <span className="px-4 edit1">request a quote</span></MDBBtn>
                                <div className="mt-3 px-4  ">
                                    <MDBIcon far icon="comments" size="lg" className="text-white " />
                                    <span className="px-4 text-white">Start Live Chat
                                    </span>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Services;