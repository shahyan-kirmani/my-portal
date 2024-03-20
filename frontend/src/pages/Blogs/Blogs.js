import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import Footer from "../../components/footer/Footer";
import Blogss from "../../components/blogs/Blogs";
import api_url from "../../ApiUrl";
import axios from "axios";
import background from "./../../img/banner/blogs.png";
import { useNavigate } from "react-router-dom";

const Blogs = () => {

  const [myPost, setMyPost] = useState([])

  const navigate=useNavigate()


    useEffect(() => {
        axios.get(api_url + `blog/get`).then(res => {
          console.log(res.data.data,'==========>img')
            setMyPost(res.data.data)
        })
    }, [])



  return (
    <>
    <TopNav/>
    <BottomNav/>
    <Blogss/>
    <section classNameName="about_us">
    <div
    id="intro-example"
    class="p-5 text-center bg-image"
    style={{backgroundImage: `url(${background})`,height: "150px"}}
  >
    
  </div>
      </section>
      <section classNameName="blogs">
       

<div className="p-5 container">
  <div className="text-center">
    <h2 style={{fontWeight:"600",fontSize:"24px",lineHeight:"28.6px"}}>LASTEST BLOGS & POSTS</h2>
    <img src={require('./../../img/arrow.png')} />
  </div>
  <br/>
  <div className="row">

   <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"14.07px",lineHeight:"22.86px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
       <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
       <div class="card-footer">
         <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"14.07px",lineHeight:"22.86px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
         <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
       <div class="card-footer">
       <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5>01</h5>
        <h6 class="text-muted">Thr</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
         <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>

 <div class="card-footer">
 <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>       
    </div>
  </div>
</div>
<br/>

<div className="row">

   <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"14.07px",lineHeight:"22.86px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
       <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
       <div class="card-footer">
         <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"14.07px",lineHeight:"22.86px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
         <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
       <div class="card-footer">
       <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5>01</h5>
        <h6 class="text-muted">Thr</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
         <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>

 <div class="card-footer">
 <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>       
    </div>
  </div>
</div>

<br/>

<div className="row">

   <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"14.07px",lineHeight:"22.86px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road"/>
      <div class="card-body">
       <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
       <div class="card-footer">
         <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5 style={{fontWeight:"500",fontSize:"16.92px",lineHeight:"20.3px"}}>28</h5>
        <h6 class="text-muted" style={{fontWeight:"400",fontSize:"14.07px",lineHeight:"22.86px"}}>Tue</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div class="card-body">
         <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>
       <div class="card-footer">
       <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card">
      <div class="position-relative position-relative-example">
      <div class="bg-white position-absolute  top-0 start-0 p-2 rounded-bottom" style={{marginLeft:"20px"}}>
        <h5>01</h5>
        <h6 class="text-muted">Thr</h6>
      </div>
    </div>
      <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers"/>
      <div class="card-body">
         <Link className="nav-link bg_color_maken" to="/viewBlog">
        <h5 class="card-title" style={{fontWeight:"700",fontSize:"18px",lineHeight:"21.6px"}}>
        Top 10 Home Buying Mistakes to Avoid</h5>
          </Link>
        <p class="card-text text-muted" style={{fontWeight:"400",fontSize:"14px",lineHeight:"20.42px"}}>
          Etiam eget elenentum elit. Aenean dignissim daplibus vestibulum.
        </p>
      </div>

 <div class="card-footer">
 <button class="btn btn-outline-success p-2" style={{borderRadius:"100%",float:"right",width:"12%"}} type="button" data-mdb-ripple-init data-mdb-ripple-color="dark">
    <i class="fas fa-arrow-right-long"></i>
  </button>
      </div>       
    </div>
  </div>
</div>

<br/>



<br/>
<nav aria-label="...">
  <ul className="pagination">
    <li className="page-item disabled">
      <span className="page-link">Previous</span>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item   "  aria-current="page">
      <span className="page-link">
        2
        <span className="visually-hidden">(current)</span>
      </span>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>








      </section>
      <Footer/>
    </>
  );
};

export default Blogs;
