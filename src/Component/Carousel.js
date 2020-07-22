import React, { Component } from "react";

export class Carousel extends Component {
  render() {
    return (
      <>
        {/* Video Carousel */}
        <div
          id="video-carousel-example2"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#video-carousel-example2"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#video-carousel-example2" data-slide-to={1} />
            <li data-target="#video-carousel-example2" data-slide-to={2} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner" role="listbox">
            {/* First slide */}
            <div className="carousel-item active">
              {/*Mask color*/}
              <div className="view">
                {/*Video source*/}
                <video className="video-fluid" autoPlay loop muted>
                  <source
                    // src="https://mdbootstrap.com/img/video/Lines.mp4"
                    src="https://www.youtube.com/watch?v=rUWxSEwctFU"
                    type="video/mp4"
                  />
                </video>
                <div className="mask rgba-indigo-light" />
              </div>
              {/*Caption*/}
              <div className="carousel-caption">
                <div className="animated fadeInDown">
                  <h3 className="h3-responsive">Light mask</h3>
                </div>
              </div>
              {/*Caption*/}
            </div>
            {/* /.First slide */}
            {/* Second slide */}
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                {/*Video source*/}
                <video className="video-fluid" autoPlay loop muted>
                  <source
                    // src="https://mdbootstrap.com/img/video/animation-intro.mp4"
                    src="https://www.youtube.com/watch?v=rUWxSEwctFU"
                    type="video/mp4"
                  />
                </video>
                <div className="mask rgba-purple-slight" />
              </div>
              {/*Caption*/}
              <div className="carousel-caption">
                <div className="animated fadeInDown">
                  <h3 className="h3-responsive">Super light mask</h3>
                </div>
              </div>
              {/*Caption*/}
            </div>
            {/* /.Second slide */}
            {/* Third slide */}
            <div className="carousel-item">
              {/*Mask color*/}
              <div className="view">
                {/*Video source*/}
                <video className="video-fluid" autoPlay loop muted>
                  <source
                    // src="https://mdbootstrap.com/img/video/cube.mp4"
                    // src={Pixels}
                    src="https://www.youtube.com/watch?v=rUWxSEwctFU"
                    type="video/mp4"
                  />
                </video>

                <div className="mask rgba-black-strong" />
              </div>
              {/*Caption*/}
              <div className="carousel-caption">
                <div className="animated fadeInDown">
                  <h3 className="h3-responsive">Strong mask</h3>
                </div>
              </div>
              {/*Caption*/}
            </div>
            {/* /.Third slide */}
          </div>
          {/*/.Slides*/}
          {/*Controls*/}
          <a
            className="carousel-control-prev"
            href="#video-carousel-example2"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            {/* <span className="sr-only">Previous</span> */}
          </a>
          <a
            className="carousel-control-next"
            href="#video-carousel-example2"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            {/* <span className="sr-only">Next</span> */}
          </a>
        </div>
        {/* Video Carousel */}
      </>
    );
  }
}

export default Carousel;
