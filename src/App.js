import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Book from "./components/Book"

import Details from "./components/Details";
import useData from './components/Getdata';



import Carousel from "./components/Carousel/Carousel";




function App() {

  const data = useData() 
  // console.log(data)



  return (
    <div className="App">


      <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Book" element={<Book data={data} />} />    
          <Route path="/post/:id" element={<Details data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
