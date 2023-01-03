import React, { useState, useEffect, useCallback } from 'react'
import { client } from '../../client'

const Carousel = () => {
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
                console.log(updatedSlide)
            })
    
            setCarouselSlides(cleanSlides)
    
        }, []
    )
    // cleanUpCarouselSlides( )

    const getCarouselSlides = useCallback(
        async () => {
            try { 
                const response = await client.getEntries({ content_type: 'kitchenCarous' })
                console.log(response)
                const responseData = response.items
                cleanUpCarouselSlides(responseData)
                console.log(responseData)
    
            } catch (error) {
                console.log(error)
            }
    
                
        },[cleanUpCarouselSlides])
  
    useEffect (() => {
        getCarouselSlides()
    }, [getCarouselSlides])

    return (
        <div>
            {carouselSlides.map((item) => {
                const { id, slideBG, slideTitle, slideDescription } = item
                return (
                   <div> 
                        <div className='slideWrap' style={{ backgroundImage: `url(${slideBG})`}}>
                            <h1>Kitchen Carousel</h1>
                            <p style={{color: "red"}}></p>
                            <h1 style={{color: "red"}}>{`Hello Style! ${slideDescription}`}</h1>
                            {id}
                            {slideDescription}
                            {slideBG}
                        </div>

                   </div>


                )
            })}
            
            
            
        </div>
  )
}

export default Carousel