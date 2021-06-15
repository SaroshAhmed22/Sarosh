import React, { Component, useState } from "react";
import { MDBIcon, MDBBtn, MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdbreact";
import "./index.css";
import logo from "./logo.png";

const App = () => {
  let a = 1;
  let newTime = new Date().toLocaleTimeString();

  const [time, ctime] = useState(newTime)

  const updateTime = () => {
    let Time = new Date().toLocaleTimeString();
    console.log(Time);
    ctime(Time);
    // updateTime()
  }
  setInterval(updateTime, 1000)
  return (
    <div >
      <div className="row">
        <div className="col-md-4">
          <MDBCard color="indigo" text="white" className="text-center">
            <MDBCardBody>{time}</MDBCardBody>
          </MDBCard>
          <div className="text-center">
            <MDBBtn social="comm" onClick={updateTime}>
              <MDBIcon icon="comments" className="pr-1" /> UpdateTime
        </MDBBtn>
          </div>
        </div>

      </div>



    </div>

  )
}







export default App;
