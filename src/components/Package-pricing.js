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

import Pricingdata from "./Pricingdata";

const Package_pricing = (props) => {
  return (
    <div className="container mt-4">
      <div className=" row  text-center ">
        {Pricingdata.map((data) => {
          const {
            heading1,
            heading2,
            firstprice,
            secondprice,
            listdata1,
            listdata2,
            listdata3,
            listdata4,
          } = data;
          return (
            <div className=" mt-3 col-md-4 col-12">
              <MDBCol>
                <div className=" price-card text-center d-inline-block my_pricing_card border">
                  <MDBCardBody>
                    <MDBCardTitle className="text-left fwb">
                      {heading1}
                    </MDBCardTitle>
                    <MDBCardText className="text-left">{heading2}</MDBCardText>
                    <hr />
                    <div className="  mt-4 d-flex">
                      <span
                        style={{ fontSize: "40px", fontWeight: "bold" }}
                        className="text-left firstprice"
                      >
                        {firstprice}
                        <span className=" mt-5 mb-5 "></span>
                      </span>
                      <span className=" tag2 ">
                        {/* <p>ssas</p> */}
                        <span className="tag  ">{secondprice}</span>
                      </span>
                    </div>
                    <div>
                      <ul className="d-flex  p-0 pricinglist">
                        <li className=" mt-3  text-left">
                          <MDBIcon icon="check" className="px-2" />
                          {listdata1}
                        </li>
                        <li className="mt-3 text-left">
                          <MDBIcon icon="check" className="px-2" />
                          {listdata2}
                          <li className="text-left mt-3">
                            <MDBIcon icon="check" className="px-2" />
                            {listdata3}
                          </li>
                        </li>
                        <li className="text-left mt-3">
                          <MDBIcon icon="check" className="px-2" />
                          {listdata4}
                        </li>
                      </ul>
                    </div>
                    <hr />
                    <h3
                      className="mt-4 text-center"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        fontWeight: "bold",
                      }}
                    >
                      View Detail
                    </h3>

                    <div className="mt-4 mb-5  pca d-flex">
                      <div className="mt-2">
                        <button
                          rounded
                          className="pkg-pric-btn"
                          style={{ fontSize: "13px", fontWeight: "bold" }}
                        >
                          Order Now
                        </button>
                      </div>

                      <div className="pkg-pric-last mt-3 px-4">
                        <span>
                          Click Here to
                          <MDBIcon icon="sms" className="sms px-2" size="lg" />
                        </span>
                        <p>Live chat</p>
                      </div>
                    </div>
                  </MDBCardBody>
                </div>
              </MDBCol>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Package_pricing;
