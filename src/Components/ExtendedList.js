/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "reactstrap";
import KaffiPin from "../assets/KAFFi05.svg"
import directionsImg from "../assets/Directions.svg"
import menuImg from "../assets/Menu.svg"


//
const ExtendedList = props => {
  return (
    <React.Fragment>
      <Card className="shopcard">
          <img className="dimg" alt="kaffi" src={KaffiPin} />
          <h3>{props.data.Name}</h3>
        <div className="MobileCoffeeshopList">
          <div className="CardDescription">
              <h3>
                <a
                  href={props.data.AddressLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="directions icon" src={directionsImg}height="42" width="42" />
                </a>
              </h3>
              <h3>
                <a
                  href={props.data.Menu}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img alt="menu icon" src={menuImg}height="42" width="42" />
                </a>
              </h3>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default ExtendedList;
