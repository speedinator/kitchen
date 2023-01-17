import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
import Loading from './Loading';
import { client } from '../client'
import HTMLFlipBook from "react-pageflip";
import "./book.css"

const Page = React.forwardRef((props, ref) => {
    console.log(ref)
    return (
      <div className="demoPage" ref={ref}> /* ref required */
        <h1>Page Header</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </div>
    );
  });

console.log(Page)

function Book ({data}) {
    // console.log(data.items[0]) 
    console.log(data.items[0].fields.image.fields.file.url) 
  return (
    <div id="test">
    <HTMLFlipBook width={700} height={700}>
      <div 
        className="demoPage"
          
        // style={{backgroundImage: "url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)"}}>
        >
        <img 
          src={data.items[0].fields.image.fields.file.url}>
          {/* style={{objectFit: "scale-down" }} */}
          {/* style={{height: "200px"}} */}
        </img>
        {/* <img src="https://via.placeholder.com/500"></img> */}

        Page 1
      </div>
      <div
        className="demoPage">
        <img src="https://via.placeholder.com/500"></img>
        Page 2
      </div>
      
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    
    </HTMLFlipBook>
    {/* <h1 style={{ color: 'blue', lineHeight : 10, padding: 20 }}>test</h1> */}
    </div>
  );

}

export default Book;