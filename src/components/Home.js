import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import axios from "axios";
import Loading from './Loading';

import { client } from '../client'


const Home = () => { 

    // const [posts, setPosts] = useState([]);
    const [isCarouselLoading, setIsCarouselLoading] = useState(true)
    const [carouselSlides, setCarouselSlides] = useState([])

    const cleanUpCarouselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const {sys,fields} = slide
            const {id} = sys
            const slideTitle = fields.slideTitle
            const slideDescription = fields.description
            const slideBG = fields.image.fields.file.url
            const updatedSlide = { id, slideTitle, slideDescription, slideBG } 
            return updatedSlide
            // console.log(updatedSlide)
        })

        setCarouselSlides(cleanSlides)
        
    }, []
    )
    console.log(carouselSlides[0])
    const getCarouselSlides = useCallback(
        async () => {
            try { 
                const response = await client.getEntries({ content_type: 'kitchenCarous' })
                // console.log(response)
                const responseData = response.items
                cleanUpCarouselSlides(responseData)
                // console.log(responseData)
    
            } catch (error) {
                console.log(error)
            }
    
                
        },[cleanUpCarouselSlides])
  
    useEffect (() => {
        getCarouselSlides()
    }, [getCarouselSlides])

    
    
    // useEffect(() => {
    //     const getPosts = async () => {
    //       try {
    //         const { data } = await axios.get(
    //           `https://wbs-cs-blog-api.onrender.com/posts`
    //         );
    //         setPosts(data);
    //       } catch (error) {
    //         alert("Hey, sorry. Something went wrong!!");
    //       }
    //     };
    //     getPosts();
    //   }, []);

    return (
        <div className="row">
          {console.log(carouselSlides.length)}
          {carouselSlides.length ? ( carouselSlides.map((item) => {
                const { id, slideBG, slideTitle, slideDescription } = item
                return (
                    <div className="col-md-4 mb-4" key={id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={slideBG}
                        alt={slideTitle}
                        style={{ height: "200px", objectFit: "scale-down" }}
                      />
                    <div className="card-body">
                        <h5 className="card-title">{slideTitle}</h5>
                        <p className="card-text">{`${slideDescription.substr(0, 150)}...`}</p>
                        <Link to={`/post/${id}`} className="btn btn-primary">
                         More
                        </Link>
                        {console.log({id})}
                      </div>
                    </div>
                  </div>
                )
          }))
          
           : (
        <div>
            <Loading />
        </div>
            )}
        </div>
        )
          
          
          
          
          
          
          
          
          {/* {carouselSlides.length ? (
            carouselSlides.map((post) => (
              
              <div className="col-md-4 mb-4" key={post._id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    // src={post.id}
                    // alt={slideTitle}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{`${post.body.substr(0, 50)}...`}</p>
                    <Link to={`/post/${post._id}`} className="btn btn-primary">
                     More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // <Loading />
            <p>test</p>
          )}
        </div>
      );
     */}
    
    {/* //   return (
    // <div>
    //     <h1 >Home</h1>
    // </div> 
    // ) */}
}

export default Home;