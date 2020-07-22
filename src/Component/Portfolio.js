import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import PortfolioImages from "./PortfolioImages";
import data from "../data";

export class Portfolio extends Component {
  // componentDidMount() {
  //   debugger;
  // }
  render() {
    return (
      <>
        <Row>
          <Col md={6}>
            <div>
              <h1 className="Portfolio">Portfolio</h1>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>

        <PortfolioImages data={data} />
        {/* <Row className="imagegalleryRow"> */}
        {/* <Col className="imagegallerycolum p-1"> */}
        {/* <img src={data[0].img} className={data[0].className} alt="icon" /> */}
        {/* <img src={data[1].img} className={data[1].className} alt="icon" /> */}
        {/* <img src={ppic3} className="imggrid" />  */}
        {/* </Col> */}
        {/* <Col className="imagegallerycolumn p-1"> */}
        {/* <img src={data[2].img} className={data[2].className} alt="icon" /> */}
        {/* <img src={data[3].img} className={data[3].className} alt="icon" /> */}
        {/* <img src={ppic3} className="imggrid" />  */}
        {/* </Col> */}
        {/* <Col className="imagegallerycolumn p-1"> */}
        {/* <img src={data[4].img} className={data[4].className} alt="icon" /> */}
        {/* <img src={data[5].img} className={data[5].className} alt="icon" /> */}
        {/* <img src={ppic4} className="imggrid" />  */}
        {/* </Col> */}
        {/* </Row> */}
      </>
    );
  }
}

export default Portfolio;
