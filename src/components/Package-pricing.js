import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Package_pricing = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <MDBCol>
                            <MDBCard style={{ width: "21.5rem", height: "37rem" }}>
                                <MDBCardBody>
                                    <MDBCardTitle>Basic</MDBCardTitle>
                                    <MDBCardText>
                                        Cost Effective Package for your Business
                                    </MDBCardText>
                                    <hr />
                                    <div >
                                        <span className="text-left ">$30</span>
                                        <span className="tag ">75% off  </span>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Package_pricing;