import React, { useEffect, useState } from 'react'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
import { TfiAngleRight } from 'react-icons/tfi'

import api_url from '../../ApiUrl'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ViewBlogs = () => {

    const {id}=useParams()

  const [myPost, setMyPost] = useState({})


  useEffect(() => {
    axios.get(api_url + `blog/get/${id}`).then(res => {
      console.log(res.data, 'mery blog===================================')
      setMyPost(res.data?.data)
    })
  }, [])


  return (
    <>
      <TopNav />
      <BottomNav />
   
              <div
            id="intro-example"
            class="p-5 text-center bg-image"
            style={{backgroundImage:`url('${require('./../../img/banner/Group 22 (6).png')}')`,height:"170px"}}
          >
          </div>
      <br/>
<div class="container">
  <div class="row">
    <div class="col-md-8">
        <div class="row">
          <div class="col-md-12">
            <h2 style={{fontWeight:"700",fontSize:"24px",lineHeight:"33.6px"}}>Top 10 Home Buying Mistakes to Avoid</h2>
            <ul style={{listStyle:"none",paddingLeft:"0px"}} class="nav">
                             <li><i class="fas fa-warehouse text-muted"></i> <span style={{fontWeight:"400",fontSize:"10.51px",lineHeight:"10.51px"}}> Makkan</span> |</li>
                            <li style={{marginLeft:"10px"}}><i class="far fa-calendar text-muted"></i> <span style={{fontWeight:"400",fontSize:"10.51px",lineHeight:"10.51px"}}> 02 Decomber</span></li>
                           
              </ul>
              <img src={require('./../../img/Rectangle 4564.png')} class="img-fluid w-100" alt="Wild Landscape" />
              <br/>
              <br/>
              <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
              <br/>
              <h4 style={{fontWeight:"600",fontSize:"18.39px",lineHeight:"25.7px"}}>Contrary to popular belief, Lorem Ipsum is not simply random</h4>
              <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
              </p>
              <br/>
              <div class="table-responsive">
                <table class="table table-striped">
                 <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
              </table>
              </div>

              <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>

              <div class="container">
                <p style={{fontWeight:"400",fontSize:"13.14px",lineHeight:"19.71px"}}>
                  <i>“Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.”</i>
                </p>

              </div>
              <br/>
              <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>
              <br/>
              <h4 style={{fontWeight:"700",fontSize:"18px",lineHeight:"25.2px"}}>
                Lorem Ipsum is not simply random
              </h4>
              <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard.</p>
              <br/>
              <ol style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>
                <li>Did you come here for something in particular or just general</li>
                <li>Did you come here for something in particular or just general Riker-bashing</li>
                <li>Did you come here for something in particula</li>
              </ol>
              <br/>
              <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum</p>
              <br/><br/>
              <h4 style={{fontWeight:"700",fontSize:"18px",lineHeight:"25.2px"}}>Contrary to popular belief</h4>
              <br/>
              <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
  <li class="nav-item" role="presentation">
    <button
      data-mdb-tab-init
      class="nav-link active"
      id="home-tab0"
      data-mdb-target="#home0"
      type="button"
      role="tab"
      aria-controls="home"
      aria-selected="true"
    >
      Step 1
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      data-mdb-tab-init
      class="nav-link"
      id="profile-tab0"
      data-mdb-target="#profile0"
      type="button"
      role="tab"
      aria-controls="profile"
      aria-selected="false"
    >
      Step 2
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button
      data-mdb-tab-init
      class="nav-link"
      id="contact-tab0"
      data-mdb-target="#contact0"
      type="button"
      role="tab"
      aria-controls="contact"
      aria-selected="false"
    >
      Step 3
    </button>
  </li>
</ul>
<div class="tab-content" id="myTabContent0">
  <div
    class="tab-pane fade show active"
    id="home0"
    role="tabpanel"
    aria-labelledby="home-tab0"
  >
    <h2 style={{fontWeight:"700",fontSize:"18px",lineHeight:"25.2px"}}>Title goes here</h2>
    <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. </p>
  </div>
  <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
    Tab 2 content
  </div>
  <div class="tab-pane fade" id="contact0" role="tabpanel" aria-labelledby="contact-tab0">
     <h2 style={{fontWeight:"700",fontSize:"18px",lineHeight:"25.2px"}}>Title goes here</h2>
    <p style={{fontWeight:"400",fontSize:"14px",lineHeight:"21px"}}>Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. </p>
  </div>
</div>
<br/>

<h3><span class="text-white bg_makkans">See Related </span>Posts</h3>
<div class="row">
   <div class="col-md-6">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5  style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"13.95px",lineHeight:"22.67px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title"  style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>Top 10 Home Buying Mistakes to Avoid</h5>
        <p class="card-text text-muted"  style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
      <div class="card-footer">
         <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",margin:"2px",float:"right"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
   <div class="col-md-6">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"13.95px",lineHeight:"22.67px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill"/>
      <div class="card-body">
        <h5 class="card-title"  style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>Top 10 Home Buying Mistakes to Avoid</h5>
        <p class="card-text text-muted"  style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
      <div class="card-footer">
         <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",margin:"2px",float:"right"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
</div>
<br/>
          </div>
        </div>
    </div>
    <div class="col-md-4">
      <div class="card p-3">
      <h3><span class="text-white bg_makkans"  style={{fontWeight:"600",fontSize:"21px",lineHeight:"29.4px"}}>Popular </span>Posted</h3>
       <div class="row">
     <div class="col-md-12" style={{padding:"5px"}}>
      <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img
              style={{width:"100%",height:"130px"}}
                src={require('./../../img/projects/Rectangle 31.png')}
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start"

              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
               
                <h5 class="card-title"  style={{fontWeight:"500",fontSize:"17px",lineHeight:"25.5px"}}>
                  How To Stage Your Home For A Quick Sale
                </h5>
                  <ul style={{listStyle:"none",paddingLeft:"0px"}} class="nav">
                             <li><i class="fas fa-warehouse text-muted"></i> <span style={{fontWeight:"400",fontSize:"10.51px",lineHeight:"10.51px"}}> Makkan</span> |</li>
                            <li style={{marginLeft:"10px"}}><i class="far fa-calendar text-muted"></i> <span style={{fontWeight:"400",fontSize:"10.51px",lineHeight:"10.51px"}}> 02 Decomber</span></li>
                           
              </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    <br/>
     <div class="col-md-12" style={{padding:"5px"}}>
      <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img
              style={{width:"100%",height:"130px"}}
                src={require('./../../img/projects/Rectangle 31.png')}
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start"

              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
               
                <h5 class="card-title"  style={{fontWeight:"500",fontSize:"17px",lineHeight:"25.5px"}}>
                  How To Stage Your Home For A Quick Sale
                </h5>
                 <ul style={{listStyle:"none",paddingLeft:"0px;"}} class="nav">
                                     <li><i class="fas fa-warehouse text-muted"></i> <span> Makkan</span> |</li>
                                    <li style={{marginLeft:"10px"}}><span><i class="far fa-calendar text-muted"></i> 02 Decomber</span></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    <br/>
     <div class="col-md-12" style={{padding:"5px"}}>
      <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img
              style={{width:"100%",height:"130px"}}
                src={require('./../../img/projects/Rectangle 31.png')}
                alt="Trendy Pants and Shoes"
                class="img-fluid rounded-start"

              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
               
                <h5 class="card-title"  style={{fontWeight:"500",fontSize:"17px",lineHeight:"25.5px"}}>
                  How To Stage Your Home For A Quick Sale
                </h5>
                  <ul style={{listStyle:"none",paddingLeft:"0px"}} class="nav">
                             <li><i class="fas fa-warehouse text-muted"></i> <span style={{fontWeight:"400",fontSize:"10.51px",lineHeight:"10.51px"}}> Makkan</span> |</li>
                            <li style={{marginLeft:"10px"}}><i class="far fa-calendar text-muted"></i> <span style={{fontWeight:"400",fontSize:"10.51px",lineHeight:"10.51px"}}> 02 Decomber</span></li>
                           
              </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </>
  )
}

export default ViewBlogs