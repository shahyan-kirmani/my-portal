import React from "react";
import TopNav from "../../components/TopNav";
import BottomNav from "../../components/BottomNav";
import Footer from "../../components/footer/Footer";

const AboutUs = () => {
  return (
    <>
      <TopNav />
      <BottomNav />
      <section className="about_us">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h1>About Us</h1>
              <p>
                <span></span>Makkaan.com- Pakistan's Top Real Estate Investment Platform, offering reliable projects with a high rate of return on investment and marketing solutions in the country.
               
               
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
      <section style={{ backgroundColor: "#F3F7F9" }} className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>Pakistan's Top Real Estate Investment Platform:</h5>
              <small>Welcome to Makkaan.com - Pakistan's top real estate investment platform, where dreams meet homes! With a transparent approach, innovative marketing solutions, and a dedicated team, we strive to deliver remarkable success and contribute to the state's infrastructural growth.</small>
              <br/>
              <br/>
              <h5>Apki Pehchan Apka Makkaan:</h5>
              <small>At Makkaan.com, we connect dreams with homes. Whether you're an investor seeking lucrative opportunities, a developer in need of effective marketing solutions, or a homebuyer searching for your dream home, we have you covered.</small>
              <br/>
              <br/>
              <h5>Advertise with Makkaan.com (Maximize Your Real Estate Visibility):</h5>
              <small>Advertise with Makkaan.com to maximize your real estate visibility and reach your sales targets. Our extensive network and innovative marketing techniques ensure maximum exposure for your properties, connecting you with a wide audience of property enthusiasts and potential buyers.</small>
            </div>

            <div className="col-md-6">
              <div className="text-center">
                <img src={require("../../assets/images/makaan infographic.png")} width="80%" alt="" />
              </div>
            </div>
            
          </div>

          <div className="row g-4 mt-4">
            <div className="col-md-6 position-relative">
              <div className=" d-flex rounded-3 shadow align-items-center bg-white" style={{height:'273px'}}>
                <div className="py-5 ps-3">
                  <div>
                  {/* <img   style={{ top: "20px", left: "-5px",}} className="position-absolute" src={require('../../assets/images/about_1.png')} width="40px" alt="" /> */}
                    <h5>Our Promise to You (Secure and Reliable Real Estate Solutions)?</h5>

                    <small>
                      Our promise is to provide secure and reliable land possession and dream homes to millions of people across the country. We are committed to ensuring security, safety, and opportunity in real estate for individuals. Our mission is to fulfill the dreams of 20 million people, offering them a place they can call home.
                    </small>
                  </div>
                </div>
                <div className="p-2" style={{width:'610px'}}>
                  <img
                    src={require('../../assets/images/about_1.png')}
                    width="100%"
                    alt=""
                    // height="100%"
                    // style={{
                    //   borderRadius: "100% 0% 0% 100% / 48% 100% 0% 52%",
                    //   objectFit:'cover'
                    // }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <div className=" d-flex rounded-3 shadow align-items-center bg-white" style={{height:'273px'}}>
                <div className="py-5 ps-3">
                  <div>
                  {/* <img   style={{ top: "20px", left: "-5px",}} className="position-absolute" src={require('../../assets/images/about_2.png')} width="40px" alt="" /> */}
                    <h5>Unleashing the Future of Real Estate (Your Ultimate One-Stop Solution)?</h5>
                    <small>
                      Makkaan.com envisions becoming the ultimate one-stop solution. We curate an extensive content bank, offering diverse property listings, and provide expert investment consultancy to investors, developers, and real estate marketing agencies. Together, we can shape the future of real estate in Pakistan.
                    </small>
                  </div>
                </div>
                <div className="p-2" style={{width:'610px'}}>
                  <img
                    src={require('../../assets/images/about-4.png' )}
                    width="100%"
                    alt=""
                    // height="100%"
                    // style={{
                    //   borderRadius: "100% 0% 0% 100% / 48% 100% 0% 52%", objectFit:'cover'
                    // }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <div className=" d-flex rounded-3 align-items-center shadow bg-white" style={{height:'273px'}}>
                <div className="py-5 ps-3">
                  <div>
                  {/* <img   style={{ top: "20px", left: "-5px",}} className="position-absolute" src={require('../../assets/images/about_3.png')} width="40px" alt="" /> */}
                    <h5>Events and Expos (Setting New Standards in Real Estate Events)</h5>
                    <small>
                      Makkaan.com takes pride in organizing local and global real estate expos, setting new standards in the industry. Join us as we connect industry professionals, showcase exceptional projects, and pave the way for innovation and growth.
                    </small>
                  </div>
                </div>
                <div className="p-2" style={{width:'610px'}}>
                  <img
                    src={require('../../assets/images/about_2.png')}
                    width="100%"
                    alt=""
                    // height="100%"
                    // style={{
                    //   borderRadius: "100% 0% 0% 100% / 48% 100% 0% 52%", objectFit:'cover'
                    // }}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <div className=" d-flex rounded-3 align-items-center shadow bg-white" style={{height:'273px'}} id="about_cards" >
                <div className="py-5 ps-3">
                  <div>
                   
                    {/* <img   style={{ top: "20px", left: "-5px",}} className="position-absolute" src={require('../../assets/images/about-4.png')} width="40px" alt="" /> */}
                    <h5>How We Facilitate You (Keeping You Informed and Engaged)</h5>
                    <small>
                      We believe in keeping our users informed and engaged. Through initiatives like "Makkaan on Mic," "Makkaan kay Mehmaan," and "Review with Makkaan," we provide constructional and historical factual data, real estate podcasts featuring industry leaders, and honest feedback on multiple housing projects.
                    </small>
                  </div>
                </div>
                <div className="p-2" style={{width:'610px'}}>
                  <img
                    src={require('../../assets/images/about_3.png')}
                    width="100%"
                    alt=""
                    // height="100%"
                    // style={{
                    //   borderRadius: "100% 0% 0% 100% / 48% 100% 0% 52%", objectFit:'cover'
                    // }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
