import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
// import Img1 from '../components/'



const History = () => {
    return (
        <div>
            <div className=" container mt-5">
                <h1 className="text-center mt-5 font-weight-bold">Our History</h1>
                <p className="mt-1 text-center text-justify">With an array of Satisfied Clients Worldwide, Our team of experts focus on client and customer satisfaction as the ultimate goal for our projects. This is one of the many reasons why our work is globally acclaimed and recognized.</p>
            </div>
            <div className="mt-5 container">
                <div className="  row">
                    <div className=" col-md-4 col-12 ">
                        <MDBCol className=" History-cards">
                            <MDBCard className="border-0 history-card1" style={{ width: "22rem" }}>
                                <MDBIcon className="mt-5 ml-5 history-icon" icon="male" size="5x" />
                                <MDBCardBody>
                                    <MDBCardTitle className="history-heading1 ">2,630</MDBCardTitle>
                                    <MDBCardText>
                                        <h2 className="  history-para-h history-heading2">SATISFIED CUSTOMERS</h2>
                                        <p className=" history-para-h  font-weight-lighter history-para">Words can’t describe satisfaction but numbers definitely can. Here’s a look at our satisfied Customers.</p>
                                    </MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>
                    <div className=" col-md-4 col-12 ">
                        <MDBCol className=" History-cards">
                            <MDBCard className="border-0 history-card1" style={{ width: "22rem" }}>
                                <MDBIcon className="mt-5 ml-5 history-icon" icon="clock" size="5x" />
                                <MDBCardImage className="img-fluid" src=""
                                    waves />
                                <MDBCardBody>
                                    <MDBCardTitle className="history-para-h  history-heading1  ">5,444
                                    </MDBCardTitle>
                                    <MDBCardText>
                                        <h2 className="  history-heading2">PROJECTS COMPLETED</h2>
                                        <p className=" history-para-h  font-weight-lighter history-para">We put a lot of detail into achieving perfection for our beloved clients.</p>
                                    </MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>

                    <div className="col-md-4 col-12 ">
                        <MDBCol className=" History-cards">
                            <MDBCard className="border-0 history-card1" style={{ width: "22rem" }}>
                                <MDBIcon className="mt-5 ml-5 history-icon" icon="paper-plane" size="5x" />
                                <MDBCardBody>
                                    <MDBCardTitle className="history-heading1  ">3,125

                                    </MDBCardTitle>
                                    <MDBCardText>
                                        <h2 className="history-heading2 history-para-h ">LAUNCHED PRODUCTS</h2>
                                        <p className="font-weight-lighter history-para history-para-h ">With years of design experience, here’s a look at our number of launched products.</p>
                                    </MDBCardText>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default History;
