import React, { Component, useState } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import "./index.css";
import Navbar from "./components/Navbar";
import Servives from "./components/Services";
import logo from "./logo.png";
import Portfolio from "./components/Portfolio";
import Packages from './components/Packages'
import Test from './components/Test'
import Combo from './components/Combo'
import Onlybtn from './components/Onlybtn'
import Innovation from './components/Innovation'


const App = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Servives />
      <Portfolio />
      <Packages />
      <Onlybtn />
      <Test />
      <Combo />
      <Innovation />
    </React.Fragment>

  )
}







export default App;
