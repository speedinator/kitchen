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
const Book = (props) => {
    // console.log(props.children)
  return (
    <div id="test">
    <HTMLFlipBook width={642} height={428}>
      <div 
        className="demoPage"
          
        // style={{backgroundImage: "url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)"}}>
        >
        <img src="https://media.gettyimages.com/id/472316515/de/vektor/vorsicht-gefahr-und-warnung-zeichen.jpg?s=612x612&w=0&k=20&c=7uGNmWEcVqWyloUjvaAvHC7gSk6fe6QYMJDCO9qu0vA=" alt="warning" width="642px" height="428px"></img>
        Die folgenden bilder sind nicht geeignet für Menschen mit Schwachen Magen! 
      </div>
      <div
        className="demoPage">
        <img src="https://m.media-amazon.com/images/I/51HiczoO73L._AC_SY350_.jpg" alt="warning2" width="642px" height="428px"></img>
        Weiterblättern auf eigene Gefahr!
      </div>
      
      <div className="demoPage">
      <img src="https://img.chefkoch-cdn.de/rezepte/2771521429203675/bilder/800197/crop-642x428/hello-kitty-gyros.jpg" width="642px" height="428px"></img>
      Hello Kitty Gyrös...!
      </div>

      <div className="demoPage">
      <img src="https://media2.giphy.com/media/3otPoPoCbPjSP4ktGw/giphy.gif?cid=790b7611b49c89138f623637aaefcb11a5dd801c8f62a2c7&rid=giphy.gif&ct=g" width="642px" height="428px"></img>
      Wohl eher Good bye Kitty...!</div>
    
      <div className="demoPage">
      <img src="https://img.chefkoch-cdn.de/rezepte/1071051212678110/bilder/1346702/crop-642x428/hundehaufen.jpg" width="642px" height="428px"></img>
      Mousse au Chocolat crotte de chien...!
      </div>

      <div className="demoPage">
      <img src="https://i.gifer.com/origin/a0/a0266c731b3a77f1e4ca8be6639949f5.gif" width="642px" height="428px"></img>
      Vieleicht lecker aber Optisch naaaja...</div>

      <div className="demoPage">
      <img src="https://img.chefkoch-cdn.de/rezepte/2258861361268001/bilder/548973/crop-642x428/gebackener-mettigel-hawaii.jpg" width="642px" height="428px"></img>
      Mettigel Hawaii...!
      </div>

      <div className="demoPage">
      <img src="https://media.tenor.com/mdAWx_G5KjkAAAAd/cat-really.gif" width="642px" height="428"></img>
      Neee danke!</div>

      <div className="demoPage">
      <img src="https://img.chefkoch-cdn.de/rezepte/2258861361268001/bilder/548973/crop-642x428/gebackener-mettigel-hawaii.jpg" width="642px" height="428px"></img>
      Wir beenden das hier mal...
      </div>

      <div className="demoPage">
      <img src="https://media.tenor.com/mdAWx_G5KjkAAAAd/cat-really.gif" width="642px" height="428"></img>
      das jemand freiwillig so weit blättert ist mir schleierhaft...!
      </div>
      

    </HTMLFlipBook>
    {/* <h1 style={{ color: 'blue', lineHeight : 10, padding: 20 }}>test</h1> */}
    </div>
  );

}

export default Book;