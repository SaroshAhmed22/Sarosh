import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

const images = [
  "https://digitaloid.co/wp-content/uploads/2020/06/Automotive-1.jpg",
  "https://digitaloid.co/wp-content/uploads/2020/06/Automotive-2.jpg",
  "https://digitaloid.co/wp-content/uploads/2020/06/Automotive-3.jpg",
  "https://digitaloid.co/wp-content/uploads/2020/06/Automotive-1.png",
  "https://digitaloid.co/wp-content/uploads/2020/06/Automotive-2.png",
  "https://digitaloid.co/wp-content/uploads/2020/06/Automotive-3.png",
];

export default class Automate extends Component {
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
              {images.map((img, index) => {
                return (
                  <div className=" mt-2 text-center col-md-4 col-12  ">
                    <img
                      key={index}
                      src={img}
                      className="img-fluid "
                      width="370px"
                      height="370px"
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
