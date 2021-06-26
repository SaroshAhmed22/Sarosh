import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

const Package_pricing = (props) => {
    return (

        <div className="  mt-3 ib   ">
            <div className="   mt-5">
                <div className="  container row ">
                    <div className="ml-4 ">
                        <div className="  col-md-6 col-12" >
                            <MDBCol >
                                <MDBCard  className="price-card pca b1"  style={{ width: "21.5rem",  }} >
                                    <MDBCardBody>
                                        <MDBCardTitle className="text-left fwb">{props.heading1}</MDBCardTitle>
                                        <MDBCardText className="text-left">
                                            {props.heading2}
                                        </MDBCardText>
                                        <hr />
                                        <div className="  mt-4 d-flex">
                                            <span style={{ fontSize: "40px", fontWeight: "bold" }} className="text-left firstprice" >{props.firstprice}<span className=" mt-5 mb-5 " ></span></span>
                                            <span className=" tag2 ">
                                                {/* <p>ssas</p> */}
                                                <span className="tag  ">{props.secondprice}
                                                </span>
                                            </span>
                                        </div>
                                        <div>

                                            <ul className="d-flex  p-0 pricinglist">
                                                <li className=" mt-3  text-left"><MDBIcon icon="check" className="px-2" />{props.listdata1}
                                                </li>
                                                <li className="mt-3 text-left"><MDBIcon icon="check" className="px-2" />{props.listdata2}
                                                    <li className="text-left mt-3"><MDBIcon icon="check" className="px-2" />{props.listdata3}
                                                    </li>
                                                </li>
                                                <li className="text-left mt-3"><MDBIcon icon="check" className="px-2" />{props.listdata4}
                                                </li>

                                            </ul>
                                        </div>
                                        <hr />
                                        <h3 className="mt-4 text-center" style={{ fontSize: "20px", color: 'gray', fontWeight: 'bold' }}>View Detail</h3>

                                        <div className="mt-4 d-flex">
                                            <div className="mt-2">
                                                <button rounded className="pkg-pric-btn" style={{ fontSize: '13px', fontWeight: 'bold' }}>Order Now</button>
                                            </div>

                                            <div className="pkg-pric-last mt-3 px-4">
                                                <span>Click Here to <MDBIcon icon="sms" className="sms px-2" size="lg" /></span>
                                                <p>Live chat</p>
                                            </div>
                                        </div>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Package_pricing;