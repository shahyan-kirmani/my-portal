import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IoIosBed } from "react-icons/io";
import { MdOutlineBathroom } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
// import required modules
import { Pagination, Navigation } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api_url from "../../ApiUrl";

const AgencySlider = () => {
  const navigate = useNavigate();

  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    axios.get(api_url + `user/get`).then((res) => {
      console.log(res.data, "agencyyyyyyyyyyyy");
      setMyPost(res.data.data);
    });
  }, []);

  return (
    <>
      {myPost.filter((i) => i.signAs === "agency" && i.featured === true)
        .length > 0 ? (
        <div style={{ overflow: "hidden" }} className="mx-3">
          <section className="AgencySlider_card ">
            <div className="container-fluid px-0 px-sm-5 text-center  rounded-5 my-3 py-4">
              <div className="rounded-5 p-3 py-2">
                <Swiper
                  spaceBetween={70}
                  navigation
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Navigation]}
                  className="mySwiper20"
                >
                  <SwiperSlide>
                    <div className="">
                      <div className="row gy-4 text-center justify-content-center">
                      <div class="text-center">
                    <h3
                      style={{
                        fontWeight: "600",
                        fontSize: "24px",
                        lineHeight: "28.8px",
                      }}
                    >
                      TITANIUM AGENCIES
                    </h3>

                    <img
                      src={require("./../../img/arrow.png")}
                      style={{ height: "16px" }}
                    />
                  </div>
                        {myPost.length > 0
                          ? myPost.map((i) => {
                              if (
                                i?.signAs === "agency" &&
                                i.featured === true
                              ) {
                                return (
                                  <>
                                    <div
                                      className="col-lg-3 col-md-4 col-sm-6 px-md-3 "
                                      onClick={() => {
                                        navigate(`/agency_profile/${i?.id}`);
                                      }}
                                    > 
                                      <div
                                        class="p-2 mt-3 card"
                                        style={{ margin: "5px",height:"130px" , width:"300px", cursor:"pointer" , justifyContent:"center" }}
                                      >
                                        <div class="d-flex align-items-center">
                                          <img
                                            src={require("./../../img/agencey/agent-icon.png")}
                                            alt=""
                                            style={{
                                              width: "45px",
                                              height: "45px",
                                            }}
                                            class="rounded-circle"
                                          />
                                          <div class="ms-3">
                                            <p
                                              class="mb-1 text-dark"
                                              style={{
                                                fontWeight: "700",
                                                fontSize: "16px",
                                                lineHeight: "20px",
                                                float:"left",
                                                clear: "both"
                                              }}
                                            >
                                              {i?.fullName}({i?.agencyName})
                                            </p> 
                                            <p
                                              class="text-muted mb-0"
                                              style={{
                                                fontweight: "500",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                float: "left",
                                                clear: "both"
                                              }}
                                            >
                                              {i?.city}
                                            </p>
                                            <p
                                              class="text-muted mb-0"
                                              style={{
                                                fontweight: "500",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                float: "left",
                                                clear: "both"
                                              }}
                                            >
                                              {i?.email}
                                            </p>
                                            <p
                                              class="text-muted mb-0"
                                              style={{
                                                fontweight: "500",
                                                fontSize: "14px",
                                                lineHeight: "17px",
                                                float: "left",
                                                clear: "both"
                                              }}
                                            >
                                              {i?.phone}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      {/* <div className="d-flex align-items-center  myagency">
                                  <div>
                                    <img src={require('./../../img/agencey/1.png')} className="rounded-3 border " alt="" width="90px" height="90px" />
                                  </div>
                                  <div className="ps-3 text-start">
                                    <h6 className="fw-bold" style={{textTransform:'capitalize'}}>{i?.agencyName}</h6>
                                    <p style={{textTransform:'capitalize'}}>{i?.serviceArea}</p>
                                    <p style={{textTransform:'capitalize'}}>{i?.email}</p>
                                  </div>
                                </div> */}
                                    </div>
                                  </>
                                );
                              }
                            })
                          : null}
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                
              </div>

              
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default AgencySlider;
