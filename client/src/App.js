import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <section className="home d-flex flex-column ">
      <div>
        <NavBar />
      </div>
      <Container className="col-10">
        <Home />
      </Container>
    </section>
  );
}

export default App;
