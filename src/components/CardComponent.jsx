import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import scifi from "../data/scifi.json";

class CardComponent extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          {scifi.map((el, index) => (
            <Col
              md={6}
              lg={3}
              className="mt-5 p-0 d-flex justify-content-center"
              key={index}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={el.img}
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{el.title}</Card.Title>
                  <Card.Text>{el.price + " $"}</Card.Text>
                  <Button variant="primary">{el.category}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default CardComponent;
