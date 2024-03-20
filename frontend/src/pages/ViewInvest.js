import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api_url from "../ApiUrl";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Footer from "../components/footer/Footer";

const ViewInvest = () => {

  const [myPost, setMyPost] = useState([])

  const navigate=useNavigate()

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);


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
              <h1>View Invest</h1>
              <p>
                <span></span> is Pakistan's Largest Online Real Estate Portal
                <br/>
                Connecting Buyers with Sellers within $ <br/>
                outside the country{" "}
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
      <section className="blogs">
        <div className="container-fluid px-0 px-md-5 py-5">
         

          <div className="row g-4">
          <div className="col-md-3">
              <div
                className=" rounded-4  border-4 shadow"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={require('../assets/images/city1.jpg')}
                  height="200px"
                  width="100%"
                  alt=""
                />

                <div className="p-3">
                  <h6 >
                    Faisalabad
                  </h6>
                  {/* <p className="m-0"  style={{fontSize:'14px'}}>
                    {i?.description}
                  </p> */}
                  <button onClick={()=>navigate(`/invest`)}
                    className="btn text-bold"
                    style={{ fontWeight: "600" }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          <div className="col-md-3">
              <div
                className=" rounded-4  border-4 shadow"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={require('../assets/images/city3.jpg')}
                  height="200px"
                  width="100%"
                  alt=""
                />

                <div className="p-3">
                  <h6 >
                    Islamabad
                  </h6>
                  {/* <p className="m-0"  style={{fontSize:'14px'}}>
                    {i?.description}
                  </p> */}
                  <button onClick={()=>navigate(`/invest`)}
                    className="btn text-bold"
                    style={{ fontWeight: "600" }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          <div className="col-md-3">
              <div
                className=" rounded-4  border-4 shadow"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={require('../assets/images/city1.jpg')}
                  height="200px"
                  width="100%"
                  alt=""
                />

                <div className="p-3">
                  <h6 >
                    Faisalabad
                  </h6>
                  {/* <p className="m-0"  style={{fontSize:'14px'}}>
                    {i?.description}
                  </p> */}
                  <button onClick={()=>navigate(`/invest`)}
                    className="btn text-bold"
                    style={{ fontWeight: "600" }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          <div className="col-md-3">
              <div
                className=" rounded-4  border-4 shadow"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={require('../assets/images/city3.jpg')}
                  height="200px"
                  width="100%"
                  alt=""
                />

                <div className="p-3">
                  <h6 >
                    Islamabad
                  </h6>
                  {/* <p className="m-0"  style={{fontSize:'14px'}}>
                    {i?.description}
                  </p> */}
                  <button onClick={()=>navigate(`/invest`)}
                    className="btn text-bold"
                    style={{ fontWeight: "600" }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ViewInvest;

            