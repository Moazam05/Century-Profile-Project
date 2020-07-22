import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import Aniche from "../Assets/images/Asset 36.png";
import Aniche2 from "../Assets/images/Asset 39.png";
import Aniche3 from "../Assets/images/Asset 37.png";
import Aniche4 from "../Assets/images/Asset 38.png";

export class Audience extends Component {
  render() {
    return (
      <>
        <Row>
          <Col className="Audience">
            <h1>Audience</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5}>
            <div className="audienceblockparent">
              <div className="audienceblock">
                <Row>
                  <Col xs={5} md={4}>
                    <div className="audienceblockinside1">
                      <img src={Aniche} className="ml-4" alt="not found" />
                      <div className=" spanclass">
                        <span>Followers</span>
                        <h2>79k</h2>
                      </div>
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="audienceblockinside">
                      <div>
                        <span className=" ">Engagment</span>
                        <h2>Average</h2>
                      </div>
                      <div>
                        <span className=" ">Niche</span>
                        <h2>Beauty, Fashion, Lifestyle</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="audienceblockparent">
              <div className="audienceblock">
                <Row>
                  <Col xs={5} md={5}>
                    <div className="audienceblockinside1">
                      <img
                        src={Aniche2}
                        className="ml-4 audienceblockinside1youtube"
                        alt="not found"
                      />
                      <div className=" spanclass">
                        <span>Followers</span>
                        <h2>79k</h2>
                      </div>
                    </div>
                  </Col>
                  <Col xs={7} md={7}>
                    <div className="audienceblockinside">
                      <div>
                        <span className=" ">Engagment</span>
                        <h2>Average</h2>
                      </div>
                      <div>
                        <span className=" ">Niche</span>
                        <h2>Beauty, Fashion, Lifestyle</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5}>
            <div className="audienceblockparent">
              <div className="audienceblock">
                <Row>
                  <Col xs={5} md={4}>
                    <div className="audienceblockinside1">
                      <img src={Aniche3} className="ml-4" alt="not found" />
                      <div className=" spanclass">
                        <span>Followers</span>
                        <h2>79k</h2>
                      </div>
                    </div>
                  </Col>
                  <Col xs={7} md={8}>
                    <div className="audienceblockinside">
                      <div>
                        <span className=" ">Engagment</span>
                        <h2>Average</h2>
                      </div>
                      <div>
                        <span className=" ">Niche</span>
                        <h2>Beauty, Fashion, Lifestyle</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="audienceblockparent">
              <div className="audienceblock">
                <Row>
                  <Col xs={5} md={5}>
                    <div className="audienceblockinside1">
                      <img src={Aniche4} className="ml-4" alt="not found" />
                      <div className=" spanclass">
                        <span>Followers</span>
                        <h2>79k</h2>
                      </div>
                    </div>
                  </Col>
                  <Col xs={7} md={7}>
                    <div className="audienceblockinside">
                      <div>
                        <span className=" ">Engagment</span>
                        <h2>Average</h2>
                      </div>
                      <div>
                        <span className=" ">Niche</span>
                        <h2>Beauty, Fashion, Lifestyle</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="audienceblockparent">
              <div className="audienceblock">
                <Row>
                  <Col xs={5} md={5}>
                    <div className="audienceblockinside1">
                      <i class="fab fa-twitter twittericon"></i>
                      <div className=" spanclass">
                        <span>Followers</span>
                        <h2>79k</h2>
                      </div>
                    </div>
                  </Col>
                  <Col xs={7} md={7}>
                    <div className="audienceblockinside">
                      <div>
                        <span className=" ">Engagment</span>
                        <h2>Average</h2>
                      </div>
                      <div>
                        <span className=" ">Niche</span>
                        <h2>Beauty, Fashion, Lifestyle</h2>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Audience;
