import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import cotactdp from "../Assets/images/Asset 46.png";

export class ContactMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutToShow: true,
    };
  }
  handleChangeTab = (btn) => {
    if (btn === "About") {
      this.setState({ aboutToShow: true });
      this.setState({ reviewToShow: false });
      this.setState({ portfolioToShow: false });
      this.setState({ contactToShow: false });
      this.setState({ experienceToShow: false });
    }
  };
  render() {
    return (
      <>
        {/* Contact me */}
        <div style={{ marginTop: "7%" }}>
          <Row className="contactparent">
            <Col md={2}>
              <img src={cotactdp} className="iconendoreright" alt="not found" />
            </Col>
            <Col md={8}>
              <Row className="contactme">
                <h1>Contact me</h1>
              </Row>
              <Row>
                <Col md={4}>
                  <div className={"contactblock"}>
                    <h2>Illustration</h2>
                    <p>
                      I am very much passionate about Mobile development and
                      writing optimized code using best practices.
                    </p>

                    <span>Base price</span>
                    <h1>N45,000</h1>
                    <button className={this.state.aboutToShow ? "active" : ""}>
                      <i class="far fa-user-circle mx-1"></i>
                      Hire now
                    </button>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="contactblock">
                    <h2>Illustration</h2>
                    <p>
                      I am very much passionate about Mobile development and
                      writing optimized code using best practices.
                    </p>

                    <span>Base price</span>
                    <h1>N45,000</h1>
                    <button className={this.state.aboutToShow ? "active" : ""}>
                      <i class="far fa-user-circle mx-1"></i>
                      Hire now
                    </button>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={"contactblock"}>
                    <h2>Illustration</h2>
                    <p>
                      I am very much passionate about Mobile development and
                      writing optimized code using best practices.
                    </p>

                    <span>Base price</span>
                    <h1>N45,000</h1>
                    <button className={this.state.aboutToShow ? "active" : ""}>
                      <i class="far fa-user-circle mx-1"></i>
                      Hire now
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        {/* Contact me */}
      </>
    );
  }
}

export default ContactMe;
