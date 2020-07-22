import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export class PortfolioImages extends Component {
  render() {
    var listOfItem = [];
    if (this.props.data) {
      listOfItem = this.props.data.map((item) => (
        <Col className="imagegallerycolum p-1">
          <img src={item.img} className={item.className} alt="icon" />
        </Col>
      ));
    }
    return (
      <React.Fragment>
        <Row className="imagegalleryRow">{listOfItem}</Row>
      </React.Fragment>
    );
  }
}

export default PortfolioImages;
