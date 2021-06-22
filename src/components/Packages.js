import React from 'react';
import { MDBIcon, MDBBtn } from "mdbreact";
import Package_pricing from './Package-pricing'
import Pricingdata from './Pricingdata'
// console.log(Pricingdata[0])

const Packages = () => {
    return (

        <div>
            <h1 className="mt-5 text-center">Afforable Packages for Your Business</h1>
            <div className=" mt-5 text-center">
                <MDBBtn className="py-1 package-btns" >Peach</MDBBtn>
                <MDBBtn className="py-1 package-btns">Purple</MDBBtn>
                <MDBBtn className="py-1 package-btns">Blue</MDBBtn>
            </div>

            {Pricingdata.map(function (data) {
                return <Package_pricing 
                    heading1={data.heading1}                    
                    heading2={data.heading2}                    
                    firstprice={data.firstprice}
                    secondprice={data. secondprice}
                    listdata1={data.listdata1}
                    listdata2={data.listdata2}
                    listdata3={data.listdata3}
                    listdata4={data.listdata4}
                />
            })}

            {/* <Package_pricing /> */}
        </div>
    )
}

export default Packages;
