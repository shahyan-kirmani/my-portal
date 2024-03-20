import React, { useEffect, useState } from "react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import ContactUs from "./contactus/ContactUs";
import Footer from "../components/footer/Footer";
import AskedQuestion from "../components/AskedQuestion/AskedQuestion";
import ChairMan from "../components/ChairMan";
import Addvertise from "../components/addvertise/Addvertise";
import Features from "../components/features/Features";
import FeaturesProject from "../components/features/FeaturesProject";
import Property from "../components/property/Property";
import YoutubeVideo from "../components/youtubeVideo/YoutubeVideo";
import Stories from "../pages/Story/Stories";
import Blogs from "../components/blogs/Blogs";
import LastetBlog from "../components/lastetBlog/LastetBlog";
import LatestNews from "../components/LatestNews/LatestNews";
import DiscoverCity from "../components/discoverCity/DiscoverCity";
import { Link } from "react-router-dom";
import AgencySlider from "../components/agencySlider/AgencySlider";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import PropertyCity from "../components/AskedQuestion/PropertyCity";
import MyAd from "./MyAd";


const Home = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div>
      <div className="position-fixed w-100" style={{ zIndex: "999999" }}>
        <TopNav />
        <BottomNav />
      </div>
      <HomeSlider />

      {/* <MyAd/> */}
      <Features />
      <FeaturesProject/>
      <div class="container p-5">
          <div class="row">
            <div class="col-md-12">
              <a href="">
                <img src={require('./../img/ads/home1.png')}  className="rounded-9 img-fluid " style={{width:"100%",height:"390px"}}/>
              </a>
            </div>
          </div>
        </div>
      <AgencySlider />
      <Stories />
      <YoutubeVideo/>
      <div class="container p-5">
          <div class="row">
            <div class="col-md-12">
              <a href="">
                <img src={require('./../img/ads/Group 10092.png')} className="rounded-9 img-fluid " style={{width:"100%",height:"390px"}}/>
              </a>
            </div>
          </div>
        </div>

        <LastetBlog/>
        <LatestNews/>
        <DiscoverCity/>
    
      <AskedQuestion />
      <div class="container p-5">
          <div class="row">
            <div class="col-md-12">
              <a href="">
                <img src={require('./../img/ads/Group 10093 (1).png')} className="rounded-9 img-fluid " style={{width:"100%",height:"390px"}}/>
              </a>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default Home;
