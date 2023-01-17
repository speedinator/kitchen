// import React from 'react'
// import { useLocation } from 'react-router-dom';
// import Header from "../components/Header"
// import { Link } from "react-router-dom"




// function Details() {
//   const { state } = useLocation();
//   const { data } = state;
//   console.log(state)
//   console.log(data.fields.title)
//   const detail = data.fields;

//   let Video = `http://${detail.trailer.fields.file.url}`
//   return (

//     <div className='container-details'>
     
//       <div className='details-frame' >
//         <Header />
        
        
//         <div className='details-top'>
//           <Link className='linkback' to="/">back</Link>
//           <div className='details-title'> {detail.title}</div>
          
//           <div className='detail-top-wrapper'>
//             <div className='left'> <div className='details-image'> <img src={detail.pictures.fields.file.url} alt="iamge"></img> </div> </div>
//             <div className='right'>
              
//               <div className='details-duration'>Duration: {detail.duration} min</div>
//               <div className='details-duration'>Rating: {detail.rating} </div>
//               <div className='details-duration'>Year: {detail.year} </div>
//               <div className='details-actors'>Actors: {detail.actors}</div>
//               <div className='details-abstract'>{detail.abstract}</div>
             
//             </div>
//           </div>

//           <div className='details-video-text'>Plot</div>
          
//           <div className='details-plot'>{detail.plot}</div>


//           <div className='details-video-text'>Trailer</div> 
//            <div className='details-video'> 
//             <video controls autoPlay={"autoplay"}  src={Video} muted  type="video/mp4">
              
//             </video>
//           </div>
        
 
//         </div>

//       </div> 
      
//     </div>


    
//   )
// }

// export default Details