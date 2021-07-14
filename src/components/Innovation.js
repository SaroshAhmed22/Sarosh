import React, { Component } from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

export default class Innovation extends Component {
  k;
  render() {
    return (
      <div>
        <div className="container-fluid Inno-main-div">
          <div className="container">
            <div className="row b3">
              <div className="mt-5 text-white col-md-6 col-12">
                <h1>An Innovatory Company, You Can Take On Trust!</h1>
                <p style={{ fontSize: "18px" }}>
                  Digitaloid is a logo maker designed for providing exceptional
                  design and development solutions for entrepreneurs on the go.
                  We design and develop for everyone, so if you are a start-up
                  or have a well-established business or a brand, We are here to
                  assist you.
                </p>
                <div className="mt-4 inobt1">
                  <button className="font-weight-bold btn-2 ">
                    Contact Us
                  </button>
                </div>
              </div>

              <div
                className=" inno2   text-center col-md-6 col-12 "
                style={{ height: "max-content" }}
              >
                <div
                  className=" inno3 container "
                  style={{ position: "relative" }}
                >
                  <div className=" row  text-center ">
                    <div className=" mt-5 text-white col-md-6 col-6">
                      <div className="inno-circle ">
                        <div className="text-center inno-all-icons mt-4">
                          <MDBIcon
                            fab
                            icon="expeditedssl "
                            className="inno-all-icons"
                            size="3x"
                          />
                          <p className="p-0 mt-4 circle-heading ">QUALITY</p>
                        </div>
                      </div>
                    </div>

                    <div className=" mt-5 text-white col-md-6 col-6">
                      <div className="inno-circle ">
                        <div className="text-center inno-all-icons mt-4">
                          <MDBIcon
                            icon="user-clock "
                            className="inno-all-icons"
                            size="3x"
                          />
                          <p className="p-0 mt-4 circle-heading ">QUICK TIME</p>
                        </div>
                      </div>
                    </div>
                    {/* <br /> */}

                    <div className="mt-3 text-white col-md-6 col-6">
                      <div className="mt-4 inno-circle">
                        <div className="text-center mt-4 inno-all-icons">
                          <MDBIcon
                            icon="hand-holding-usd"
                            size="3x"
                            className="inno-all-icons"
                          />
                          <p className="p-0 mt-4 circle-heading ">VALUE</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 text-white col-md-6 col-6">
                      <div className="mt-4 inno-circle">
                        <div className="text-center inno-all-icons mt-4">
                          <MDBIcon
                            icon="trophy"
                            size="3x"
                            className="inno-all-icons"
                          />
                          <p className="p-0 mt-4 circle-heading ">AWARD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
