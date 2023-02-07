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
                style={{ height: this.props.height, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text>
                  <h1 className="text-center">{this.props.books}</h1>
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
