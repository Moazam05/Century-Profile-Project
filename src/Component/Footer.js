import React, { Component } from "react";

import "./Footer.scss";

import { Card } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="mt-5">
          <Card>
            <Card.Body>
              <ul id="menu">
                <li className="footerPortion">muwano</li>
                <li className="list">© 2020</li>
                <li className="ml-5">About</li>
                <li className="ml-2">Accessibility</li>
                <li className="ml-2">User Agreement</li>
                <li className="ml-2">Privacy Policy</li>
                <li className="ml-2">Code Policy</li>
                <li className="ml-2">Copyright Policy</li>
                <li className="ml-2">Brand Policy</li>
                <li className="ml-2">Guest Controls</li>
                <li className="ml-2">Guest Controls</li>
                <li className="ml-2">Community Guidelines</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Footer;
