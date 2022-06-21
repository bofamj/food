import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";
import logo from "../assist/logo.png";
import home from "../assist/home.png";
import graf from "../assist/cslis.png";
import msg from "../assist/masege.png";
import noti from "../assist/notification.png";
import setting from "../assist/setteng.png";
import logout from "../assist/logout.png";
import frame from "../assist/Frame 65.png";

const NavBar = () => {
  /*<Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>*/
  return (
    <aside className="sid-nav ">
      <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center justify-content-around">
        <li className=" ">
          <img className="mt-5 p-2 logo" src={logo} />
        </li>
        <nav className="mt-5 d-flex flex-column align-items-center justify-content-between  nav">
          <li>
            <img className="mt-1 p-3 nav-icon-active" src={home} />
          </li>
          <li>
            <img className="mt-1 p-3 nav-icon color-light " src={frame} />
          </li>
          <li>
            <img className="mt-1 p-3 nav-icon color-light" src={graf} />
          </li>
          <li>
            <img className="mt-1 p-3 nav-icon color-light " src={msg} />
          </li>
          <li>
            <img className="mt-1 p-3 nav-icon color-light" src={noti} />
          </li>
          <li>
            <img className="mt-1 p-3 nav-icon color-light" src={setting} />
          </li>
          <li>
            <img className="mt-1 p-3 nav-icon color-light" src={logout} />
          </li>
        </nav>
      </ul>
    </aside>
  );
};

export default NavBar;
/*<div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
            <a
              href="/"
              className="d-block p-3 link-dark text-decoration-none"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <i className="bi-bootstrap fs-1"></i>
            </a>
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                >
                  <i className="bi-house fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Dashboard"
                >
                  <i className="bi-speedometer2 fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Orders"
                >
                  <i className="bi-table fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <i className="bi-heart fs-1"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="nav-link py-3 px-2"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <i className="bi-people fs-1"></i>
                </a>
              </li>
            </ul>
            <div className="dropdown">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi-person-circle h2"></i>
              </a>
              <ul
                className="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
              </ul>
            </div>*/
