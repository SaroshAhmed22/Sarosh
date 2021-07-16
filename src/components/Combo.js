import React, { Component } from "react";
import { MDBIcon } from "mdbreact";

export default class Combo extends Component {
  render() {
    return (
      <div>
        <div className="mt-5 combo-main-div container-fluid">
          <div className=" container">
            <div>
              <br />
              <div className=" py-2 text-white  text-center combo-main-heading">
                <h1 className="py-2">START UP COMBO</h1>
              </div>
              <p className=" pt-2 m-0 text-center combo-para">
                Suitable for potential super-startups and brand revamps for
                companies
              </p>
              <div className="bg-white combo-mid-div container">
                <div className="row">
                  <div className="mt-3  col-md-3  col-12">
                    <h3 className="combo-list-heading text-left">
                      Logo Design
                    </h3>
                    <ul className="d-flex text-center  p-0 pricinglist">
                      <li className=" mt-3  text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="mt-3 text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                        <li className="text-left mt-3">
                          <MDBIcon icon="check" className="px-2" />3 Dedicated
                          Designer
                        </li>
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                    </ul>
                    <h3 className="combo-list-heading">Features</h3>

                    <ul className="d-flex  p-0 pricinglist">
                      <li className=" mt-3  text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="mt-3 text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                        <li className="text-left mt-3">
                          <MDBIcon icon="check" className="px-2" />3 Dedicated
                          Designer
                        </li>
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 col-md-3 p-0 col-12">
                    <h3 className="combo-list-heading">Branding</h3>
                    <ul className="d-flex  p-0 pricinglist">
                      <li className=" mt-3  text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="mt-3 text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                        <li className="text-left mt-3">
                          <MDBIcon icon="check" className="px-2" />3 Dedicated
                          Designer
                        </li>
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                    </ul>
                    <h3 className="mt-2   combo-list-heading">Final Files</h3>

                    <ul className="d-flex  p-0 pricinglist">
                      <li className=" mt-3  text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="mt-3 text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                        <li className="text-left mt-3">
                          <MDBIcon icon="check" className="px-2" />3 Dedicated
                          Designer
                        </li>
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                    </ul>
                  </div>

                  <div className=" mt-3 col-md-3 p-0 col-12">
                    <h3 className="combo-list-heading">Website</h3>
                    <ul className="d-flex  p-0 pricinglist">
                      <li className=" mt-3  text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="mt-3 text-left">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                        <li className="text-left mt-3">
                          <MDBIcon icon="check" className="px-2" />3 Dedicated
                          Designer
                        </li>
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                      <li className="text-left mt-3">
                        <MDBIcon icon="check" className="px-2" />3 Dedicated
                        Designer
                      </li>
                    </ul>
                  </div>

                  <div className="last-div p-0  col-md-3 col-12">
                    <h1 className="mt-5 pt-2 text-center combo-heading-2">
                      $955.00
                    </h1>
                    <div className="mt-4 text-center">
                      <button className="  btn-1 ">
                        75% OFF <del>$3820.00</del>
                      </button>
                    </div>
                    <div className="text-center mt-4  mt-3 px-4">
                      <span className="last-div-span">
                        Click Here to{" "}
                        <MDBIcon icon="sms" className="sms px-2" size="lg" />
                      </span>
                      <p className="last-div-p">Live chat</p>
                    </div>

                    <div className="mt-4 text-center">
                      <button className=" btn-2 py-3">Let's Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-center">
              <button className=" my-5 combo-last-btn ">
                View Combo Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
