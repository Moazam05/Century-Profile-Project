import React, { Component } from "react";

import "./UploadBottom.scss";

import { Container, Row, Col } from "react-bootstrap";

import link from "../../Assets/images/link.png";

export class UploadBottom extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col>
              <div className="card cardStyle"></div>
            </Col>
            <Col>
              <div className="card cardTwo">
                <div className="card-body">
                  <h5 className="card-title">Upload a Profile Picture</h5>

                  <div className="mt-5 boxImage">
                    <img
                      src={link}
                      alt="image not found"
                      className="pl-5  imgLink"
                    />
                    <span>Clinck here to upload profile Image</span>
                  </div>
                </div>
              </div>
              <button className="buttonDiscard">Discard</button>
              <button className="buttonNext">Save</button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default UploadBottom;
