import React, { Component } from "react";

import { Row, Col } from "react-bootstrap";

import Endo2 from "../Assets/images/Asset 40.png";
import icon from "../Assets/images/Asset 14.png";
import Endo3 from "../Assets/images/Asset 42.png";
import Endoicon from "../Assets/images/Asset 44.png";
import Endoiconright from "../Assets/images/righticon.PNG";
import Endo from "../Assets/images/Asset 41.png";

export class WorkHistory extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div className="WorkHistory">
              <h1>Work History</h1>
            </div>
            <div className="WorkHistoryh1">
              <h1>Managing Partner</h1>
              <p>Endgame. The Strategy Company</p>
              <p>Jan 2018 – Present - 1 yr 8 mos</p>
              <div>
                <img src={icon} className="" alt="not found" />
                <span className="lst-span">Gwarinpa, Abuja, Nigeria</span>
              </div>
              <p className="workhistoryp">
                Also very proud of the fact that some of the application
                developed by me are used in very large scale. Also very proud of
                the fact that some of the application developed by me are used
                in very large scale.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="slideunderhistoru"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="WorkHistoryh1">
              <h1>Chief of Projects</h1>
              <p>Xhori Construct</p>
              <p>Jan 2018 – Present - 1 yr 8 mos</p>
              <div>
                <img src={icon} className="" alt="not found" />
                <span className="lst-span">Gwarinpa, Abuja, Nigeria</span>
              </div>
              <p className="workhistoryp">
                Also very proud of the fact that some of the application
                developed by me are used in very large scale. developed by me
                are used in very large scale. Also very proud of the fact that
                some of the application
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="WorkHistory">
              <h1>Education</h1>
            </div>
            <div className="WorkHistoryh1">
              <h1>Mathematics Bsc. Ed</h1>
              <p>New York Film Academy</p>
              <p>Jan 2018 – Present - 1 yr 8 mos</p>

              <p className="workhistoryp">
                Also very proud of the fact that some of the application
                developed by me are used in very large scale. Also very proud of
                the fact that some of the application developed by me are used
                in very large scale.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="slideunderhistoru"></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="WorkHistoryh1">
              <h1>Certificate 3dAnimation</h1>
              <p>Gnom School of Visual effects</p>
              <p>Jan 2018 – Present - 1 yr 8 mos</p>

              <p className="workhistoryp">
                Also very proud of the fact that some of the application
                developed by me are used in very large scale. Also very proud of
                the fact that some of the application developed by me are used
                in very large scale.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={8} className="Endorsmentswidth">
            <div className="WorkHistory">
              <h1>Endorsments</h1>
            </div>
            <div className="Endorsmentsparent">
              <Row>
                <Col xs={5} md={4}>
                  <img src={Endo} className="" alt="not found" />
                </Col>
                <Col xs={7} md={8}>
                  <div className="WorkHistoryh1">
                    <h1>Adaeze Peters</h1>
                    <p>Managing Partner, Endgame. The Strategy Company.</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="endorsedetails">
              <h1>Effcient Gets the Job Done</h1>
              <img src={Endo2} className="" alt="not found" />
              <span>4.94</span>
            </div>
            <div>
              <p>
                Such a wonderful and kind person. She’s fast and gets the job
                done! I highly recommend her! She was very professional and
                personable. Anita found a buyer for my house and we closed in
                two weeks!
              </p>
            </div>
            <div className="endorsmentimages">
              <img src={Endoicon} className="iconendore" alt="not found" />
              <img src={Endo3} className="endoriconimages" alt="not found" />
              <img src={Endo} className="endoriconimages" alt="not found" />
              <img src={Endo} className="endoriconimages" alt="not found" />
              <img src={Endo} className="endoriconimagess" alt="not found" />
              <img src={Endo} className="endoriconimagess" alt="not found" />

              <h1>View all</h1>
              <img
                src={Endoiconright}
                className="iconendoreright"
                alt="not found"
              />
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default WorkHistory;
