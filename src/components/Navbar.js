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
    const nav_item5 = document.querySelector(".nav_item5");
    const nav_item6 = document.querySelector(".nav_item6");
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
          nav_item5.classList.add("navchange");
          nav_item6.classList.add("navchange");
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
        nav_item5.classList.remove("navchange");
        nav_item6.classList.remove("navchange");
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
      <div className="  header" id="topheader">
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
          <MDBNavbar className=" navbar scroll fixed-top" dark expand="md">
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
            <MDBNavbarToggler onClick={this.toggleCollapse} className="" />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav className="  mt-3 navbar-links">
                <MDBNavItem>
                  <MDBNavLink to="" className="nav_item1 font-weight-normal">
                    Logo
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" className="nav_item2 font-weight-normal ">
                    Website
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" className="nav_item3 font-weight-normal">
                    Animation
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret className="nav_item4">
                      <span className="nav_item4 font-weight-normal">
                        Digital Marketing
                      </span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="mt-4 nav-dropdown">
                      <MDBDropdownItem href="#!" className="mt-2">
                        SEO
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="mt-2">
                        Social Media marketing
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!" className="mt-2">
                        Graphics Service
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret className="nav_item5">
                      <span className="nav_item5 font-weight-normal">
                        Development
                      </span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="mt-4 nav-dropdown">
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
                </MDBNavItem>

                <MDBNavItem className="">
                  <MDBNavLink to="#!" className="nav_item6 font-weight-normal">
                    Combo Packages
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!" className="nav_item7 font-weight-normal">
                    Portfolio
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem className="">
                  <MDBNavLink to="#!" className="nav_item8 font-weight-normal">
                    About Us
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!" className="nav_item9 font-weight-normal">
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
            {/* <h1 class="font-weight-bold text-white"></h1> */}

            <p className="text-white mt-2">
              A picture is worth a thousand words, Let your designs Speak about
              your business first.
            </p>
            <div class="header-buttons mt-3">
              <button className="nav-btn1">
                GET STARTED{" "}
                <MDBIcon icon="angle-right" className="mt-1 mr-4 float-right" />
              </button>
              <button className="nav-btn2 ml-3">CUSTOM ORDER</button>
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
