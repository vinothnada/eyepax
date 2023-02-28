import React, { useEffect } from 'react'

const CarousalContent = ({item,
  id,
  photosLength,
  infinite}) => {

  const carouselSlideId = `carousel__slide${id}`;

  let carouselNextSlideId = id === photosLength ? `#carousel__slide1` : `#carousel__slide${id+1}`;
  let carouselPrevSlideId = id === 1 ? `#carousel__slide${photosLength}` :  `#carousel__slide${id-1}`;

  if(!infinite){
    carouselNextSlideId = id === photosLength ? `#carousel__slide${photosLength}` : `#carousel__slide${id+1}`;
    carouselPrevSlideId = id === 1 ? `#carousel__slide1`  :  `#carousel__slide${id-1}`;
  }

  const imageUrl = `/images/${item.image}`;

  return (
    <>
        <li id={carouselSlideId}
            tabindex="0"
            class="carousel__slide"
            style={{backgroundImage : {imageUrl}}}
        >                
        <div class="carousel__snapper">
            <a href={carouselPrevSlideId}
                class="carousel__prev">Go to Prev slide</a>
            <a href={carouselNextSlideId}
                class="carousel__next">Go to next slide</a>
        </div>
        </li>        
    </>
  )
}

export default CarousalContent