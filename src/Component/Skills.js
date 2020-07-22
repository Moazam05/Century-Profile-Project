import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

export class Skills extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div>
              <h1 className="skillheading">Skills</h1>
            </div>

            <div className="footer-icon pt-4">
              <span className=" skills skills-one ">Visual Design </span>
              <span className=" skills skills-color ">Brand identity</span>
              <span className=" skills skills-two ">Visual Design </span>
              <span className=" skills skills-color">logo Design </span>
            </div>
            <div className="footer-icon pt-4">
              <span className=" skills skills-three">Adobe Photo</span>
              <span className=" skills skills-color">Graphic design</span>
              <span className=" skills demo-skills skills-four">
                Brand identity
              </span>
              <span className=" skills skills-color"> Visual Design </span>
            </div>
            <div className="footer-icon pt-4">
              <span className=" skills skills-five">Adobe Illustrator</span>
              <span className=" skills skills-color">Photoshop</span>
              <span className=" skills skills-color">
                Brand identity&guidness
              </span>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Skills;
