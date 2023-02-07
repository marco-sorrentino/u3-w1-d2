import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class FooterComponent extends Component {
  state = {
    firstStateValue: 345,
    selectedPasta: null,
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={3} className="text-start">
            <p>Home</p>
            <p>About</p>
            <p>Browse</p>
          </Col>
          <Col xs={12} md={3} className="text-center">
            <p>Home</p>
            <p>About</p>
            <p>Browse</p>
          </Col>
          <Col xs={12} md={3} className="text-end">
            <p>Home</p>
            <p>About</p>
            <p>Browse</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FooterComponent;
