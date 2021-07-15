import React, { Component, useState } from "react";
import {
  MDBIcon,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import "./index.css";
import "./Media.css";
import Navbar from "./components/Navbar";
import Servives from "./components/Services";
import logo from "./logo.png";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import Combo from "./components/Combo";
import Onlybtn from "./components/Onlybtn";
import Innovation from "./components/Innovation";
import History from "./components/History";
import Client from "./components/Client";
import Industry from "./components/Industry";
import Footer from "./components/Footer";
import "react-image-lightbox/style.css";
import Package_pricing from "./components/Package-pricing";
// import Test from "./components/Test";]
import OurPrice from "./components/OurPrice";
import Navigation from "./components/Navigation";
import Service_B from "./components/Service_B";

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Navbar />
      <Servives />
      <Service_B />
      <Portfolio />
      <Packages />
      <Package_pricing />
      <Onlybtn />
      <Combo />
      <Innovation />
      <History />
      <Client />
      <Industry />
      <Footer />
    </div>
  );
};

export default App;
