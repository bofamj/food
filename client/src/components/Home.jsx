import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Header from "./Header";

import "../App.css";

const Home = () => {
  return (
    <div className="home d-flex  ">
      <div>
        <NavBar />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Home;
