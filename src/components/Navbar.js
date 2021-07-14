import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  change_mg = () => {
    let changemg = document.getElementById("changemg");
    changemg.style.height = "auto";
  };

  change_mg2 = () => {
    // console.log("Clicked");
    let nav6 = document.getElementById("nav6");
    nav6.style.marginTop = "auto";
  };

  change_tg = () => {
    console.log("CLicked");
    let tg_changed = document.getElementById("tg_changed");
    // console.log(tg_changed);
    tg_changed.style.backgroundColor = "white";
    tg_changed.style.maxWidth = "100%";
    tg_changed.style.borderRadius = "10px";
    let nav1 = document.getElementById("nav1");
    nav1.style.color = " rgb(1, 22, 69)";

    let nav2 = document.getElementById("nav2");
    nav2.style.color = " rgb(1, 22, 69)";

    let nav3 = document.getElementById("nav3");
    nav3.style.color = " rgb(1, 22, 69)";

    let nav4 = document.getElementById("nav4");
    nav4.style.color = " rgb(1, 22, 69)";

    // let nav5 = document.getElementById("nav5");
    // nav5.style.color = " rgb(1, 22, 69)";

    // let nav6 = document.getElementById("nav6");
    // nav6.style.color = " rgb(1, 22, 69)";

    let nav7 = document.getElementById("nav7");
    nav7.style.color = " rgb(1, 22, 69)";

    let nav8 = document.getElementById("nav8");
    nav8.style.color = " rgb(1, 22, 69)";

    let nav9 = document.getElementById("nav9");
    nav9.style.color = " rgb(1, 22, 69)";
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (window.scrollY > 20) {
  //     document.querySelector(".navbar").className = "navbar   scroll";
  //   } else {
  //     document.querySelector(".navbar").className = "navbar";
  //   }
  // };

  componentDidMount() {
    const navbar = document.querySelector(".navbar");
    const nav_item1 = document.querySelector(".nav_item1");
    const nav_item2 = document.querySelector(".nav_item2");
    const nav_item3 = document.querySelector(".nav_item3");
    const nav_item4 = document.querySelector(".nav_item4");
    // const nav_item5 = document.querySelector(".nav_item5");
    // const nav_item6 = document.querySelector(".nav_item6");
    const nav_item7 = document.querySelector(".nav_item7");
    const nav_item8 = document.querySelector(".nav_item8");
    const nav_item9 = document.querySelector(".nav_item9");
    const nav_heading_changed = document.querySelector(".nav_heading_changed");

    window.onscroll = () => {
      if (window.scrollY > 200) {
        {
          navbar.classList.add("scrolly");
          nav_item1.classList.add("navchange");
          nav_item2.classList.add("navchange");
          nav_item3.classList.add("navchange");
          nav_item4.classList.add("navchange");
          // nav_item5.classList.add("navchange");
          // nav_item6.classList.add("navchange");
          nav_item7.classList.add("navchange");
          nav_item8.classList.add("navchange");
          nav_item9.classList.add("navchange");
          nav_heading_changed.classList.add("nav_heading_changing");
        }
      } else {
        navbar.classList.remove("scrolly");
        nav_item1.classList.remove("navchange");
        nav_item2.classList.remove("navchange");
        nav_item3.classList.remove("navchange");
        nav_item4.classList.remove("navchange");
        // nav_item5.classList.remove("navchange");
        // nav_item6.classList.remove("navchange");
        nav_item7.classList.remove("navchange");
        nav_item8.classList.remove("navchange");
        nav_item9.classList.remove("navchange");
        nav_heading_changed.classList.remove("nav_heading_changing");
      }
    };

    // const nav2 = document.querySelector('.nav2');
    // window.onscroll = () => {
    //   if (window.scrollY > 200) {

    //     nav2.classList.add('navchange');
    //   } else {
    //     nav2.classList.remove('navchange');
    //   }

    // };
  }

  render() {
    return (
      <div className=" header" id="topheader">
        <Router>
          <div className="  ">
            <ul className=" mt-2 d-flex float-right  nav-list">
              <li className="mr-3 nav-list-item1 px-5">
                <MDBIcon className="text-white" icon="phone" />
                <a href="#" className="text-white ml-2">
                  +1 702 0826 554
                </a>
              </li>
              <li className="mr-3 px-5 ">
                <MDBIcon className="text-white" icon="comments" />
                <a href="#" className="ml-2  text-white">
                  Live Chat
                </a>
              </li>
            </ul>
          </div>
          <MDBNavbar className="navbar scroll fixed-top" dark expand="md">
            <MDBNavbarBrand>
              <div>
                <div className=" px-2 d-flex">
                  <div className="">
                    <img
                      src="https://digitaloid.co/wp-content/uploads/2020/06/cropped-128-by-128-06-05.png"
                      width="65px"
                      height="68px"
                    />
                  </div>
                  <div>
                    <h1 className="mt-3 font-weight-bold   nav-heading-1 nav_heading_changed">
                      DIGITALOID
                    </h1>
                  </div>
                </div>
              </div>
            </MDBNavbarBrand>
            <div onClick={this.change_tg}>
              <MDBNavbarToggler
                onClick={this.toggleCollapse}
                className="tchange "
              />
            </div>
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav className=" mt-3 navbar-links" id="tg_changed">
                <MDBNavItem>
                  <MDBNavLink
                    to=""
                    id="nav1"
                    className="nav_item1 font-weight-normal text-center"
                  >
                    Logo
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#!"
                    id="nav2"
                    className="text-center  nav_item2 font-weight-normal "
                  >
                    Website
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#!"
                    id="nav3"
                    className="text-center nav_item3 font-weight-normal"
                  >
                    Animation
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="">
                  <MDBDropdown>
                    <MDBDropdownToggle nav className="nav_item4 text-center">
                      <span
                        id="nav4"
                        className="nav_item4 font-weight-normal text-center"
                      >
                        Digital Marketing
                      </span>
                    </MDBDropdownToggle>
                    {/* <MDBDropdownMenu className="mt-4 nav-dropdown">
                      <MDBDropdownItem href="#!" className="mt-2">
                        SEO
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="mt-2">
                        Social Media marketing
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="mt-2">
                        Graphics Service
                      </MDBDropdownItem>
                    </MDBDropdownMenu> */}
                  </MDBDropdown>
                </MDBNavItem>

                {/* <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle
                      nav
                      caret
                      id="nav5"
                      className="nav_item5"
                    >
                      <span
                        className="nav_item5 font-weight-normal"
                        onClick={this.change_mg}
                        onDoubleClick={this.change_mg2}
                      >
                        Development
                      </span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      className=" mt-4 nav-dropdown"
                      id="changemg"
                    >
                      <MDBDropdownItem href="#!" className="mt-2">
                        E commerce
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="mt-2">
                        Web portal
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="mt-2">
                        Mobile app
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem> */}

                {/* <MDBNavItem className="">
                  <MDBNavLink
                    to="#!"
                    id="nav6"
                    className="nav_item6 font-weight-normal"
                  >
                    Combo Packages
                  </MDBNavLink>
                </MDBNavItem> */}

                <MDBNavItem>
                  <MDBNavLink
                    to="#!"
                    id="nav7"
                    className="nav_item7 text-center font-weight-normal"
                  >
                    Portfolio
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem className="">
                  <MDBNavLink
                    to="#!"
                    id="nav8"
                    className="nav_item8 text-center font-weight-normal"
                  >
                    About Us
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink
                    to="#!"
                    id="nav9"
                    className="nav_item9 text-center font-weight-normal"
                  >
                    Contact Us
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>

        <div className="container ">
          <div class="  nav-heading center-div ">
            <h1 class="font-weight-bold text-white">
              Brand Your Business With Our Affordable And Reliable Designs
            </h1>
            <p className="text-white mt-2">
              A picture is worth a thousand words, Let your designs Speak about
              your business first.
            </p>
            <div class="header-buttons mt-3 ">
              <button className="nav-btn1 text-center">
                GET STARTED
                <MDBIcon icon="angle-right" className="mt-1 mr-4 float-right" />
              </button>
              <button className="nav-btn2 text-center ">CUSTOM ORDER</button>
            </div>
          </div>
          <div className="">
            <div className="  center-div2 align-right">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/06/header-01-01.png"
                width="522px"
                height="436px"
                className="img-fluid img-responsive "
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
