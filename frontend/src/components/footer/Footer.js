import axios from "axios";
import React from "react";
import api_url from "../../ApiUrl";
import { toast } from "react-toastify";
import { GiPostOffice } from "react-icons/gi";
import { BiTime } from "react-icons/bi";
import { AiFillMobile } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import {FiPhoneCall} from 'react-icons/fi'
import background from "./../../img/footer.png";
import logo from "./../../img/footerlogo.png";
const Footer = () => {

  const submit=()=>{
    if(document.getElementById('mail').value.length===0){
      toast.error('Must enter a valid email address')
    }
    else{

      axios.post(`${api_url}subscribe/create`,{email:document.getElementById('mail').value}).then((res)=>{
        if(res.data.status==='ok'){
          toast.success('Subscribe successfully.')
        }
      })
    }
  }


  return (
    <>
     <footer class="text-center text-lg-start bg-body-tertiary text-muted" style={{backgroundImage: `url(${background})`,backgroundSize:"cover"}}>
 
 <section class="p-3 text-white" style={{backgroundColor: `rgba(0,0,0,0.8)`}}>
   <div class="container text-center text-md-start mt-5">
    
     <div class="row mt-3">
     
       <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
         <div class="mb-4">
           <img src={logo}/>
         </div>
        <p style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}>2nd Floor jackson heights GT RD, Rawalpindi, 46000</p>
         <p style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}>
           <i class="fas fa-envelope me-3"></i>
           info@example.com
         </p>
         <p style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
         <p style={{fontWeight:"500",fontSize:"16px",lineHeight:"19.2px"}}><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
       </div>
     
       <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
    
         <h6 class="text-uppercase fw-bold mb-4" style={{fontWeight:"500",fontSize:"20px",lineHeight:"30px"}}>
           QUICK LINKS
         </h6>
         <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Home</a>
         </p>
         <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Agencies</a>
         </p>
         <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Properties</a>
         </p>
         <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Project</a>
         </p>
          <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Developers</a>
         </p>
          <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Blogs</a>
         </p>
          <p>
           <a href="#!" class="text-reset" style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>Become a Agent</a>
         </p>
       </div>
       
       <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
         <h6 class="text-uppercase fw-bold mb-4" style={{fontWeight:"500",fontSize:"20px",lineHeight:"30px"}}>
         TIMINGS
         </h6>
         <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"32px"}}>
          10 to 6PM Monday to Firday
         </p>
        
       </div>
     
       <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
         <h6 class="text-uppercase fw-bold mb-4" style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}>SUBSCRIBE TO OUR <br/>NEWSLETTER!</h6>
         <div class="input-group bg-white" style={{borderRadius:"7px"}}>
 <input
   type="text"
   class="form-control p-2"
   placeholder="Email Address"
   aria-label="Recipient's username with two button addons"
   style={{border:"none"}}
 />
 <button class="btn bg_makkan text-white p-3" style={{borderRadius:"30%",margin:"4px",backgroundColor:"#4DB749"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
   <i class="fas fa-arrow-right-long"></i>
 </button>
 
</div>
<br/>
<h6 class="text-uppercase fw-bold mb-4" style={{fontWeight:"600",fontSize:"19.4px",lineHeight:"23.8px"}}>FOLLOW US ON</h6>

   <div>
     <a href="" class="me-4 bg_color_maken">
       <i class="fab fa-facebook-f"></i>
     </a>
     <a href="" class="me-4 bg_color_maken">
       <i class="fab fa-twitter"></i>
     </a>
     <a href="" class="me-4 bg_color_maken">
       <i class="fab fa-google"></i>
     </a>
     <a href="" class="me-4 bg_color_maken">
       <i class="fab fa-instagram"></i>
     </a>
     <a href="" class="me-4 bg_color_maken">
       <i class="fab fa-linkedin"></i>
     </a>
     <a href="" class="me-4 bg_color_maken">
       <i class="fab fa-github"></i>
     </a>
   </div>
       </div>
   
     </div>
   
   </div>
 </section>
 <div class="text-center p-4" style={{backgroundColor:`rgba(0, 0, 0, 0.9)`}}>
   © 2021 Copyright:
   <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
 </div>

</footer>
    </>
  );
};

export default Footer;
