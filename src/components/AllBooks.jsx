import React from "react";

import { Card, Container, Row, Col } from "react-bootstrap";

import libriFantasy from "../data/books/fantasy.json";
import libriHistory from "../data/books/history.json";
import libriHorror from "../data/books/horror.json";
import libriRomance from "../data/books/romance.json";
import libriScifi from "../data/books/scifi.json";

const AllBooks = () => (
  <Container className="mt-4">
    <Row>
      {booksData.map((book, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Img variant="top" src={book.cover} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.author}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;
