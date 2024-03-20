import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api_url from "../../ApiUrl";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Searchable from 'react-searchable-dropdown';

const Login = () => {
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
      // alert(email.value)
  
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
          <div class="container">
      <div class="row">
        <div class="col-md-6">
<div class="row mx-auto mt-5">
  <div class="col-md-8 mx-auto">

    <div>
      <img src={require('./../../img/logo.png')} class="w-100" />

      <br/>
      <br/>
      <h3>Welcome Back  👋</h3>
      <p>Today is a new day. It's your day. You shape it. 
        <br/>
Sign in to start managing your projects.</p>
    </div>
              <form>
  

  <div data-mdb-input-init class="form-outline mb-4">
    <input type="email" id="email" class="form-control border-bottom" />
    <label class="form-label" for="email">Email address</label>
  </div>

  
  <div data-mdb-input-init class="form-outline mb-4">
    <input type="password" id='password' class="form-control border-bottom" />
    <label class="form-label" for="password">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!" class="bg_color_maken">Forgot password?</a>
    </div>
  </div>


  <button data-mdb-ripple-init type="button" class="btn bg_makkan text-white btn-block mb-4" style={{backgroundColor:'#4DB749'}} onClick={submit}>Sign in</button>


  <div class="text-center">
    <p>Not a member? <a onClick={() => navigate('/signup')} class="bg_color_maken" style={{cursor:"pointer"}}>Register</a></p>
  
  </div>
</form>
  </div>
</div>
        </div>
        <div class="col-md-6">
          <img src={require('./../../img/Art.png')} class="w-100 rounded-8" style={{height:"100vh"}} />
        </div>
      </div>
    </div>
    
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
                              <img src={require('../../assets/images/contract.png')} width="40px" alt="" />
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
                              {/* <img src={require('../../assets/images/house-lock.png')} width="40px" alt="" /> */}
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
                                  {/* <img src={require('../assets/images/contract.png')} width="40px" alt="" /> */}
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
                                  {/* <img src={require('../assets/images/house-lock.png')} width="40px" alt="" /> */}
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
                                  {/* <img src={require('../assets/images/house-lock.png')} width="40px" alt="" /> */}
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
                                  {/* <img src={require('../assets/images/house-lock.png')} width="40px" alt="" /> */}
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
    
    
    
    
    
    
    
    
    
    
    
    
        </div>)  
}

export default Login;