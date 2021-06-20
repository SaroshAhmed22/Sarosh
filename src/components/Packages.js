import React from 'react';
import { MDBIcon, MDBBtn } from "mdbreact";
import Package_pricing from './Package-pricing'

const Packages = () => {
    return (
        <div>
            <h1 className="mt-5 text-center">Afforable Packages for Your Business</h1>
            <div className=" mt-5 text-center">
                <MDBBtn className="py-1 package-btns" >Peach</MDBBtn>
                <MDBBtn className="py-1 package-btns">Purple</MDBBtn>
                <MDBBtn className="py-1 package-btns">Blue</MDBBtn>
            </div>
            <Package_pricing  />
        </div>
    )
}

export default Packages;
