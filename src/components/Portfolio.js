import React, { useState } from "react";
import Web from "./Portfolio/Web";
import Food from "./Portfolio/Food";
import RealState from "./Portfolio/Real_State";
import Fitness from "./Portfolio/Fitness";
// import { assertFunctionExpression } from "@babel/types";
import Tech from "./Portfolio/Tech";
import Sports from "./Portfolio/Sports";
import Automate from "./Portfolio/Automate";
import Apparel from "./Portfolio/Apparel";
import Social from "./Portfolio/Social";

// const bgchanged = () => {
//   backgroundColor: "red";
// };

const Portfolio = () => {
  // !Web Hook
  const [Webs, setWebs] = useState(<Web />);
  const WebChange = () => {
    setWebs(<Web />);
    let web = document.getElementById("web");
    web.classList.add("portbtn_ch");
  };

  // !Food Hook

  const FoodsChange = () => {
    setWebs(<Food />);
    let food = document.getElementById("food");
    food.classList.add("portbtn_ch");
  };

  // !RealState Hook
  const RealStatesChange = () => {
    setWebs(<RealState />);
  };

  // !Fitness Hook
  const Fitness_change = () => {
    setWebs(<Fitness />);
  };

  // !Tech Hook
  const Techchange = () => {
    setWebs(<Tech />);
  };

  // !Sports Hook
  const Sport_change = () => {
    setWebs(<Sports />);
  };

  // !Automate Hook
  const Automate_change = () => {
    setWebs(<Automate />);
  };

  // !Apparel Hook
  const Apparel_change = () => {
    setWebs(<Apparel />);
  };

  // !Social Hook
  const Social_change = () => {
    setWebs(<Social />);
  };

  return (
    <div>
      <div className=" port-main-div" style={{ height: "auto" }}>
        <h1 className="mt-4 text-center portfolio-main-heading">
          Have a Look at What We Do
        </h1>
        <h5 className="container text-center  portfolio-main-heading2">
          Have a Look at What We Do Our team consists of individuals of
          multidisciplinary talents. We were born to build inspiring and
          influential brands that deliver memorable and transformative digital
          experiences.
        </h5>

        <div className="container text-center portfolio-all-btns">
          <span
            id="web"
            type="button"
            onClick={WebChange}
            className=" mt-3 ml-3  badge badge-pill badge-primary portfolio-btn1"
          >
            Web
          </span>

          <span
            id="food"
            onClick={FoodsChange}
            type="button"
            className=" mt-3  ml-3  badge badge-pill  portfolio-btn1a"
          >
            Food
          </span>

          <span
            onClick={RealStatesChange}
            type="button"
            className=" ml-3 mt-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Real State
          </span>

          <span
            onClick={Fitness_change}
            type="button"
            className=" mt-3 ml-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Fitness
          </span>

          <span
            onClick={Techchange}
            type="button"
            className="ml-3 mt-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Technology
          </span>

          <span
            onClick={Sport_change}
            type="button"
            className="ml-3 mt-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Sports
          </span>

          <span
            onClick={Automate_change}
            type="button"
            className=" mt-3 ml-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Automative
          </span>

          <span
            onClick={Apparel_change}
            type="button"
            className="ml-3 mt-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Apparel
          </span>
        </div>
      </div>
      <div>{Webs}</div>
    </div>
  );
};

export default Portfolio;
