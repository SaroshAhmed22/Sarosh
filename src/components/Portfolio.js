import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

const images = [
  "https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-1.jpg",
  "https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-1.png",
  "https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-2.jpg",
  "https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-2.png",
  "https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-3.jpg",
  "https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-4.jpg",
];

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className=" port-main-div">
        <h1 className="mt-4 text-center portfolio-main-heading">
          Have a Look at What We Do
        </h1>
        <h5 className="container text-center  portfolio-main-heading2">
          Have a Look at What We Do Our team consists of individuals of
          multidisciplinary talents. We were born to build inspiring and
          influential brands that deliver memorable and transformative digital
          experiences.
        </h5>

        <div className="container portfolio-all-btns">
          <span
            type="button"
            className=" mt-2 ml-3  badge badge-pill badge-primary portfolio-btn1"
          >
            Web
          </span>

          <span
            type="button"
            className=" mt-3  ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Food
          </span>

          <span
            type="button"
            className=" ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Real State
          </span>

          <span
            type="button"
            className=" mt-2 ml-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Fitness
          </span>

          <span
            type="button"
            className="ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Technology
          </span>

          <span
            type="button"
            className="ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Sports
          </span>

          <span
            type="button"
            className=" mt-2 ml-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Automative
          </span>

          <span
            type="button"
            className="ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Apparel
          </span>

          <span
            type="button"
            className="ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Social
          </span>

          <span
            type="button"
            className="mt-2 ml-3 badge badge-pill badge-primary portfolio-btn1a"
          >
            Music
          </span>

          <span
            type="button"
            className="  ml-3  badge badge-pill badge-primary portfolio-btn1a"
          >
            Game
          </span>
        </div>

        <div className="container port-img-div mt-4">
          <div className="row ">
            <div className="col-md-4 col-12  ">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-1.jpg "
                className=" "
                width="370px"
                height="370px"
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>

            <div className="col-md-4 col-12">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-1.png "
                width="370px"
                height="370px"
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>

            <div className="col-md-4 col-12">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-2.jpg "
                width="370px"
                height="370px"
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>

            <div className="col-md-4 col-12 mt-2">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-2.png "
                width="370px"
                height="370px"
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>

            <div className="col-md-4 col-12 mt-2">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-3.jpg "
                width="370px"
                height="370px"
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>

            <div className="col-md-4 col-12 mt-2">
              <img
                src="https://digitaloid.co/wp-content/uploads/2020/11/eCommerce0-4.jpg "
                width="370px"
                height="370px"
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}
