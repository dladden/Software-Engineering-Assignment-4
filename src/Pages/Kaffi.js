import React from "react"
import {Container, Row, Col} from "reactstrap"
import KaffiLogo from "../assets/KAFFi01.svg"

class Kaffi extends React.Component {
 
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
	<h1>What is Kaffi?</h1> 
	<Container>
	<Row>
	<Col>
	<img src={KaffiLogo} />
	</Col>
	<Col>
	<p className="p-5 ">Kaffi is a product that is in development intending to design a platform that allows coffee lovers to discover local coffee shops, interact on a new level with businesses, and share their coffee experiences. The first and main goal of Kaffi is to provide an interactive map with location pins that allow users to use an easy-to-understand interface as we aim to cultivate the discovery of new and formed coffee businesses around the world.</p>	
	</Col>
	</Row>
	</Container> 
	</div>
    )
  }
}
export default Kaffi
