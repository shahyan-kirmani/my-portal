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

const Features = () => {


  const [myPost, setMyPost] = useState([])








  useEffect(() => {
    axios.get(api_url + `property/get`).then(res => {
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

  // console.log("data has been shown here", myPost[0].city)

  return (
    <>
       <div class="p-5 container" style={{backgroundImage:`url('${require('./../../img/featurebg.png')}')`,backgroundSize:"cover"}}>
  <div class="text-center">
    <p style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>FEATURED PROPERTIES</p>
    <h2 style={{fontWeight:"600",fontSize:"24px",lineHeight:"28.8px"}}>THIS WEEK"S TOP HOMES</h2>
    <img src={require('./../../img/arrow.png')} />
    <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>Experince luxury living at this finest with our featured properties.</p>
  </div>

    
   <div class="row"> 
   {myPost.length>0?myPost.map(i=>{return(<>
      <div class="col-md-3 mt-1">
              <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={i?.image} class="img-fluid" style={{width:"100%",height:"180px"}} />
                <a href="#!">
                  <div class="mask" style={{backgroundColor:`rgba(251, 251, 251, 0.15)`}}></div>
                </a>
              </div>
              <div class="card-body" style={{padding:"0px",paddingLeft:"30px",paddingTop:"9px"}}>
                <h6 class="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>Available</h6>
                <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}><span>{i?.title}</span>
                  <br/>
                   <p class="text-muted py-2" style={{fontSize:"15px",fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>{i?.city}</p>
                </h5>
              <ul style={{listStyle:"none",paddingLeft:"0px"}}>
                     <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="far fa-building text-muted" style={{width:"20px",height:"20px"}}></i> <span>{i?.size}</span></li>
                    <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><span><i class="fas fa-bed text-muted" style={{width:"20px",height:"20px"}}></i> {i?.beds}</span></li>
                    <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="fab fa-docker text-muted" style={{width:"20px",height:"20px"}}></i>  <span>{i?.baths}</span></li>
                 </ul>

              </div> 
              <div class="card-footer" >
                <div style={{float:"left"}} class="p-2">
                    <h6 style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}>{i?.price}</h6>
                </div>
                <div style={{float:"right"}}>
                  <table>
                    <tr>
                      <td class="p-2"><a href=""><i class="fas fa-phone-flip bg_color_maken"></i></a></td>
                      <td class="p-2"><a href=""><i class="fab fa-whatsapp bg_color_maken"></i></a></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

      </div>
     
      {/* <div class="col-md-3 mt-1">
              <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require('./../../img/house/Rectangle 27.png')} class="img-fluid" style={{width:"100%",height:"180px"}} />
                <a href="#!">
                  <div class="mask" style={{backgroundColor:`rgba(251, 251, 251, 0.15)`}}></div>
                </a>
              </div>
              <div class="card-body" style={{padding:"0px",paddingLeft:"30px",paddingTop:"9px"}}>
                <h6 class="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>Available</h6>
                <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}><span>Shahmir Residency</span>
                  <br/>
                   <p class="text-muted" style={{fontSize:"15px",fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karchi , university Road</p>
                </h5>
              <ul style={{listStyle:"none",paddingLeft:"0px"}}>
                     <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="far fa-building text-muted" style={{width:"20px",height:"20px"}}></i> <span>5 Marral</span></li>
                    <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><span><i class="fas fa-bed text-muted" style={{width:"20px",height:"20px"}}></i> 2 Beds</span></li>
                    <li style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}><i class="fab fa-docker text-muted" style={{width:"20px",height:"20px"}}></i>  <span>2 Baths</span></li>
                 </ul>

              </div>
              <div class="card-footer" >
                <div style={{float:"left"}} class="p-2">
                    <h6 style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}>PKR 2032</h6>
                </div>
                <div style={{float:"right"}}>
                  <table>
                    <tr>
                      <td class="p-2"><a href=""><i class="fas fa-phone-flip bg_color_maken"></i></a></td>
                      <td class="p-2"><a href=""><i class="fab fa-whatsapp bg_color_maken"></i></a></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

      
      
    </div>
     */}
     </>)}):null}

    </div>
   
</div>

    </>
  );
}


export default Features;