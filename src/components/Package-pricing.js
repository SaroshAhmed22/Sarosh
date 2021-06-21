import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

const Package_pricing = (props) => {
    return (
        <div className="ib px-3 text-center">
            <div className="container  mt-5">
                <div className="row">
                    <div className="text-center">
                        <div className="col-md-6 col-12" >
                            <MDBCol>
                                <MDBCard style={{ width: "21.5rem", height: "37rem" }}>
                                    <MDBCardBody>
                                        <MDBCardTitle className="text-left">Basic</MDBCardTitle>
                                        <MDBCardText className="text-left">
                                            Cost Effective Package for your Business
                                        </MDBCardText>
                                        <hr />
                                        <div className="d-flex">
                                            <span style={{ fontSize: "40px", fontWeight: "bold" }} className="text-left ">{props.firstprice}</span>
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
                                        <h3 className="mt-3 text-center" style={{ fontSize: "20px" }}>View Detail</h3>

                                        <div className="mt-4 d-flex">
                                            <div>
                                                <MDBBtn rounded color="danger" style={{ borderRadius: "30px" }}>Danger</MDBBtn>
                                            </div>

                                            <div className="px-5">
                                                <span>Click Here to</span>
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