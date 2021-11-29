/*jshint esversion: 6 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoWindow from "./InfoWindow";
import { useToggle } from "@availity/hooks";

import "../index.css";

const Kaffimarker = props => {

  const [isOpen, toggleOpen] = useToggle();


  const onMarkerClick = (index) => {
    console.log("Marker Clicked");
    toggleOpen(!isOpen);
  };


  return (
    <React.Fragment >
      {isOpen && <InfoWindow content={props.result} />}
      <img
        onClick={onMarkerClick}
        className="Kaffimarker"
        content={props.result.Name}
      
        src="https://i.ibb.co/JrSwFR2/Marker.png"
      
        height="42"
        width="35"
        lat={props.Lat}
        lng={props.Lng}
        text={props.result.Name}
        alt="KaffiMarkers"
      />
    </React.Fragment>
  );
};

export default Kaffimarker;
