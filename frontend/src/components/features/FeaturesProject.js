import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdWifiCalling3 } from 'react-icons/md'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BsGraphUp } from 'react-icons/bs';  
import {MdLocationOn} from 'react-icons/md';
import {FaChartArea} from 'react-icons/fa';
// Import Swiper styles
import { IoIosBed } from 'react-icons/io';
import { MdOutlineBathroom ,MdEmail} from 'react-icons/md';
import {FaBath} from 'react-icons/fa';
import {LuPhoneCall} from 'react-icons/lu';
import { GrMapLocation } from 'react-icons/gr';
// import required modules
import { Link } from "react-router-dom";
import { FiPhoneCall } from 'react-icons/fi'
import axios from "axios";
import api_url from "../../ApiUrl";

const FeaturesProject = () => {


  const [myPost, setMyPost] = useState([])





   


  useEffect(() => {
    axios.get(api_url + `project/get`).then(res => {
      console.log(res.data, '==========>img')
      console.log(localStorage.getItem("mysetprop"), '==========my prop')
      if (localStorage.getItem("mysetprop") === 'sell') {
        setMyPost(res.data.data.filter(item => item?.purpose === "sell"))
      }
      else if (localStorage.getItem("mysetprop") === 'rent') {
        setMyPost(res.data.data.filter(item => item?.purpose === "rent"))
      }
      else {
        setMyPost(res.data.data)
      }
    })
  }, [])


  return (
    <>
       <div class="p-5 container">
  <div class="text-center">
    <h2 style={{fontWeight:"600",fontSize:"24px",lineHeight:"28.8px"}}>FEATURED PROJECTS</h2>
    <img src={require('./../../img/arrow.png')} />
    <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>Experince luxury living at this finest with our featured properties.</p>
  </div>
  
  <div class="row">
    {myPost.length>0?myPost.map(i=>{return(<>
    
    <div class="col-md-6" style={{padding:"5px"}}>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-5">
      <img
      style={{width:"100%",height:"200px"}}
        src={i?.image}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h6 class="text" style={{fontWeight:"600",fontSize:"14px",lineHeight:"14.4px"}}>{i?.category} - {i?.purpose} </h6>
        <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>{i?.title}
           <br/>
                   <p class="text-muted py-2" style={{fontSize:"15px",fontWeight:"500",fontSize:"14px",lineHeight:"16.8px"}}>{i?.city}</p>
        </h5>
         <ul style={{listStyle:"none",paddingLeft:"0px"}} class="nav">
                     <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="far fa-building text-muted"></i> <span>{i?.size}</span></li>
                    <li style={{marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><span><i class="fas fa-bed text-muted"></i> {i?.beds}</span></li>
                    <li style={{marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="fab fa-docker text-muted"></i>  <span>{i?.baths}</span></li>
                 </ul>
       
                <div class="mt-3">
                    <h6 style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>PKR <span class="bg_color_maken"><b>{i?.minPrice}</b></span> {i?.price} <span class="bg_color_maken">{i?.maxPrice}</span></h6>
                </div>
                <h6 style={{fontWeight:"800",fontSize:"13px",lineHeight:"14.4px"}}>Developers: {i?.developers}</h6>
                {/* <div class="mt-3">
                    <h6 style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>{i?.purpose}</h6>
                </div> */}
      </div>
    </div>
  </div>
</div>
    </div>
  
  {/* <div class="col-md-6" style={{padding:"5px"}}>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-5">
      <img
      style={{width:"100%",height:"200px"}}
        src={require('./../../img/projects/Rectangle 32.png')}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h6 class="text-danger" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>HOT</h6>
        <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Sahmir Residency, Karachi
           <br/>
                   <p class="text-muted" style={{fontSize:"15px",fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karchi , university Road</p>
        </h5>
         <ul style={{listStyle:"none",paddingLeft:"0px"}} class="nav">
                     <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="far fa-building text-muted"></i> <span>5 Marral</span></li>
                    <li style={{marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><span><i class="fas fa-bed text-muted"></i> 2 Beds</span></li>
                    <li style={{marginLeft:"10px",fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="fab fa-docker text-muted"></i>  <span>2 Baths</span></li>
                 </ul>
       
        <div class="mt-3">
                    <h6 style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>PKR <span class="bg_color_maken"><b>2.31</b></span> Core to <span class="bg_color_maken">3.3</span></h6>
                </div>
      </div>
    </div>
  </div>
</div>
    </div> */}

  </>)}):null}
    
  </div>
  
</div>

    </>
  );
}


export default FeaturesProject;