import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api_url from "../ApiUrl";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Searchable from 'react-searchable-dropdown';

const TopNav = () => {

  const navigate = useNavigate();

  const [myUser, setMyUser] = useState()
  const [propId, setPropId] = useState()
  const [serachRes, setSerachRes] = useState([])




  const myId = localStorage.getItem('mainUserId')


  useEffect((() => {
    axios.get(`${api_url}user/get/${myId}`).then((res) => {
      console.log(res.data.data, '======================>>>>>>>>>>>>>>')
      setMyUser(res.data.data)
    })

  }), [])

  const [display, setDisplay] = useState(false)
  const [forgmail, setForgmail] = useState('')



  const [onlyCustomer, setOnlyCustomer] = useState([])

  useEffect(() => {

    axios.get(`${api_url}property/get`).then((res) => {
      console.log(res);
      const sale = res.data?.data
      setOnlyCustomer(sale)

    }

    )
  }, [])


  const submit = (e) => {
    e.preventDefault();

    const email = document.getElementById('email')
    const password = document.getElementById('password')


    if (email.value.length === 0) {
      toast.error('Must enter email');
    }
    else if (password.value.length === 0) {
      toast.error('Must enter password');
    }

    else {
      const params = {
        email: email.value,
        password: password.value,
      }


      axios.post(`${api_url}login/create`, params).then((res) => {
        console.log(res.data)
        if (res.data.status === 'ok') {
          localStorage.setItem('mainUserId', res.data.data.id)
          toast.success('Login successfully!');
          navigate('/')
          window.location.reload('true')
          document.getElementById('signclose').setAttribute('data-bs-dismiss', "modal")
          document.getElementById('signclose').setAttribute('aria-label', "Close")

        }
        else {
          toast.error(res.data.message);
        }
      })
    }

  }


  const updatepass = (e) => {
    e.preventDefault();

    
    console.log(document.getElementById('forgetotp').value)

    const password = document.getElementById('forgetpassword')
    const otp = document.getElementById('forgetotp')

    if (password.value.length === 0) {
      toast.error('Must enter password');
    }
    else if (otp.value.length === 0) {
      toast.error('Must enter password');
    }

    else {
      const params = {
        email: forgmail,
        password: password.value,
        otp: otp.value,
      }


      axios.put(`${api_url}login/updatepassword`, params).then((res) => {
        console.log(res.data)
        if (res.data.status === 'ok') {
          toast.success('Update successfully!');
          navigate('/')
          window.location.reload('true')
          document.getElementById('signclose').setAttribute('data-bs-dismiss', "modal")
          document.getElementById('signclose').setAttribute('aria-label', "Close")

        }
        else {
          toast.error(res.data.message);
        }
      })
    }

  }





  const submitOtp = (e) => {
    e.preventDefault();

    const email = document.getElementById('forgetemail')




    if (email.value.length === 0) {
      toast.error('Must enter email');
    }

    else {
      const params = {
        email: email.value,
      }


      axios.put(`${api_url}login/otp`, params).then((res) => {
        console.log(res.data)
        if (res.data.status === 'ok') {
          toast.success(res.data.message);
          setForgmail(email.value)


          setDisplay(true)

        }
        else {
          toast.error(res.data.message);
        }
      })
    }

  }


  return (
    <div>
      <ToastContainer />
      <nav
        className="navbar"
        style={{ backgroundColor: "#4DB749", height: '35px' }}
      >
        <div className="container px-2 px-md-5 d-flex justify-content-between align-items-center">
          <div>

          </div>
          <div
            className=""

          >
            <ul className=" ms-auto gap-sm-2 d-flex align-items-center top_menu">
              <li className="nav-item">
                <Link
                  className="nav-link text-white" 
                  style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}
                  aria-current="page"
                  to="/blogs"
                >
                BLOG <span>&nbsp;|&nbsp;</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link text-white" 
                  style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}
                  aria-current="page"
                  to="/blogs"
                >
                Blog <span>| </span>
                </Link>
              </li> */}
              
              <li className="nav-item">
                <Link className="nav-link text-white" to="/career" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}>
                 CAREER <span>|&nbsp;</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/events" style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}>
                EVENT <span>| &nbsp;</span>
                </Link>

              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white" 
                  style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}
                  aria-current="page"
                  to="/our_team"
                >
               TEAM <span>| &nbsp;</span>
                </Link>
              </li>
              {myId && myId.length > 0 ? (
                <>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={require('../assets/images/login.png')} width="20px" height="20px" alt="" />

                      <Link
                        className="nav-link text-white ps-2 me-3"
                      >
                        {myUser?.fullName}
                      </Link>

                    </a>
                    <ul class="dropdown-menu">

                      {myUser?.signAs === "buyer" ? null : <li><a class="dropdown-item" ><p style={{ cursor: 'pointer' }} onClick={() =>
                        navigate('/property_managements')
                      }>Dashboard</p></a></li>}
                      <li><a class="dropdown-item" href="#"><p style={{ cursor: 'pointer' }} onClick={() => {
                        localStorage.removeItem('mainUserId')
                        window.location.reload(true)
                      }}>Logout</p></a></li>
                    </ul>
                  </li>

                </>) : <Link
                  className="nav-link text-white ps-2"
                  to="/login"
                  // data-bs-toggle="modal"
                  // data-bs-target="#exampleModal"
                  style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}
                >
                {/* <img src={require('../assets/images/login.png')} className="me-3" width="30px" alt="" /> */}
                LOGIN <span>| </span>
              </Link>}
              <li className="nav-item">
                <Link
                  className="nav-link text-white" 
                  style={{fontWeight:"600",fontSize:"14px",lineHeight:"16.8px"}}
                  aria-current="page"
                  to="/our_team"
                >
               <i class="fas fa-search"></i> <span></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">

          <div class="modal-content rounded-4">

            <div class="modal-body ">
              <div className="text-center"><h2 className="text-dark">Login</h2></div>
              <div>
                <form className="p-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="form-control py-3"
                          id="email"
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../assets/images/contract.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group position-relative">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control py-3"
                          id='password'
                        />

                        <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                          <img src={require('../assets/images/house-lock.png')} width="40px" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="d-flex py-3 px-4 justify-content-between">
                        <div class=" form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>

                        <div class=" form-check " style={{ cursor: 'pointer' }} data-bs-toggle="modal"
                          data-bs-target="#forgetModal" >
                          <label class="form-check-label text-primary" style={{ cursor: 'pointer' }}  >Forget Your Password?</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="button" className=" btn w-100 text-white btn-lg " id='signclose' style={{ backgroundColor: '#4DB749' }} onClick={submit} >Sign In</button>
                    </div>
                    <div className="col-md-12 mt-5">
                      <button onClick={() => navigate('/signup')} type="button" className="btn w-100 btn-lg text-white " data-bs-dismiss="modal" style={{ backgroundColor: '#F19190' }}

                      >SignUp for Free</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Forget Modal --> */}
      <div
        class="modal fade"
        id="forgetModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">

          <div class="modal-content rounded-4">

            <div class="modal-body ">
              <div className="text-center"><h2 className="text-dark">Forget Password</h2></div>
              <div>
                <form className="p-4">
                  <div className="row">


                    {!display ?
                      <>
                        <div className="col-md-12">
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              placeholder="Email Address"
                              className="form-control py-3"
                              id="forgetemail"
                            />

                            <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                              <img src={require('../assets/images/contract.png')} width="40px" alt="" />
                            </div>
                          </div>
                          <div>

                          </div>
                        </div>

                        <div className="col-md-12">
                          <button type="button" className=" btn w-100 text-white btn-lg mt-3" style={{ backgroundColor: '#4DB749' }} onClick={submitOtp} >Send Otp</button>
                        </div>
                      </>

                      :
                      <>
                        <div className="col-md-12 mt-4">
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              placeholder="OTP"
                              className="form-control py-3"
                              id='forgetotpaa'
                              name="otp"
                              defaultValue={''}
                              hidden={true}
                            />

                            <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                              <img src={require('../assets/images/house-lock.png')} width="40px" alt="" />
                            </div>
                          </div>
                          <div className="form-group position-relative">
                            <input
                              type="text"
                              placeholder="OTP"
                              className="form-control py-3"
                              id='forgetotp'
                              name="otp"
                              defaultValue={''}
                            />

                            <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                              <img src={require('../assets/images/house-lock.png')} width="40px" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mt-4">
                          <div className="form-group position-relative">
                            <input
                              type="password"
                              placeholder="New Password"
                              className="form-control py-3"
                              id='forgetpassword'
                            />

                            <div className="position-absolute " style={{ top: '10px', right: '10px' }}>
                              <img src={require('../assets/images/house-lock.png')} width="40px" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="button" className=" btn w-100 text-white btn-lg mt-3" id='signclose' style={{ backgroundColor: '#4DB749' }} onClick={updatepass} data-bs-dismiss="modal" >Update</button>
                        </div>
                      </>
                    }

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>












    </div>
  );
};

export default TopNav;
