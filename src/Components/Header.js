/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const Header = props => {
  return (
    <div className="Header">
      <div>
        <Container>
          <h2 className="display-3">Kaffi</h2>
          <p className="lead">
            We Love Coffee, So Do You.
          </p>
        </Container>
      </div>
    </div>
  );
};

export default Header;
