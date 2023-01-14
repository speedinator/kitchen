import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
import Loading from './Loading';
import { client } from '../client'
import HTMLFlipBook from "react-pageflip";

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
const Book = (props) => {
    // console.log(props.children)
  return (
    <div>
    <HTMLFlipBook width={300} height={500} props={props}>
      <div className="demoPage" style={{backgroundImage: `url("https://via.placeholder.com/500")`}}>
 
        Page 1
       </div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
    <h1 style={{ color: 'blue', lineHeight : 10, padding: 20 }}>test</h1>
    </div>
  );

}

export default Book;