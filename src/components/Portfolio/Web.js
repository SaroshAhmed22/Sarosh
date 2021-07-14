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

export default class Web extends Component {
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
      <div>
        <div>
          <div className="container   port-img-div mt-4">
            <div className="row ">
              {images.map((img) => {
                return (
                  <div className=" mt-2 text-center col-md-4 col-6 ">
                    <img
                      src={img}
                      className="img-fluid "
                      onClick={() =>
                        this.setState({ isOpen: true, photoIndex: 0 })
                      }
                    />
                  </div>
                );
              })}
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
      </div>
    );
  }
}
