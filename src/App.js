/*jshint esversion: 6 */

import React, { Component } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SimpleMap from "./Components/SimpleMap";
import ListedShops from "./Components/ListedShops";
import FindMeBtn from "./Components/FindMeBtn";
import "./App.css";
import "./index.css";

const TestData = [
  {
    Name: "Sunergos Coffee",
    Location: [38.225658, -85.706511],
    Menu: "https://www.sunergoscoffee.com/",
    Hours: "6AM - 7PM",
    Lat: 38.225658,
    Lng: -85.706511,
    AddressLink: "https://goo.gl/maps/J3xCjUwzdxda1x1v6",
    Address: "1647 Norris Pl, Louisville, KY 40205",
    Price: 2,
    ImgSrc:
      
      "https://images.squarespace-cdn.com/content/v1/54c6434de4b0badc93af5fb8/1580827347231-4FP53WRDTAR4MSWRQ1I9/Sun_Logo_Transparent_Black.png?format=1500w"
  },
  {
    Name: "Fante's Coffeehouse",
    Location: [38.245487341133654, -85.70422184769998],
    Menu: "https://www.fantescoffee.com/",
    Hours: "8AM - 8PM",
    Lat: 38.245487,
    Lng: -85.704221,
    AddressLink: "https://goo.gl/maps/7P4U1xVgp2y6dT5HA",
    Address: "2501 Grinstead Dr, Louisville, KY 40206",
    Price: 3,
    ImgSrc:
      "https://cdn.shopify.com/s/files/1/2604/1616/files/20139964_343266846104632_133062440955652029_n_180x.png?v=1512186189"
  },
  {
    Name: "North Lime Coffee & Donuts",
    Location: [38.23614499331876, -85.76529384564691],
    Menu: "https://www.northlime.net/",
    Hours: "7AM - 1PM",
    Lat: 38.2361449,
    Lng: -85.765293,
    AddressLink: "https://goo.gl/maps/b6e2DR4oanZcHUASA",
    Address: "1228 S 7th St, Louisville, KY 40203",
    Price: 2,
    ImgSrc:
    "https://static.wixstatic.com/media/d1d603_98a693bdc9ad4753ac6c658bf3bb6165~mv2.png/v1/fill/w_148,h_114,al_c,q_85,usm_0.66_1.00_0.01/FULL%20COLOR%404x.webp"
  },
  
    {
    Name: "Quills Coffee",
    Location: [38.25476554010839, -85.73747718948859],
    Menu: "https://quillscoffee.com/",
    Hours: "7AM - 1PM",
    Lat: 38.254765,
    Lng: -85.737477,
    AddressLink: "https://goo.gl/maps/b6e2DR4oanZcHUASA",
    Address: "1228 S 7th St, Louisville, KY 40203",
    Price: 2,
    ImgSrc:
    "https://cdn.shopify.com/s/files/1/2554/7062/files/Brunch1_1024x1024.jpg?v=1601386162"
  }
    
    
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 38.223520,
      lng: -85.724147,
      zoom: null,
      centered: false
    };
    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: 14,
          centered: !this.state.centered
        });
      },
      error => console.log(error)
    );
  }
  
  componentDidMount(){
	if(document.querySelector(".loading")){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
   }
  }

  render() {
    return (
      <div className="App">
        <Header />
	<FindMeBtn getLocation={this.getLocation} />
        <br />
        <SimpleMap
          CurrentZoom={this.state.zoom}
          CurrentLocation={this.state}
          Data={TestData}
        />
        <b />
        <ListedShops Data={TestData} /> 
        <Footer />
      </div>
    );
  }
}

export default App;
