import { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import scifi from "../data/scifi.json";

class TableComponent extends Component {
  render() {
    return (
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {scifi.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.title}</td>
                <td>{el.price + " $"}</td>
                <td>{el.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TableComponent;
