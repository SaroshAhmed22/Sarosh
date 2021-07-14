import React from "react";
import { MDBIcon, MDBBtn } from "mdbreact";

const Service_B = () => {
  return (
    <div>
      <div className="  container-fluid service-sec3">
        <div className="">
          <div className=" row">
            <div className=" col-md-6 service-sec3a col-12 mt-5">
              <div className="service-sec3ah4 ml-5 px-5">
                <h4 className="  text-white mt-2 font-weight-bold">
                  Make Your First Move
                </h4>
                <h1 className="font-weight-bold  text-white ">
                  Share Your Idea With Us
                </h1>
                <h5 className="text-center  text-white mb-5">
                  Contact our experts NOW to begin crafting your project.
                </h5>
              </div>
            </div>

            <div className="mt-5   col-md-6 service-sec3b col-12 d-flex text-center">
              <div>
                <MDBBtn className="w-100  text-white  btn-rounded2     deep-orange font-weight-bold">
                  <MDBIcon className="mr-3" icon="boxes" size="lg" />
                  <span className="">Select Package</span>
                </MDBBtn>
                <div className="mt-3 ">
                  <MDBIcon className="px-1 text-white" icon="phone" size="lg" />
                  <span className=" text-white ">
                    Contact Number : +1 702 805 0826
                  </span>
                </div>
              </div>

              {/* s */}
              <div>
                <MDBBtn className="w-100  text-white  btn-rounded2 service-2btn   deep-orange font-weight-bold">
                  <MDBIcon className="mr-3" icon="edit" size="lg" />
                  <span className="">REQUEST A QUOTE</span>
                </MDBBtn>
                <div className="mt-3 mr-5 ">
                  <MDBIcon
                    className="px-4 text-white"
                    icon="comments"
                    size="lg"
                  />
                  <span className=" text-white ">Start Live Chat With Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service_B;
