import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"


import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      {/* <h1> Hello World</h1> */}
      <NavBar />
      {/* <Carousel /> */}
      {/* <Home /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carousel" element={<Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
