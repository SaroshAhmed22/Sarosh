import React, { Component, useState } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import "./index.css";
import Navbar from "./components/Navbar";
import Servives from "./components/Services";
import logo from "./logo.png";
import Portfolio from "./components/Portfolio";


const App = () => {

  return (
    <div>
      <Navbar />
      <Servives />
      <Portfolio />
    </div>

  )
}







export default App;
