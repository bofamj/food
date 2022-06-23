import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import Header from "./Header";

import "../App.css";

const Home = () => {
  return (
    <Container className="   ">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
