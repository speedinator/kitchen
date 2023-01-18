import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";
import Loading from './Loading';
import { client } from '../client'
import useData from './Getdata';
import styles from './styles.css'

const Home = () => { 
  const data = useData()  
  console.log(data.items)

    const [carouselSlides, setCarouselSlides] = useState([])

    const cleanUpCarouselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            console.log(slide.sys.id)
            const {sys,fields} = slide
            const {id} = sys
            const slideTitle = fields.title
            const slideDescription = fields.description
            const slideBG = fields.image.fields.file.url
            const updatedSlide = { id, slideTitle, slideDescription, slideBG } 
            return updatedSlide
            // console.log(updatedSlide)
        })

        setCarouselSlides(cleanSlides)
        
    }, []
    )
    
    const getCarouselSlides = useCallback(
        async () => {
            try { 
                const response = await client.getEntries({ content_type: 'kitchenCarous' })
                // console.log(JSON.stringify(response))
                const responseData = response.items
                cleanUpCarouselSlides(responseData)
                
    
            } catch (error) {
                console.log(error)
            }
    
                
        },[cleanUpCarouselSlides])
  
    useEffect (() => {
        getCarouselSlides()
    }, [getCarouselSlides])

    
    // Bsp. aus Recap-Session
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
          {/* {console.log(carouselSlides.length)} */}
          {carouselSlides.length ? ( carouselSlides.map((item) => {
                const { id, slideBG, slideTitle, slideDescription } = item
                return (
                    
                  <div className="col-md-4 mb-4 temp"  key={id}>
                    <div className="card temp" >
                      <h3 className="card-title">{slideTitle}</h3>
                      <img
                        className="card-img-top"
                        src={slideBG}
                        alt={slideTitle}
                        style={{ height: "200px", objectFit: "scale-down" }}
                      />
                    <div className="card-body">
                        <p className="card-text">{`${slideDescription.substr(0, 200)}...`}</p>
                        <Link to={`/post/${id}`} 
                        // className="btn btn-primary"
                        className="card-button"
                        >
                         More
                        </Link>
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
          

          
}


export default Home;