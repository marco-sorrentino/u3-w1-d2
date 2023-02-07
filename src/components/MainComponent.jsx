import { Component } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MainComponent extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Img
                variant="top"
                src={this.props.img}
                style={{ height: this.props.height }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
