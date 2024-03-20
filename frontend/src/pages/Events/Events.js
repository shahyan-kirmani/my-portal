import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import api_url from "../../ApiUrl";

const Events = () => {

  const [myPost, setMyPost] = useState([])


  useEffect(() => {
    axios.get(api_url + `career/get`).then(res => {
      setMyPost(res.data.data)
    })
  }, [])


  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="about_us">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-7">
              <h1>Events</h1>
              <p>
                <span></span>Experience the pulse of the industry <br/>
                at our dynamic real estate events.{" "}
              </p>
            </div>
            {/* <div className="col-md-5">
              <div className="text-center">
                <img src={require("../../logo.png")} width="350px" alt="" />
              </div>
              <div className="d-flex justify-content-between pt-3">
                <div className="d-flex">
                  <img
                    src={require("../../assets/images/buy.png")}
                    width="30px"
                    height="30px"
                    alt=""
                  />
                  <h3 className="ps-2" style={{ color: "#707070" }}>
                    BUY
                  </h3>
                </div>
                <div className="d-flex ">
                  <img
                    src={require("../../assets/images/investment.png")}
                    height="30px"
                    width="30px"
                    alt=""
                  />
                  <h3 className="ps-2" style={{ color: "#707070" }}>
                    INVEST
                  </h3>
                </div>
                <div className="d-flex">
                  <img
                    src={require("../../assets/images/rent.png")}
                    width="30px"
                    height="30px"
                    alt=""
                  />
                  <h3 className="ps-2 " style={{ color: "#707070" }}>
                    RENT
                  </h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="pt-5 bg-light">
        <div className="container pb-5">
          <h2>Upcoming Events</h2>
          <div className="row pt-4 g-4">
            {myPost.length > 0 ? myPost.map(i => {
              return (
                <>
                  <div className="col-md-4">
                    <Link
                      to="/view_property"
                      className="text-dark pb-3 shadow bg-white position-relative"
                    >
                      <div
                        className="  features   bg-white rounded-4 "
                        style={{ overflow: "hidden" }}
                      >
                        <div className="">
                          <div
                            className="features_img"
                            style={{ overflow: "hidden" }}
                          >
                            <img
                              src={i?.image}
                              height="200px"
                              width="100%"
                              alt=""
                            />
                          </div>

                          <div className="fire_logo">
                            <div
                              className="rounded-2 p-1"
                              style={{ backgroundColor: "#fff" }}
                            >
                              <span>{i?.price}</span>
                            </div>
                          </div>
                          {/* <div className="heart_logo">
                            <img
                              src={require("../../assets/images/heart.png")}
                              alt=""
                              width="40px"
                            />
                          </div> */}
                        </div>
                        <div className="top px-2 d-flex justify-content-between py-3">
                          <div>
                            <span className="text-bold" style={{ color: "#4DB749" }}>
                              SEP
                            </span>
                            <h4>18</h4>
                          </div>
                          <div>
                            <h5>{i?.title}</h5>
                            <p>{i?.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              )
            }) : null}
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;
