import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";



// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from "axios";
import api_url from "../ApiUrl";

const  ThermerSlider =({id}) => {

  const [myPost, setMyPost] = useState([])


    useEffect(() => {
        axios.get(api_url + `property/get/${id}`).then(res => {
          console.log(res.data,'==========>img')
            setMyPost(res.data.data)
        })
    }, [])

  

  return (
    <>
      <Swiper
        
        loop={true}
        spaceBetween={10}
        navigation={true}
     
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper10 overflow-hidden"
      >
        {myPost?.image && myPost?.image.map(i=>
        <SwiperSlide>
          <img src={i}  />
        </SwiperSlide>)}

        <SwiperSlide>
          <video src={myPost?.video} controls width='100%'/>
        </SwiperSlide>
        
      </Swiper>
      {/* <Swiper
        
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation,Thumbs]}
        className="mySwiper11"
      >
        {myPost?.image && myPost?.image.map(i=>
        <SwiperSlide>
          <img src={i?.url} />
        </SwiperSlide>
        )}
        <SwiperSlide>
        <video src={myPost?.video} controls width='100%'/>
        </SwiperSlide>
       
      
      </Swiper> */}
    </>
  );
}


export default ThermerSlider;
