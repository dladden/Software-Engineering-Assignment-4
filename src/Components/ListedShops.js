/*jshint esversion: 6 */

import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ExtendedList from "./ExtendedList";
import React from "react";

import "../index.css";

const ListedShops = props => {
  return (
    <Container >
      <h4>
        <b> <span role="img" aria-labelledby="shop"> 
        Coffee Shops Near You: 
       </span></b>
      </h4>
      <div className="ShopList">
        {props.Data.map((result, index) => (
          <ExtendedList data={result} key={index}/>
        ))}
      </div>
    </Container>
  );
};

export default ListedShops;
