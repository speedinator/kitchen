import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Book from "./components/Book"


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
          <Route path="/Book" element={<Book test={"<p>test</p>"}>
            <p>test</p>
            </Book>} />
      </Routes>
    </div>
  );
}

export default App;
