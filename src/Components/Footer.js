/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";

const Footer = props => {
  return (
    <div>
      <Container className="footer" fluid>
        <p className=" lead">Kaffit Web Comapny. Allrights Reserved <a  className="footerLink" target="_blank" target="_top" href="https://www.kaffi.com"> <strong> Kaffi </strong> </a></p>
      </Container>
    </div>
  );
};

export default Footer;
