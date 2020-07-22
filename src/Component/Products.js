import React, { Component } from "react";

import { Row, Col, Navbar, Nav } from "react-bootstrap";

import ProductsImages from "./ProductsImages";
import data from "../data";

import icon from "../Assets/images/Asset 49.png";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutToShow: true,
      portfolioToShow: false,
      experienceToShow: false,
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
  };
  render() {
    return (
      <>
        <Row style={{ marginTop: "25px" }}>
          <Col xs={6} md={3}>
            <div>
              <h1 className="Products">Products</h1>
            </div>
          </Col>
          <Col xs={12} md={8} style={{ marginTop: "40px" }}>
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback" />
              <input
                type="text"
                className="form-control"
                placeholder="Click here to Refine Search"
              />
            </div>
          </Col>
        </Row>
        {/* Products */}
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
                    All
                  </button>
                </Nav.Link>
                <Nav.Link>
                  <button
                    className={this.state.portfolioToShow ? "active" : ""}
                    onClick={() => this.handleChangeTab("Portfolio")}
                  >
                    Phones
                  </button>
                </Nav.Link>
                <Nav.Link>
                  <button
                    className={this.state.experienceToShow ? "active" : ""}
                    onClick={() => this.handleChangeTab("Experience")}
                  >
                    Electroics
                  </button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <img src={icon} alt="small icon" className="img-icon" />
            <h3 className="heading">Refine Results</h3>
          </Navbar>
        </Row>
        {/* Products */}
        {/* Card */}
        <ProductsImages data={data} />
        {/* <Row className="imagegalleryRow">
          <Col className="imagegallerycolumn p-1">
            <img src={SIcon1} className="imggrid-one" alt="Image Not Found" />
            <h5>Contrary to popular belief, Lorem Ipsum is not simply</h5>
            <div>
              <button className="price button-one">N1,199</button>

              <img src={Chaticon} alt="icon" className="chaticon" />
            </div>
            <img src={SIcon4} className="salman-four" alt="Image Not Found" />
            <h5>Contrary to popular belief, Lorem Ipsum is not simply</h5>
            <div>
              <button className="price">N1,199</button>
              <img
                src={Chaticon}
                alt="icon"
                className="chaticon"
                alt="Image Not Found"
              />
            </div> */}

        {/* <img src={ppic3} className="imggrid" style={{ height: "35%" }} /> */}
        {/* </Col>

          <Col className="imagegallerycolumn p-1">
            <img src={SIcon2} className="imggrid-two kamran-two" />
            <h5>Contrary to popular belief, Lorem Ipsum is not simply</h5>
            <div>
              <button style={{ marginBottom: "60px" }} className="price">
                N1,199
              </button>
              <img
                src={Chaticon}
                alt="icon"
                className="chaticon"
                alt="Image Not Found"
              />
            </div>
            <img src={SIcon5} className="imggrid-five moazam-five" />
            <h5>Contrary to popular belief, Lorem Ipsum is not simply</h5>
            <div>
              <button className="price">N1,199</button>
              <img src={Chaticon} alt="icon" className="chaticon" />
            </div> */}

        {/* <img src={ppic3} className="imggrid" style={{ height: "30%" }} /> */}
        {/* </Col>
          <Col className="imagegallerycolumn p-1">
            <img
              src={SIcon3}
              className="imggrid-three "
              alt="Image Not Found"
            />
            <h5>Contrary to popular belief, Lorem Ipsum is not simply</h5>
            <div>
              <button className="price">N1,199</button>
              <img
                src={Chaticon}
                alt="icon"
                className="chaticon"
                alt="Image Not Found"
              />
            </div>
            <img src={ppic4} className="imggrid-six" />
            <h5>Contrary to popular belief, Lorem Ipsum is not simply</h5>
            <div>
              <button className="price">N1,199</button>
              <img
                src={Chaticon}
                alt="icon"
                className="chaticon"
                alt="Image Not Found"
              />
            </div>
            {/* <img src={ppic4} className="imggrid" style={{ height: "25%" }} /> */}
        {/* </Col> */}
        {/* </Row> */}
      </>
    );
  }
}

export default Products;
