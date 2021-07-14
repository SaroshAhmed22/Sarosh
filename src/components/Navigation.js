import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation,
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

class Navigation extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }

  render() {
    const { collapsed } = this.state;

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
              color=""
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
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
                <MDBCollapse
                  id="navbarCollapse3"
                  isOpen={this.state.isOpen}
                  navbar
                >
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
                        className="nav_item2 font-weight-normal "
                      >
                        Website
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#!"
                        id="nav3"
                        className="nav_item3 font-weight-normal"
                      >
                        Animation
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="">
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret className="nav_item4">
                          <span
                            id="nav4"
                            className="nav_item4 font-weight-normal"
                          >
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
                    </MDBNavItem>

                    <MDBNavItem className="">
                      <MDBNavLink
                        to="#!"
                        id="nav6"
                        className="nav_item6 font-weight-normal"
                      >
                        Combo Packages
                      </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                      <MDBNavLink
                        to="#!"
                        id="nav7"
                        className="nav_item7 font-weight-normal"
                      >
                        Portfolio
                      </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem className="">
                      <MDBNavLink
                        to="#!"
                        id="nav8"
                        className="nav_item8 font-weight-normal"
                      >
                        About Us
                      </MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                      <MDBNavLink
                        to="#!"
                        id="nav9"
                        className="nav_item9 font-weight-normal"
                      >
                        Contact Us
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="white-text gradient" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className="d-flex justify-content-center white-text align-items-center"
          >
            <MDBRow>
              <MDBCol md="6" className="text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Brand Your Business With Our Affordable And Reliable Designs
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    A picture is worth a thousand words, Let your designs Speak
                    about your business first.
                  </h6>
                  <MDBBtn color="white">Download</MDBBtn>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Mockups/Transparent/Small/admin-new.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Navigation;
