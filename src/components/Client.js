import React from "react";
import { MDBIcon } from "mdbreact";

const Client = () => {
  return (
    <div className=" client-main-div">
      <div className=" py-3 container mt-5">
        <h1 className="mt-5 text-center mt-5 font-weight-bold client-heading1">
          Client's Love Towards Digitaloid
        </h1>
        <p className="mt-1 text-center text-justify">
          See what our clients have to say about our service and experience with
          Digitaloid. Their words of appreciation really make a difference to
          us. Let’s take a look!
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className=" mt-2 col-md-4 col-12">
            <div className="card" style={{ height: "23.4rem" }}>
              <div className="mt-4 ml-4  client-circle">
                <img
                  className="card-img-top"
                  src="https://digitaloid.co/wp-content/uploads/2020/06/33.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <p className="mt-2 ">
                  When it comes to creating specialized, creative, and useful
                  websites, no company can surpass Digitaloid. Thanks to their
                  ability & skilled staff, our site has taken off in the search
                  engines like a rocket
                </p>
                <p className="mt-2 card-text" style={{ fontSize: "18px" }}>
                  Stephanie
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  {" "}
                  Brand Manager
                </p>

                <ul className="d-flex p-0 mt-0 client-star ">
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-2  col-md-4 col-12">
            <div className="card" style={{ height: "22.3rem" }}>
              <div className="mt-4 ml-4  client-circle">
                <img
                  className="card-img-top"
                  src="https://digitaloid.co/wp-content/uploads/2020/06/66701ab6-4fb3-459c-94eb-594082824cec.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <p className="mt-2 ">
                  We are grateful for Digitaloid competence and help through the
                  chat. I highly recommend Digitaloid for all design solutions &
                  digital marketing needs
                </p>
                <p className="mt-2 card-text" style={{ fontSize: "18px" }}>
                  Johnathan Smith
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Entrepreneur
                </p>

                <ul className="d-flex p-0 mt-0 client-star ">
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-2 col-md-4 col-12">
            <div className="card" style={{ height: "22.3rem" }}>
              <div className="mt-4 ml-4  client-circle">
                <img
                  className="card-img-top"
                  src="https://digitaloid.co/wp-content/uploads/2020/06/JPEG_20200523_131202_9080617314495702286.jpg"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <p className="mt-2 ">
                  Digitaloid have taken our business to the next level. They
                  created a beautiful website for our company with great
                  arrangements. I will surely recommend them to anyone.
                </p>
                <p className="mt-2 card-text" style={{ fontSize: "18px" }}>
                  Hernandez
                </p>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  {" "}
                  Businessperson
                </p>

                <ul className="d-flex p-0 mt-0 client-star ">
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                  <li>
                    <MDBIcon className="star" icon="star" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Client;
