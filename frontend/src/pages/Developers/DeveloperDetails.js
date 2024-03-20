import React, { useEffect, useRef, useState } from "react";
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
const DeveloperDetails = () => {
    return (
      <>
      <TopNav /> 
            <BottomNav />
            <div
            id="intro-example"
            class="p-5 text-center bg-image"
            style={{backgroundImage:`url('${require("./../../img/banner/Group 22 (5).png")}')`,height:"170px"}}
        >
        </div>
        <br/>
        <br/>
      <div class="container">
  <div class="row">
    <div class="col-md-9">
<div class="row">
   <div class="col-md-12" style={{padding:"5px"}}>
      <div class="card mb-3" >
  <div class="row p-2">
    <div class="col-md-2">
      <img
      style={{width:"100%",height:"150px"}}
        src={require('./../../img/agencey/Rectangle 54.png')}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
    <h5 style={{fontWeight:"600",fontSize:"18px",lineHeight:"21.6px"}}>Chohan HAY Estate</h5>
      <span class="text-muted" style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>Islamabad</span>
      <br/>
      <span class="text-muted" style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>93 Properties For Sale | Properties For Rent</span>
    </div>
    <div class="col-md-3">
      <br/><br/>
    
      
      <a href="" class="btn  btn-outline-secondary btn-rounded" style={{fontWeight:"600",fontSize:"13px",lineHeight:"15.6px"}}><i class="fas fa-share-nodes"></i> Share</a>
    </div>
  </div>
</div>
    </div>

  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="p-3 " style={{backgroundColor:"#4DB74940",width:"5%",borderRadius:"100%",float:"left"}}>
            <i class="fas fa-house-chimney-crack bg_color_maken"></i>
          </div>
          <h5 class="p-3" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>&nbsp; <b>192 Properties for Sale</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bg_color_maken" style={{fontWeight:"600",fontSize:"13px",lineHeight:"15.6px"}}>view all <i class="fas fa-arrow-up-right-from-square"></i> </span>
                </h5>
        </div>
        <div class="card-body">
        <h4 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}><b>About Chohan HAY Estate</b></h4>
  				<br/>
  				<p style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>We are the largest real estate company in pakistan serving the community since past 35 years. We cater to the real estate needs of all kinds of clients from corporations to individuals. We have got a specialized team of more than 200 professionals to cater to the needs of our clients, Plz feel free to contact us any time.
  					<br/><br/>
We are the largest real estate company in pakistan serving the community since past 35 years. We cater to the real estate needs of all kinds of clients from corporations to individuals. We have got a specialized team of more than 200 professionals to cater to the needs of our clients, Plz feel free to contact us any time.</p>

<h5 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}><b>Discovered New Projects</b></h5>
<br/>
 <div class="row">
  <div class="col-md-4">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
</div>
        </div>


      </div>
    </div>
  </div>

<div class=" container">
  <br/><br/>
  <div class="">
   
    <h2 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}>Similar Developers</h2>
    
  </div>

    

    <br/>
</div>
  
</div>  
    </div>
    <div class="col-md-3">
      <div class="card p-3">
      <h5 style={{fontWeight:"600",fontSize:"20px",lineHeight:"24px"}}>Get in touch today!</h5>
				<span class="text-muted" style={{fontWeight:"400",fontSize:"13px",lineHeight:"15.6px"}}>send a message and get in touch today.</span>
        <br/>
        <a href="" class="btn bg_makkan text-white w-100"  style={{backgroundColor:'#4DB749',marginRight:"5px",fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}><i class="fas fa-phone-flip"></i> Call</a>
        <br/>
        <div class="row">
  <div class="col-d-12 mt-3">
    
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example1" class="form-control border-bottom"  />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example1">Your Name</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
    <div data-mdb-input-init class="form-outline">
      <input type="email" id="form8Example2" class="form-control border-bottom"  />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example2">Phone Number</label>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-d-12 mt-3">
    
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example3" class="form-control border-bottom"  />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example3">Email Address</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
    
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example4" class="form-control border-bottom"  />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example4">Subject</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
    <div data-mdb-input-init class="form-outline">
      <input type="email" id="form8Example5" class="form-control border-bottom"  />
      <label class="form-label" style={{fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}} for="form8Example5">Your Message</label>
    </div>
  </div>
 
</div>
 <a href="" class="btn bg_makkan text-white w-100 mt-3" style={{backgroundColor:'#4DB749'}}>SEND YOUR QUESTION</a>
<p>By submited this form, agree to Trems of Use.</p>
      </div>
    </div>
  </div>
  <div className="container">
  <div class="row">
  <div class="col-md-3">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card">
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body text-center">
       <h6 class="bg_color_maken " style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>AVAILABLE</h6>
       <h5 style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Shamir Residency, Karachi</h5>
       <p class="text-muted" style={{fontWeight:"300",fontSize:"14px",lineHeight:"16.8px"}}>Karachi,Univeristy Road</p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
<br></br>
<Footer />
      </>
      )
    }
    
    export default DeveloperDetails