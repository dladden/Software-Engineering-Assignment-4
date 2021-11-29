/*jshint esversion: 6 */

import React, { Component } from "react";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class FindMeBtn extends Component {
  render(props) {
    return (
      <Container>
        <Button color="secondary" 
        onClick={this.props.getLocation}>
          <h3>Find Me</h3>
        </Button> 
      </Container>
    );
  }
}
