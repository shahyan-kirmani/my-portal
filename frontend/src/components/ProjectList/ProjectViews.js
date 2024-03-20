import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api_url from '../../ApiUrl';
import { ToastContainer, toast } from 'react-toastify';
const ProjectViews = () => {

  const { id } = useParams()

  useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
    }, []);


  const [myPost, setMyPost] = useState([])


  useEffect(() => {
      axios.get(api_url + `property/get/${id}`).then(res => {
          console.log(res.data, '==========>img')
          setMyPost(res.data.data)
      })
  }, [])


  const submitForm = () => {
      const name = document.getElementById('name').value
      const email = document.getElementById('sendemail').value
      const phone = document.getElementById('phone').value
      const message = document.getElementById('message').value
      if (name.length < 0) {
          toast.error('Must enter name');
      }
      else if (email.length < 0) {
          toast.error('Must enter email');
      }
      else if (phone.length < 0) {
          toast.error('Must enter phone');
      }
      else if (message.length < 0) {
          toast.error('Must enter message');
      }
      else {

          const params = {
              'name': name,
              'email': email,
              'phone': phone,
              'message': message,
              'propertyId':id,
              'propertymail':myPost?.users?myPost?.users?.email:'newsletter@makkaan.com',
          }

          axios.post(api_url + `enquiry/create`, params).then(res => {
              if (res.data.status === 'ok') {
                  toast.success('Enquiry created successfully');
              }
          })
      }
  }



  const feature = myPost?.feature && myPost?.feature.split(',');

  console.log(feature, '===========================>>>>>>>>>>>')



    return (
      <>
       <div
            id="intro-example"
            class="p-5 text-center bg-image"
            style={{backgroundImage:`url('${require("./../../img/banner/Group 22 (8).png")}')`,height:"170px"}}
        >
        </div>
      <br/>
<div class="container">
  <div class="row">
    <div class="col-md-9">
        <div class="row">
          <div class="col-md-12">
            <h3>{myPost?.title}</h3>
           	<span class="text-muted">{myPost?.location}, {myPost?.city}</span>
              <img src={myPost?.image} class="img-fluid w-100" alt="Wild Landscape" />
              <br/><br/>
              <div class="row">
              	<div class="col-md-2">
              		<img src={require('./../../img/Rectangle 4564.png')} class="img-fluid w-100" alt="Wild Landscape" />
              	</div>
              	<div class="col-md-2">
              		<img src={require('./../../img/Rectangle 4564.png')} class="img-fluid w-100" alt="Wild Landscape" />
              	</div>
              	<div class="col-md-2">
              		<img src={require('./../../img/Rectangle 4564.png')} class="img-fluid w-100" alt="Wild Landscape" />
              	</div>
              	<div class="col-md-2">
              		<img src={require('./../../img/Rectangle 4564.png')} class="img-fluid w-100" alt="Wild Landscape" />
              	</div>
              </div>


                <ul style={{listStyle:"none",paddingLeft:"0px"}} class="nav">
                     <li><i class="far fa-building text-muted"></i> <span>5 Marral</span></li>
                    <li style={{marginLeft:"10px"}}><span><i class="fas fa-bed text-muted"></i> 2 Beds</span></li>
                    <li style={{marginLeft:"10px"}}><i class="fab fa-docker text-muted"></i>  <span>2 Baths</span></li>
                 </ul>
                           
              
<br/>
<div class="row w-100">
  <div class="col-3">
    
    <div
      class="nav flex-column nav-tabs text-center"
      id="v-tabs-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <a
        data-mdb-tab-init
        class="nav-item border-bottom bg_color_maken active"
        id="v-tabs-home-tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-home"
        aria-selected="true"
        >Overview</a
      >
      <a
        data-mdb-tab-init
        class="border-bottom bg_color_maken"
        id="v-tabs-profile-tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-profile"
        aria-selected="true"
        >Decription</a
      >
      <a
        data-mdb-tab-init
        class="border-bottom bg_color_maken"
        id="v-tabs-messages-tab"
        href="#v-tabs-home"
        role="tab"
        aria-controls="v-tabs-messages"
        aria-selected="true"
        >Amenities</a
      >
    </div>
    
  </div>

  <div class="col-9">
   
    <div class="tab-content" id="v-tabs-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-tabs-home"
        role="tabpanel"
        aria-labelledby="v-tabs-home-tab"
      >

      <div class="row">
        <div class="col-md-12">
          {/* <img src={require('./../../img/Group 178.png')} class="w-100" /> */}
          <h3 className="bg_color_maken">Overview</h3>
          <table className="table table-borderless">
            <tr>
              <th>
                <b style={{background:"none"}}>Details</b>
              </th>
            </tr>
            <tr>
              <td>
                <img src={require('./../../assets/images/image 17.png')} style={{background:"none"}}></img>
                Type
              </td>
              <td>
                {myPost?.type}
              </td>
              <td>
                <img src={require('./../../assets/images/image 24.png')} style={{background:"none"}} />
                Area
              </td>
              <td>
                {myPost?.size}
              </td>
            </tr>
            <tr>
              <td>
                <img src={require('./../../assets/images/image 18.png')} style={{background:"none"}}></img>
                Price
              </td>
              <td>
                {myPost?.price}
              </td>
              <td>
                <img src={require('./../../assets/images/image 21.png')}  style={{background:"none"}}/>
                Purpose
              </td>
              <td>
                {myPost?.purpose}
              </td>
            </tr>
            <tr>
              <td>
                <img src={require('./../../assets/images/image 19.png')} style={{background:"none"}}></img>
                Location
              </td>
              <td>
                {myPost?.location}
              </td>
              <td>
                <img src={require('./../../assets/images/image 22.png')} style={{background:"none"}} />
                Bedrooms
              </td>
              <td>
                {myPost?.beds}
              </td>
            </tr>

            <tr>
              <td>
                <img src={require('./../../assets/images/image 20.png')} style={{background:"none"}}></img>
                Bath{`(s)`}
              </td>
              <td>
                {myPost?.baths}
              </td>
              <td>
                <img src={require('./../../assets/images/image 23.png')} style={{background:"none"}} />
                Added
              </td>
              <td>
                {myPost?.type}
              </td>
            </tr>
          </table>
          <br/>
        </div>
        <div class="col-md-12">
           <br/>
           <h2 className='text-bold'>Description</h2>
           <div className='my-4'>
                            <p>
                                {myPost?.description}
                            </p>
                        </div>
       <br/>
       <br/>
        </div>
        <div class="col-md-12">
           {/* <img src={require('./../../img/Group 168.png')} class="w-100" /> */}
           <h2 className='text-bold'>Amenities</h2>
           <div className='row'>
                                {feature && feature.length > 0 ? feature.map(i => {
                                    return (<>
                                        <div className='col-md-4 mb-5'>
                                            <div className='d-flex align-items-center gap-2'>
                                                {/* <i className='fa fa-check fs-2 text-success'></i> */}
                                                {/* <FiCheck color="#4DB749" size={30} /> */}
                                                <img src={require('./../../assets/images/check-mark (2) 2.png')}/>
                                                <div>
                                                    <p className='m-0 p-0 fw-normal'>{i}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>)
                                }) : null}





                            </div>
          
       <br/>
       <br/>
        </div>
      </div>
       
       
      
      

      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-profile"
        role="tabpanel"
        aria-labelledby="v-tabs-profile-tab"
      >
        Profile content
      </div>
      <div
        class="tab-pane fade"
        id="v-tabs-messages"
        role="tabpanel"
        aria-labelledby="v-tabs-messages-tab"
      >
        Messages content
      </div>
    </div>
  

    <br/>


  </div>

</div>
          </div>
        </div>
    </div>
     <div class="col-md-3">
      <div class="card p-3">
       <div class="card-header">
       	 <h5>PKR: {myPost?.price}</h5>
       </div>
      <br/>
       <ul class="list-group list-group-light mb-4">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src={require('./../../img/Group 23.png')} alt="" style={{width:"35px",height:"35px"}}
        />
      <div class="ms-3">
        <p class=" mb-1">{myPost?.phone}</p>
      </div>
    </div>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <img src={require('./../../img/Group 23 (1).png')}  alt=""
        style={{width:"35px",height:"35px"}} />
      <div class="ms-3">
        <p class=" mb-1">{myPost?.phone}</p>
      </div>
    </div>
  </li>
 
</ul>


        <div class="row">
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example1" class="form-control border-bottom" />
      <label class="form-label" for="form8Example1">Your Name</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="email" id="form8Example2" class="form-control border-bottom" />
      <label class="form-label" for="form8Example2">Phone Number</label>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example3" class="form-control border-bottom" />
      <label class="form-label" for="form8Example3">Email Address</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="text" id="form8Example4" class="form-control border-bottom" />
      <label class="form-label" for="form8Example4">Subject</label>
    </div>
  </div>
  <div class="col-d-12 mt-3">
   
    <div data-mdb-input-init class="form-outline">
      <input type="email" id="form8Example5" class="form-control border-bottom" />
      <label class="form-label" for="form8Example5">Your Message</label>
    </div>
  </div>
 
</div>
 <a href="" class="btn bg_makkan text-white w-100 mt-3"  style={{backgroundColor:'#4DB749'}}>SEND YOUR QUESTION</a>

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
                    <h6 style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}>PKR 2222</h6>
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


      </>
      )
    }
    
export default ProjectViews