import React, { Component } from 'react';
import { MDBLightbox } from 'mdbreact';

class Web extends Component {


    render() {
        return (
            <div>
                <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div>
                        <a className="uk-inline" href="https://picsum.photos/200/300" data-caption="Caption 1" />
                        <img src="https://picsum.photos/200/300" alt="" />

                    </div>

                    <div>
                        <a className="uk-inline" href="https://picsum.photos/200/300" data-caption="Caption 2 " />
                        <img src="https://picsum.photos/200/300" alt="" />

                    </div>

                    <div>
                        <a className="uk-inline" href="https://picsum.photos/200/300" data-caption="Caption 3" />
                        <img src="https://picsum.photos/200/300" alt="" />

                    </div>


                </div>




            </div>
        )

    }
}

export default Web;