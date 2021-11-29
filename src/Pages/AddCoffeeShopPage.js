import React from 'react'
import "../index.css"
import {Form, Input, Container, Button, Label} from 'reactstrap'
import DateTimePicker  from 'react-datetime-picker';

class AddCoffeeShopPage extends React.Component {
constructor(props) {
  super(props);
  this.state = {date: new Date()};
}


onChange = date => this.setState({ date })
  componentDidMount(){
	if(document.querySelector(".loading")){
    setTimeout(() => {
      document.querySelector(".loading").outerHTML = "";
    }, 1500);
   }
  }

  render() {
    return (
	<div>
	<h1>Create Your Kaffi Account</h1>
	<Container className="px-5 py-5">
	<Form className="justify-content-center" >
      <Label> Coffee Shop Name </Label>
      <Input type="text" id="Input-name" />
      <Label> Email Address </Label>
	    <Input type="email" id="Input-address" placeholder=''/>
	    
      <Label > Website </Label>
	    <Input className="my-2" type="text" id="Input-website" placeholder="(Optional)"/>
	 <Button type="submit" value="Submit" id="Input-submit">Submit</Button>
	</Form>
	</Container>
	</div>
)
  }
}
export default AddCoffeeShopPage;
