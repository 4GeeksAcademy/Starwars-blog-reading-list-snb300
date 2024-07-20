import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center">
            Star Wars Databank &copy; {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
