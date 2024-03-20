import React, { useEffect, useState } from 'react'
import TopNav from '../../components/TopNav'
import BottomNav from '../../components/BottomNav'
import Footer from '../../components/footer/Footer'
import { TfiAngleRight } from 'react-icons/tfi'
import api_url from '../../ApiUrl'
import axios from 'axios'

const OurTeam = () => {

  const [myPost, setMyPost] = useState([])

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    axios.get(api_url + `team/get`).then(res => {
      console.log(res.data, 'mery blog===================================')
      setMyPost(res.data.data)
    })
  }, [])


  return (
    <>
      <TopNav />
      <BottomNav />
      <>
        {/* Second Row [Team]*/}
        <section className=" Our_team">
          <div className="container py-5">
            <div className="row">
              {/* <div className="col-md-7">
                <h1>Our Team</h1>
                <p>
                  <span></span>Meet the team that goes beyond and above <br/> to deliver extraordinary results.{" "}
                </p>
              </div> */}
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
        <div className='container py-5'>
          <>
            <>
              {/* ********* <3 ********* FIVE ********* <3 ********* */}
              <ul className="five text-center">

                {myPost.length > 0 ? myPost.map(i => {
                  return (
                    <>
                      <li className="transition mt-3">
                        <div className="wrapper">
                          {" "}
                          <p
                            className="more-about"
                            src={i?.about}
                          ></p>
                          <ul className="social">
                            <li className="transition">
                              <a href={i?.twitter}>
                                <img src="http://dooreight.com/codepen/people/twitter.svg" />
                              </a>
                            </li>
                            <li className="transition">
                              <a href={i?.facebook}>
                                <img src="http://dooreight.com/codepen/people/facebook.svg" />
                              </a>
                            </li>
                            <li className="transition">
                              <a href={i?.insta}>
                                <img src="http://dooreight.com/codepen/people/skype.svg" />
                              </a>
                            </li>
                          </ul>
                          <img src={i?.image} style={{width:'150px',height:'150px',borderRadius:'150px',objectFit:'cover'}}/>
                          <h3 className="transition">
                            {i?.name} <em>{i?.designation}</em>
                          </h3>
                          <span className="transition">
                            <div className="text-wrapper transition">
                              <p>
                                {" "}
                                {i?.description}
                              </p>
                            </div>
                          </span>{" "}
                        </div>
                      </li>
                    </>
                  )
                }) : null}


              </ul>

            </>

          </>

        </div>
      </>

      <Footer />
    </>
  )
}

export default OurTeam