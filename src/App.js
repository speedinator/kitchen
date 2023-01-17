import { Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Book from "./components/Book"
// import  from "./components/Home"
import Details from "./components/Details";
import useData from './components/Getdata';



import Carousel from "./components/Carousel/Carousel";
// import Details from "./components/Clristian-tobi";



function App() {

  const data = useData() 
  // console.log(data)


  // console.log(updatedSlide)
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
          <Route path="/post/:id" element={<Details data={data}/>} />
      </Routes>
    </div>
  );
}

export default App;
