import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";
import "../Assets/css/Responsive.scss";

export class ProductsImages extends Component {
  render() {
    var listOfData = [];
    if (this.props.data) {
      listOfData = this.props.data.map((item) => (
        <Col className="imagegallerycolum p-1">
          <img src={item.img} className={item.className} alt="icon" />

          <h5
            className="hwl"
            // style={{
            //   marginTop: "7%",
            //   fontFamily: "gilroy-bold",
            //   fontSize: "1.25rem",
            // }}
          >
            {item.text}
          </h5>
          <div>
            <button
              className="btn"
              style={{
                borderColor: "black",
                color: "#666666",
              }}
            >
              N1,199
            </button>
            <img src={item.Chaticon} alt="icon" className={item.iconClass} />
          </div>
        </Col>
      ));
    }
    return (
      <div className="ProductImages">
        <Row className="imagegalleryRow">{listOfData}</Row>
      </div>
    );
  }
}

export default ProductsImages;
