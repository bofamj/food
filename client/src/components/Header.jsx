import React from "react";
import { Container, Col, Row, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineSearch } from "react-bootstrap-icons";
//

/*d-flex flex-column fluid */
/*d-flex flex-wrap align-items-center justify-content-around */
/*d-flex justify-content-end */
const Header = () => {
  return (
    <Container className="mt-5 text-light ">
      <Row className=" align-items-center ">
        <Col className="d-flex flex-wrap">
          <h1>Jaegar Resto</h1>
        </Col>
        <Col className="">
          <FormControl
            type="search"
            placeholder="This is Placeholder"
            className="me-2 serch bg-transparent"
            aria-label="Search"
          />
        </Col>
      </Row>
      <Row className="fluid  mt-5 w-75 ">
        <Col>
          <ul className="list-unstyled align-items-center d-flex justify-content-between bg-dangerous header-list  ">
            <li>Hot Dishes</li>
            <li>Cold Dishes</li>
            <li>Soup</li>
            <li>Grill</li>
            <li>Appetizer</li>
            <li>Dessert</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
