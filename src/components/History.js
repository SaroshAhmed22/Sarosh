import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";
// import Img1 from '../components/'

const History = () => {
  return (
    <div>
      <div className=" container mt-5 history-div">
        <h1 className="text-center mt-5 font-weight-bold">Our History</h1>
        <p className="mt-1 text-center text-justify">
          With an array of Satisfied Clients Worldwide, Our team of experts
          focus on client and customer satisfaction as the ultimate goal for our
          projects. This is one of the many reasons why our work is globally
          acclaimed and recognized.
        </p>
      </div>
      <div className="mt-5 container">
        <div className="  row">
          <div className=" col-md-4 col-12 ">
            <MDBCol className=" History-cards">
              <MDBCard
                className="border-0 history-card1"
                style={{ width: "22rem" }}
              >
                <img
                  src="./Images/history/man.png"
                  className="img-fluid ml-3"
                  width="54px"
                  height="54px"
                />
                <MDBCardBody className="p-0">
                  <MDBCardTitle className="history-heading1 ml-3">
                    2,630
                  </MDBCardTitle>
                  <MDBCardText>
                    <h2 className="  history-para-h history-heading2  ml-3">
                      SATISFIED CUSTOMERS
                    </h2>
                    <p className=" ml-3 history-para-h  font-weight-lighter history-para text-center">
                      Words can’t describe satisfaction but numbers definitely
                      can. Here’s a look at our satisfied Customers.
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
          <div className=" col-md-4 col-12 ">
            <MDBCol className=" History-cards">
              <MDBCard
                className="border-0 history-card1"
                style={{ width: "22rem" }}
              >
                <img
                  src="./Images/history/clock.png"
                  className="img-fluid ml-3"
                  width="54px"
                  height="54px"
                />
                <MDBCardImage className="img-fluid" src="" waves />
                <MDBCardBody className="p-0">
                  <MDBCardTitle className="history-para-h  history-heading1  ml-3">
                    5,444
                  </MDBCardTitle>
                  <MDBCardText>
                    <h2 className="  history-heading2 ml-5">
                      PROJECTS COMPLETED
                    </h2>
                    <p className=" ml-3 history-para-h  font-weight-lighter history-para  text-center">
                      We put a lot of detail into achieving perfection for our
                      beloved clients.
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>

          <div className="col-md-4 col-12 ">
            <MDBCol className=" History-cards">
              <MDBCard
                className="border-0 history-card1"
                style={{ width: "22rem" }}
              >
                <img
                  src="./Images/history/product.png"
                  className="img-fluid ml-3"
                  width="54px"
                  height="54px"
                />
                <MDBCardBody className="p-0">
                  <MDBCardTitle className="history-heading1 ml-3">
                    3,125
                  </MDBCardTitle>
                  <MDBCardText>
                    <h2 className="history-heading2 history-para-h ml-3">
                      LAUNCHED PRODUCTS
                    </h2>
                    <p className="font-weight-lighter history-para history-para-h ml-3">
                      With years of design experience, here’s a look at our
                      number of launched products.
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
