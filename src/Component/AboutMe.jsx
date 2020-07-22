import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

// import Carousel from "./Carousel";
// import Portfolio from "./Portfolio";
// import Products from "./Products";
// import Skills from "./Skills";
// import StatsAndDetails from "./StatsAndDetails";
// import Audience from "./Audience";
// import WorkHistory from "./WorkHistory";
// import ContactMe from "./ContactMe";

import DpIcon from "../Assets/images/Asset 16new.png";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutToShow: true,
      portfolioToShow: false,
      experienceToShow: false,
      reviewToShow: false,
      contactToShow: false,
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
    if (btn === "Portfolio") {
      this.setState({ aboutToShow: false });
      this.setState({ reviewToShow: false });
      this.setState({ portfolioToShow: true });
      this.setState({ contactToShow: false });
      this.setState({ experienceToShow: false });
    }
    if (btn === "Experience") {
      this.setState({ aboutToShow: false });
      this.setState({ reviewToShow: false });
      this.setState({ portfolioToShow: false });
      this.setState({ contactToShow: false });
      this.setState({ experienceToShow: true });
    }
    if (btn === "Reviews") {
      this.setState({ aboutToShow: false });
      this.setState({ reviewToShow: true });
      this.setState({ portfolioToShow: false });
      this.setState({ contactToShow: false });
      this.setState({ experienceToShow: false });
    }
    if (btn === "Contact") {
      this.setState({ aboutToShow: false });
      this.setState({ reviewToShow: false });
      this.setState({ portfolioToShow: false });
      this.setState({ contactToShow: true });
      this.setState({ experienceToShow: false });
    }
  };
  render() {
    return (
      <div className="about-section bg-light-grey py-5 pl-3">
        <Container>
          <Row>
            <Navbar expand="md">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>
                    <button
                      className={this.state.aboutToShow ? "active" : ""}
                      onClick={() => this.handleChangeTab("About")}
                    >
                      About
                    </button>
                  </Nav.Link>
                  <Nav.Link>
                    <button
                      className={this.state.portfolioToShow ? "active" : ""}
                      onClick={() => this.handleChangeTab("Portfolio")}
                    >
                      Portfolio
                    </button>
                  </Nav.Link>
                  <Nav.Link>
                    <button
                      className={this.state.experienceToShow ? "active" : ""}
                      onClick={() => this.handleChangeTab("Experience")}
                    >
                      Experience
                    </button>
                  </Nav.Link>
                  <Nav.Link>
                    <button
                      className={this.state.reviewToShow ? "active" : ""}
                      onClick={() => this.handleChangeTab("Reviews")}
                    >
                      Reviews
                    </button>
                  </Nav.Link>
                  <Nav.Link>
                    <button
                      className={this.state.contactToShow ? "active" : ""}
                      onClick={() => this.handleChangeTab("Contact")}
                    >
                      Contact
                    </button>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Row>

          <Row>
            <Col md={6} className="py-4">
              <span className="first-heading">About me</span>
              <span className="second-heading">Graphic Designer</span>
              <p className="first-heading">
                Justin is a technical professional with a passion for learning
                and 15+ years of experience leading teams to build
                enterprise-grade distributed applications that solve real-world
                problems. He is a firm believer that collaboration across all
                facets of a business, from development to marketing to sales, is
                required to succeed in this endeavor.v Justin is a technical
                professional with a passion for learning and 15+ years of
                experience leading teams to build enterprise-grade distributed
                applications.
              </p>
              <div className="footer-icon pt-4" style={{ marginBottom: "5%" }}>
                <i class="fab fa-facebook fa-2x mx-2"></i>
                <i class="fab fa-twitter fa-2x mx-2"></i>
                <i class="fab fa-tiktok fa-2x mx-2"></i>
                <i class="fab fa-instagram fa-2x mx-2"></i>
                <i class="fab fa-youtube fa-2x mx-2"></i>
                <i class="fab fa-github fa-2x mx-2"></i>
              </div>
            </Col>
            <Col md={6} className="endorsesection">
              <div className="pt-5 cen">
                <div>
                  <img src={DpIcon} className="" alt="not found" />
                </div>
                <div className="endorsegrid">
                  <span className=" Endorse-heading">54+</span>
                  <span className=" endorse">Endorse</span>
                </div>
              </div>
            </Col>
          </Row>

          {/* <Carousel />

          <Portfolio />

          <Products />

          <Skills />

          <StatsAndDetails />

          <Audience />

          <WorkHistory />

          <ContactMe /> */}
        </Container>
      </div>
    );
  }
}

export default AboutMe;
