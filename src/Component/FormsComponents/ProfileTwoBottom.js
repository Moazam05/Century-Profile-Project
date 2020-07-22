import React, { Component } from "react";

import "./ProfileTwoBottom.scss";

import { Container, Row, Col, Form } from "react-bootstrap";
import LanguageIcon from "@material-ui/icons/Language";

export class ProfileTwoBottom extends Component {
  render() {
    return (
      <>
        <Container fluid className="profile-row">
          <p className="prefered">Prefered username</p>
          <div className="d-flex flex-row">
            <p className="muwao">Muwano.com/</p>
            <Form.Control size="sm" className="ml-3 small" />
          </div>

          <div>
            <Row>
              <h5 className="headingFiveProfile mt-5">
                Link to Social Accounts
              </h5>
            </Row>
            <Row className="mt-3">
              {/* First Column */}
              <Col className="d-flex flex-row col-3 first">
                <div className="ml-5">
                  <LanguageIcon />
                </div>
                <div
                  className="ml-2 w-100 .flex-sm-column
"
                >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Insert Url"
                  />
                </div>
              </Col>
              <Col className="d-flex flex-row col-3 tikTok">
                <div>
                  <i class="fab fa-tiktok"></i>
                </div>
                <div
                  className="ml-2 w-100 .flex-sm-column
"
                >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Insert Url"
                  />
                </div>
              </Col>
            </Row>

            {/* Second Row Start */}
            <Row className="mt-3">
              <Col className="d-flex flex-row col-3 first">
                <div className="ml-5">
                  <i class="fab fa-facebook"></i>
                </div>
                <div
                  className="ml-2 w-100 .flex-sm-column
"
                >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Insert Url"
                  />
                </div>
              </Col>
              <Col className="d-flex flex-row col-3 tikTok">
                <div className="">
                  <i class="fab fa-instagram"></i>
                </div>
                <div
                  className="ml-2 w-100 .flex-sm-column
"
                >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Insert Url"
                  />
                </div>
              </Col>
            </Row>

            {/* Second Row End */}

            {/* Third Row Start */}
            <Row className="mt-3">
              <Col className="d-flex flex-row col-3 first">
                <div className="ml-5">
                  <i class="fab fa-github"></i>
                </div>
                <div
                  className="ml-2 w-100 .flex-sm-column
"
                >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Insert Url"
                  />
                </div>
              </Col>
              <Col className="d-flex flex-row col-3 tikTok">
                <div className="">
                  <i class="fab fa-youtube"></i>
                </div>
                <div
                  className="ml-2 w-100 .flex-sm-column
"
                >
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Insert Url"
                  />
                </div>
              </Col>
            </Row>

            {/* Third Row End */}
          </div>
        </Container>
      </>
    );
  }
}

export default ProfileTwoBottom;
