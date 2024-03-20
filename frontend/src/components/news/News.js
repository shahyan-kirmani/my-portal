import axios from "axios";
import React, { useEffect, useState } from "react";
import api_url from "../../ApiUrl";
import { useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import BottomNav from "../BottomNav";
import TopNav from "../TopNav";

const News = () => {

  const [myPost, setMyPost] = useState([])

  const navigate=useNavigate()


    useEffect(() => {
        axios.get(api_url + `blog/get`).then(res => {
          console.log(res.data,'mery blog===================================')
            setMyPost(res.data.data)
        })
    }, [])


  return (
    <>
    <TopNav/>
    <BottomNav/>
    <section className="about_us">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7">
              <h1>News</h1>
              <p>
                <span></span> is Pakistan's Largest Online Real Estate Portal
                <br/>
                Connecting Buyers with Sellers within $ <br/>
                outside the country{" "}
              </p>
            </div>
           
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  );
};

export default News;
