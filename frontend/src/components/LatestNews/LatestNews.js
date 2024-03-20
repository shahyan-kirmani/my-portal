import React, { useEffect, useRef, useState } from "react";

const LatestNews = () => {
    return (
      <>
      <div class="p-5 container" style={{backgroundImage:`url('${require('./../../img/featurebg.png')}')`,backgroundSize:"cover"}}>
  <div class="text-center">
    <h2 style={{fontWeight:"600",fontSize:"24px",lineHeight:"28.8px"}}>LATEST NEWS</h2>
    <img src={require('./../../img/arrow.png')} />
    
  </div>
  <div class="row">
    <div class="col-md-6" style={{padding:"5px"}}>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-5">
      <img
      style={{width:"100%",height:"200px"}}
        src={require('./../../img/projects/Rectangle 31.png')}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h6 class="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>REAL ESTATE NEWS</h6>
        <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Great News for Overseas Pakistanis
           <br/>
                   <p class="text-muted" style={{fontSize:"15px",fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>March 1, 2023</p>
        </h5>
         
       
        <div class="mt-3">
                  <button class="bg_makkan btn text-white btn-sm" style={{backgroundColor:'#4DB749',fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>READ MORE</button>
                </div>
      </div>
    </div>
  </div>
</div>
    </div>
  <div class="col-md-6" style={{padding:"5px"}}>
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
        <h6 class="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>REAL ESTATE NEWS</h6>
        <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Great News for Overseas Pakistanis
           <br/>
                   <p class="text-muted" style={{fontSize:"15px",fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>March 1, 2023</p>
        </h5>
         
       
        <div class="mt-3">
                  <button class="bg_makkan btn text-white btn-sm" style={{backgroundColor:'#4DB749',fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>READ MORE</button>
                </div>
      </div>
    </div>
  </div>
</div>
    </div>

      <div class="col-md-6" style={{padding:"5px"}}>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-5">
      <img
      style={{width:"100%",height:"200px"}}
        src={require('./../../img/projects/Rectangle 33.png')}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h6 class="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>REAL ESTATE NEWS</h6>
        <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Great News for Overseas Pakistanis
           <br/>
                   <p class="text-muted" style={{fontSize:"15px",fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>March 1, 2023</p>
        </h5>
         
       
        <div class="mt-3">
                  <button class="bg_makkan btn text-white btn-sm" style={{backgroundColor:'#4DB749',fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>READ MORE</button>
                </div>
      </div>
    </div>
  </div>
</div>
    </div>

      <div class="col-md-6" style={{padding:"5px"}}>
      <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-5">
      <img
      style={{width:"100%",height:"200px"}}
        src={require('./../../img/projects/Rectangle 34.png')}
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"

      />
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <h6 class="bg_color_maken" style={{fontWeight:"600",fontSize:"12px",lineHeight:"14.4px"}}>REAL ESTATE NEWS</h6>
        <h5 class="card-title" style={{fontWeight:"600",fontSize:"16px",lineHeight:"19.2px"}}>Great News for Overseas Pakistanis
           <br/>
                   <p class="text-muted" style={{fontSize:"15px",fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>March 1, 2023</p>
        </h5>
         
       
        <div class="mt-3">
                  <button class="bg_makkan btn text-white btn-sm" style={{backgroundColor:'#4DB749',fontWeight:"400",fontSize:"14px",lineHeight:"16.8px"}}>READ MORE</button>
                </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
      </>

      )
  }
  
  export default LatestNews