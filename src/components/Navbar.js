import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem ,MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';


class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar   scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  };


  componentDidMount() {
    const navbar = document.querySelector('.navbar');
    const nav2 = document.querySelector('.nav2')
    window.onscroll = () => {
      if (window.scrollY > 200) {
        { navbar.classList.add('scrolly'); nav2.classList.add('navchange'); }
      } else {
        navbar.classList.remove('scrolly')
        nav2.classList.remove('navchange');

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
        <Router >
          <div className="b1  " >
           <ul className="  nav-list">
             <li><MDBIcon className="text-white" icon="phone" /><a href="#" className="text-white">+1 702 0826 554</a></li>

             <li><MDBIcon className="text-white" icon="comments" /><a href="#" className="text-white">Live Chat</a></li>
           </ul>
          </div>
          <MDBNavbar className=" navbar scroll fixed-top" dark expand="md">
            <MDBNavbarBrand >
              <div >
                <div className="b1 px-2 d-flex">
                  <div className="">
                    <img src="https://digitaloid.co/wp-content/uploads/2020/06/cropped-128-by-128-06-05.png" width="65px" height="68px" />
                  </div>
                  <div>
                    <h1 className="mt-3 font-weight-bold  footer-heading1 nav-heading-1">DIGITALOID</h1>
                  </div>
                </div>
              </div>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" className=" " isOpen={this.state.isOpen} navbar >
              <MDBNavbarNav className=" navbar-links">
                <MDBNavItem active>
                  <MDBNavLink to="" className="nav2 ">Logo</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="">
                  <MDBNavLink to="#!">Website</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Animation</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="">Digital Marketing</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="">Development</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>

                <MDBNavItem className="">
                  <MDBNavLink to="#!">Combo Packages</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!">Portfolio</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem className="">
                  <MDBNavLink to="#!">About Us</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="#!">Contact Us</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>


        <div className="container right-align">
          <div class="center-div ">
            <h1 class="font-weight-bold text-white">
              Brand Your</h1>
            <h1 class="font-weight-bold text-white">Business With Our</h1>
            <h1 class="font-weight-bold text-white">Affordable And</h1>
            <h1 class="font-weight-bold text-white">Reliable Designs</h1>


            <div class="header-buttons">
              <a href="#"> About Us</a>
              <a href="#"> Contact us</a>
            </div>
          </div>

          <div className=" center-div2 align-right">
            <img src="https://digitaloid.co/wp-content/uploads/2020/06/header-01-01.png" width="522px" height="436px" className="img-fluid img-responsive " />
          </div>
        </div>



      </div>


    );
  }
}

export default Navbar;