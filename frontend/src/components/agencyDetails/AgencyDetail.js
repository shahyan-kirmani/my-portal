import React, { useEffect, useRef, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const AgencyDetail = () => {
    return (
      <>
      <div
            id="intro-example"
            class="p-5 text-center bg-image"
            style={{backgroundImage:`url('${require("./../../img/banner/agency.png")}')`,height:"170px"}}
        >
        </div>
        <br/>
        <br/>
        <div class="container">
	<div class="row">
		<div class="col-md-9">
<div class="row">
	 <div class="col-md-12" style={{padding:"5px"}}>
      <div class="card mb-3 p-3" >
  <div class="row p-2">
    <div class="col-md-2">
      <img
      style={{width:"100%",height:"110px"}}
        src={require('./../../img/agencey/Rectangle 54.png')}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
      <h5 style={{fontWeight:"600",fontSize:"18px",lineHeight:"21.6px"}}>Chohan HAY Estate</h5>
      <span class="text-muted" style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>Islamabad</span>
      <br/>
      <span class="text-muted" style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>93 Properties Listed</span>
    
   
  
    
    </div>
    <div class="col-md-3">
    	<br/><br/>
    
    	
    	<a href="" class="btn  btn-outline-success rounded-pill p-2" style={{fontWeight:"600",fontSize:"13px",lineHeight:"15.6px",float:"right"}}><i class="fas fa-share-nodes text-dark"></i> <span className="text-dark"> Share</span></a>
    </div>
  </div>
</div>
    </div>

  <div class="row">
  	<div class="col-md-12">
  		<div class="card">
  			<div class="card-header">
  				<div class="p-3 " style={{backgroundColor:"#4DB74940",width:"5.5%",borderRadius:"100%",float:"left"}}>
  					<i class="fas fa-house-chimney-crack bg_color_maken"></i>
  				</div>
  				<h5 class="p-3" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>&nbsp; <b>192 Properties for Sale</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bg_color_maken" style={{fontWeight:"600",fontSize:"16px",lineHeight:"15.6px"}}>view all <i class="fas fa-arrow-up-right-from-square"></i> </span>
                </h5>

  			</div>
  			<div class="card-body">
  				<h4 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}><b>About Chohan HAY Estate</b></h4>
  				<br/>
  				<p style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>We are the largest real estate company in pakistan serving the community since past 35 years. We cater to the real estate needs of all kinds of clients from corporations to individuals. We have got a specialized team of more than 200 professionals to cater to the needs of our clients, Plz feel free to contact us any time.
  					<br/><br/>
We are the largest real estate company in pakistan serving the community since past 35 years. We cater to the real estate needs of all kinds of clients from corporations to individuals. We have got a specialized team of more than 200 professionals to cater to the needs of our clients, Plz feel free to contact us any time.</p>

<h5 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}><b>Agency Staff</b></h5>
<br/>
<div class="row">
<Carousel responsive={responsive}>
<div class="col-md-12 p-3">
    <div class="card">
     
      <div class="card-body text-center" style={{backgroundImage:`url('${require("./../../img/image 5.png")}')`}}>
      	<img
  src={require('./../../img/image 4.png')}
  class="img-fluid rounded-circle"
  alt="Townhouses and Skyscrapers"
  style={{width:"40%",height:"100px"}}
/>
<hr/>
      		<h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>John Simth</h5>
        <a href="" class="btn bg_makkan text-white" style={{backgroundColor:'#4DB749',marginRight:"5px"}}><i class="fas fa-phone-flip"></i> Call</a>
    	<a href="" class="btn btn-outline-success"><i class="far fa-envelope"></i> Mail</a>
      </div>
    </div>
  </div>
  <div class="col-md-12 p-3">
    <div class="card">
     
      <div class="card-body text-center" style={{backgroundImage:`url('${require("./../../img/image 5.png")}')`}}>
      	<img
  src={require('./../../img/image 4.png')}
  class="img-fluid rounded-circle"
  alt="Townhouses and Skyscrapers"
  style={{width:"40%",height:"100px"}}
/>
<hr/>
      		<h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>John Simth</h5>
        <a href="" class="btn bg_makkan text-white" style={{backgroundColor:'#4DB749',marginRight:"5px"}}><i class="fas fa-phone-flip"></i> Call</a>
    	<a href="" class="btn btn-outline-success"><i class="far fa-envelope"></i> Mail</a>
      </div>
    </div>
  </div>
  <div class="col-md-12 p-3">
    <div class="card">
     
      <div class="card-body text-center" style={{backgroundImage:`url('${require("./../../img/image 5.png")}')`}}>
      	<img
  src={require('./../../img/image 4.png')}
  class="img-fluid rounded-circle"
  alt="Townhouses and Skyscrapers"
   style={{width:"40%",height:"100px"}}
/>
<hr/>
      	<h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>John Simth</h5>
       <a href="" class="btn bg_makkan text-white" style={{backgroundColor:'#4DB749',marginRight:"5px"}}><i class="fas fa-phone-flip"></i> Call</a>
    	<a href="" class="btn btn-outline-success"><i class="far fa-envelope"></i> Mail</a>
      </div>
    </div>
  </div>
  
  <div class="col-md-12 p-3">
    <div class="card">
     
      <div class="card-body text-center" style={{backgroundImage:`url('${require("./../../img/image 5.png")}')`}}>
      	<img
  src={require('./../../img/image 4.png')}
  class="img-fluid rounded-circle"
  alt="Townhouses and Skyscrapers"
   style={{width:"40%",height:"100px"}}
/>
<hr/>
      		<h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>John Simth</h5>
       <a href="" class="btn bg_makkan text-white" style={{backgroundColor:'#4DB749',marginRight:"5px"}}><i class="fas fa-phone-flip"></i> Call</a>
    	<a href="" class="btn btn-outline-success"><i class="far fa-envelope"></i> Mail</a>
      </div>
    </div>
  </div>
  </Carousel>
</div>
  			</div>


  		</div>
  	</div>
  </div>


<div class=" container">
	<br/><br/>
  <div class="">
   
    <h2 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}>Recent Properties By Chahan Hay Estate</h2>
    
  </div>
</div>

  
</div>	
		</div>
		<div class="col-md-3">
			<div class="card p-3">
				<h5 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}>Get in touch today!</h5>
				<span class="text-muted" style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>send a message and get in touch today.</span>
				<br/>
				<a href="" class="btn bg_makkan text-white w-100" style={{backgroundColor:'#4DB749',marginRight:"5px",fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}><i class="fas fa-phone-flip"></i> Call</a>
				<br/>
				<div class="row">
    <div class="col-d-12 mt-3">
    
      <div data-mdb-input-init class="form-outline">
        <input type="text" id="form8Example1" class="form-control border-bottom" />
        <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example1">Your Name</label>
      </div>
    </div>
    <div class="col-d-12 mt-3">
      
      <div data-mdb-input-init class="form-outline">
        <input type="email" id="form8Example2" class="form-control border-bottom" />
        <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example2">Phone Number</label>
      </div>
    </div>
  </div>


<div class="row">
  <div class="col-d-12 mt-3">
  
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example3" class="form-control border-bottom" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example3">Email Address</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
  
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example4" class="form-control border-bottom" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example4">Subject</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="email" id="form8Example5" class="form-control border-bottom" />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example5">Your Message</label>
    </div>
  </div>
 
</div>
 <a href="" class="btn bg_makkan text-white w-100 mt-3" style={{backgroundColor:'#4DB749'}}>SEND YOUR QUESTION</a>
<p style={{fontWeight:"6s00",fontSize:"13px",lineHeight:"15.6px"}}>By submited this form, agree to Trems of Use.</p>
			</div>
		</div>
	</div>
</div>

<div className="container">
<div class="row">
   <div class="col-md-3 mt-1">
              <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require('./../../img/house/Rectangle 37.png')} class="img-fluid" style={{width:"100%",height:"180px"}} />
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
      <div class="col-md-3 mt-1">
              <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require('./../../img/house/Frame 44944.png')} class="img-fluid" style={{width:"100%",height:"180px"}} />
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
      <div class="col-md-3 mt-1">
              <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require('./../../img/house/Rectangle 29.png')} class="img-fluid" style={{width:"100%",height:"180px"}} />
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
      <div class="col-md-3 mt-1">
              <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src={require('./../../img/house/Rectangle 29.png')} class="img-fluid" style={{width:"100%",height:"180px"}} />
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
    </div>
</div>
<br/>
<br/>
      </>

      )
    }
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    export default AgencyDetail