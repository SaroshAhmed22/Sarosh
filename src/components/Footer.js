import React from 'react';
import { MDBIcon, MDBBtn } from "mdbreact";

const Footer = () => {
    return (
        <div>
            <div className="p-0">
                <hr className="p-0 footer-hr" />
            </div>
            <div className=" footer-main-div container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="mt-5 col-md-3 col-12">
                            <h2 style={{ fontSize: '15px' }} className="mt-5">SERVICES</h2>
                            <ul className="footer-list p-0">
                                <li className=" footer-lst-item1 mt-2" ><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Logo Design</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Website Design</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Animation Creation</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Graphics Designing</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Social Media Marketing</a></li>
                            </ul>
                        </div>


                        <div className="mt-5 col-md-3 col-12">
                            <ul className="mt-5 footer-list p-0">
                                <li className=" footer-lst-item1a " ><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">SEO</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Ecommerce</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Dropshipping Store</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Mobile App Development</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Web Portal</a></li>
                            </ul>
                        </div>




                        <div className="mt-5 col-md-3 col-12">

                            <h2 style={{ fontSize: '15px' }} className="mt-5">QUICK LINKS</h2>
                            <ul className="footer-list p-0">
                                <li className=" footer-lst-item1 mt-2" ><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Home</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Services</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Packages</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">Portfolio</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="angle-right" /><a className="mx-2" href="#">FAQs</a></li>
                            </ul>
                        </div>

                        <div className="mt-5 col-md-3 col-12">

                            <h2 style={{ fontSize: '15px' }} className="mt-5">CONTACT US</h2>
                            <ul className="footer-list p-0">
                                <li className=" footer-lst-item1 mt-2" ><MDBIcon className="text-white angle-right" icon="envelope" /><a className="mx-2" href="#">info@digitaloid.com</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="comments" /><a className="mx-2" href="#">Live Chat</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="phone-alt" /><a className="mx-2" href="#">+1 234 568 9789</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="map-marker-alt" /><a className="mx-2" href="#">10 Corporate  MA 01803 United States of America
                                </a></li>

                                <li><MDBIcon className="text-white angle-right" icon="phone-alt" /><a className="mx-2" href="#">+61 234 567 8768</a></li>

                                <li><MDBIcon className="text-white angle-right" icon="map-marker-alt" /><a className="mx-2" href="#">10 Corporate , MA 01803 United States of America
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className=" footer-hr2" />
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="d-flex">
                                <div>
                                    <img src="https://digitaloid.co/wp-content/uploads/2020/06/cropped-128-by-128-06-05.png" width="65px" height="68px" />
                                </div>
                                <div>
                                    <h1 className="mt-3 font-weight-bold  footer-heading1">DIGITALOID</h1>
                                </div>
                            </div>
                            <p className="mt-3 footer-para1">Copyright 2020 © All Rights Reserved. | Terms And Conditions | Privacy Policy</p>
                        </div>

                        <div className="col-md-4 text-center mt-3 col-12">
                            <h2 className="ml-5 text-center " style={{ fontSize: '15px' }} >CONTACT US</h2>
                            <ul className=" d-flex footer-list-last">
                                <li className="ml-5"><a className="text-center" href="#"><MDBIcon fab icon="facebook-square" size="lg" className="last-icons text-white" /></a></li>
                                <li className="ml-2"><a href="#"><MDBIcon fab icon="instagram" className="last-icons text-white" size="lg" /></a></li>
                                <li className="ml-2 g0auto "><a className="last-icons" href="#" ><MDBIcon fab icon="whatsapp" className="text-white last-icons mt-2" size="lg" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-12">
                            <br/><br/>
                            <p className="mt-3 footer-para1 text-right mt-5">Powered by Ecommerce DevOps</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
