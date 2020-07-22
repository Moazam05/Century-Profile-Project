import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

export class StatsAndDetails extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <div>
                <h1 className="skillheading">Stats & Details</h1>
              </div>

              <div className="Statecol pt-4">
                <div>
                  <h1 className="ml-4  ">Genre</h1>
                </div>
                <div>
                  <span className="ml-4  ">
                    Comedy, Thriller, Scifi, Drama.
                  </span>
                </div>
                <div className="Language">
                  <h1 className="ml-4  ">Language</h1>
                </div>
                <div>
                  <span className="ml-4  ">
                    English - Fluent, Igbo - Fluent, Hausa - Basic
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <div>
            <Row className="statesecond">
              <Col xs={4} md={2} className="colstate">
                <div className="Statediv ">
                  <div className="Language">
                    <h1 className="">Ethnicity</h1>
                  </div>
                  <div>
                    <span className="">Igbo</span>
                  </div>
                </div>
              </Col>
              <Col xs={4} md={2} className="colstate">
                <div className="Statediv ">
                  <div className="Language">
                    <h1 className="">Skin Color</h1>
                  </div>
                  <div>
                    <span className=" ">Black</span>
                  </div>
                </div>
              </Col>
              <Col xs={4} md={2} className="colstate">
                <div className="Statediv ">
                  <div className="Language">
                    <h1 className="">Eye Color</h1>
                  </div>
                  <div>
                    <span className=" ">Brown</span>
                  </div>
                </div>
              </Col>
              <Col xs={4} md={2} className="colstate">
                <div className="Statediv ">
                  <div className="Language">
                    <h1 className="">Hair Length</h1>
                  </div>
                  <div>
                    <span className=" ">n/a</span>
                  </div>
                </div>
              </Col>
              <Col xs={1} md={3} className="noshow"></Col>
              <Col xs={4} md={2} className="colstate">
                <div className="Statediv ">
                  <div className="Language">
                    <h1 className=" ">Piercings</h1>
                  </div>
                  <div>
                    <span className=" ">Yes</span>
                  </div>
                </div>
              </Col>
              <Col xs={4} md={2} className="colstate">
                <div className="Statediv ">
                  <div className="Language">
                    <h1 className=" ">Tattoos</h1>
                  </div>
                  <div>
                    <span className=" ">None</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="statesecond">
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className="">Age</h1>
                </div>
                <div>
                  <span className="">48</span>
                </div>
              </div>
            </Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className="">Height</h1>
                </div>
                <div>
                  <span className=" ">5' 2"</span>
                </div>
              </div>
            </Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className="">Weight</h1>
                </div>
                <div>
                  <span className=" ">0 lbs</span>
                </div>
              </div>
            </Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className="">Bust</h1>
                </div>
                <div>
                  <span className=" ">38"</span>
                </div>
              </div>
            </Col>

            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className=" ">Waist</h1>
                </div>
                <div>
                  <span className=" ">38"</span>
                </div>
              </div>
            </Col>
            <Col md={2} className="noshow"></Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className=" ">Hips</h1>
                </div>
                <div>
                  <span className=" ">38"</span>
                </div>
              </div>
            </Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className=" ">Cup</h1>
                </div>
                <div>
                  <span className=" ">38"</span>
                </div>
              </div>
            </Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className=" ">Dress</h1>
                </div>
                <div>
                  <span className=" ">38"</span>
                </div>
              </div>
            </Col>
            <Col xs={4} md={2} className="colstate">
              <div className="Statediv ">
                <div className="Language">
                  <h1 className=" ">Shoe</h1>
                </div>
                <div>
                  <span className=" ">38"</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default StatsAndDetails;
