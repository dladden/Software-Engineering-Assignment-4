import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import GoogleMapReact from "google-map-react";
import Kaffimarker from "./KaffiMarker";

import "../index.css";

const API_KEY = "AIzaSyAXNlN_z7oZo7sYR4z5Y0yQZ3_Pvj3z6kM";

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  static defaultProps = {
    center: {
      lat: 30.237247,
      lng: -81.519488
    },
    zoom: 11
  };

  onMarkerClick = () => {
    console.log("Marker Clicked");
    this.setState({
      show: !this.state.show
    });
    console.log(this.state.show);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="container Map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={this.props.CurrentLocation || this.props.center}
          zoom={this.props.CurrentZoom || this.props.zoom}
        >
          <img
            src="https://i.ibb.co/9bPdJGH/Me-Marker01.png"
            alt="youarehereicon"
            lat={
              this.props.CurrentLocation.centered
                ? this.props.CurrentLocation.lat
                : null
            }
            lng={
              this.props.CurrentLocation.centered
                ? this.props.CurrentLocation.lng
                : null
            }
            height="60"
            width="60"
          />
          {this.props.Data.map((result, index) => (
            <Kaffimarker
              key={index}
              index={index}
              show={this.state.show}
              onMarkerClick={this.onMarkerClick}
              result={result}
              lat={result.Lat}
              lng={result.Lng}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
