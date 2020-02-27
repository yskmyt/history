import React from 'react';
import Header from "./header.js"
import Footer from "./footer.js"
import  {
	Container,
	Row,
	Col,
} from "react-bootstrap"

export default class User extends React.Component {
  render() {
    return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
    );
  }
}

class Body extends React.Component {
  render() {
    return (
      <Container style={{maxWidth: "none"}}>
        <Row>
          <Col xl={3} style={{backgroundColor:"green", height:"500px"}}>
						<p>THIS IS USER</p>
				</Col>
          <Col xl={9} style={{backgroundColor:"yellow", height:"500px"}}></Col>
        </Row>
      </Container>
    );
  }
}
